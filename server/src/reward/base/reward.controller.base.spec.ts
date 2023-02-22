import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { RewardController } from "../reward.controller";
import { RewardService } from "../reward.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  city: "exampleCity",
  country: "exampleCountry",
  createdAt: new Date(),
  description: "exampleDescription",
  discount: 42,
  expirationDate: new Date(),
  id: "exampleId",
  latitude: "exampleLatitude",
  longitude: "exampleLongitude",
  miles: 42.42,
  title: "exampleTitle",
  totalCount: "exampleTotalCount",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  city: "exampleCity",
  country: "exampleCountry",
  createdAt: new Date(),
  description: "exampleDescription",
  discount: 42,
  expirationDate: new Date(),
  id: "exampleId",
  latitude: "exampleLatitude",
  longitude: "exampleLongitude",
  miles: 42.42,
  title: "exampleTitle",
  totalCount: "exampleTotalCount",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    city: "exampleCity",
    country: "exampleCountry",
    createdAt: new Date(),
    description: "exampleDescription",
    discount: 42,
    expirationDate: new Date(),
    id: "exampleId",
    latitude: "exampleLatitude",
    longitude: "exampleLongitude",
    miles: 42.42,
    title: "exampleTitle",
    totalCount: "exampleTotalCount",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  city: "exampleCity",
  country: "exampleCountry",
  createdAt: new Date(),
  description: "exampleDescription",
  discount: 42,
  expirationDate: new Date(),
  id: "exampleId",
  latitude: "exampleLatitude",
  longitude: "exampleLongitude",
  miles: 42.42,
  title: "exampleTitle",
  totalCount: "exampleTotalCount",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Reward", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RewardService,
          useValue: service,
        },
      ],
      controllers: [RewardController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /rewards", async () => {
    await request(app.getHttpServer())
      .post("/rewards")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expirationDate: CREATE_RESULT.expirationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /rewards", async () => {
    await request(app.getHttpServer())
      .get("/rewards")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          expirationDate: FIND_MANY_RESULT[0].expirationDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /rewards/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rewards"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /rewards/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rewards"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        expirationDate: FIND_ONE_RESULT.expirationDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /rewards existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/rewards")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expirationDate: CREATE_RESULT.expirationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/rewards")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
