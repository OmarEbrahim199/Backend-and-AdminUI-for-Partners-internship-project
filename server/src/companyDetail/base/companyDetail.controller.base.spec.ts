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
import { CompanyDetailController } from "../companyDetail.controller";
import { CompanyDetailService } from "../companyDetail.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  businessAddress: "exampleBusinessAddress",
  businessCategory: "exampleBusinessCategory",
  businessEmail: "exampleBusinessEmail",
  businessPhoneNumber: "exampleBusinessPhoneNumber",
  companyName: "exampleCompanyName",
  companyUrl: "exampleCompanyUrl",
  createdAt: new Date(),
  cvrNumber: "exampleCvrNumber",
  id: "exampleId",
  logo: "exampleLogo",
  shortIntroductionToTheCompany: "exampleShortIntroductionToTheCompany",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  businessAddress: "exampleBusinessAddress",
  businessCategory: "exampleBusinessCategory",
  businessEmail: "exampleBusinessEmail",
  businessPhoneNumber: "exampleBusinessPhoneNumber",
  companyName: "exampleCompanyName",
  companyUrl: "exampleCompanyUrl",
  createdAt: new Date(),
  cvrNumber: "exampleCvrNumber",
  id: "exampleId",
  logo: "exampleLogo",
  shortIntroductionToTheCompany: "exampleShortIntroductionToTheCompany",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    businessAddress: "exampleBusinessAddress",
    businessCategory: "exampleBusinessCategory",
    businessEmail: "exampleBusinessEmail",
    businessPhoneNumber: "exampleBusinessPhoneNumber",
    companyName: "exampleCompanyName",
    companyUrl: "exampleCompanyUrl",
    createdAt: new Date(),
    cvrNumber: "exampleCvrNumber",
    id: "exampleId",
    logo: "exampleLogo",
    shortIntroductionToTheCompany: "exampleShortIntroductionToTheCompany",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  businessAddress: "exampleBusinessAddress",
  businessCategory: "exampleBusinessCategory",
  businessEmail: "exampleBusinessEmail",
  businessPhoneNumber: "exampleBusinessPhoneNumber",
  companyName: "exampleCompanyName",
  companyUrl: "exampleCompanyUrl",
  createdAt: new Date(),
  cvrNumber: "exampleCvrNumber",
  id: "exampleId",
  logo: "exampleLogo",
  shortIntroductionToTheCompany: "exampleShortIntroductionToTheCompany",
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

describe("CompanyDetail", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CompanyDetailService,
          useValue: service,
        },
      ],
      controllers: [CompanyDetailController],
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

  test("POST /companyDetails", async () => {
    await request(app.getHttpServer())
      .post("/companyDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /companyDetails", async () => {
    await request(app.getHttpServer())
      .get("/companyDetails")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /companyDetails/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/companyDetails"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /companyDetails/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/companyDetails"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /companyDetails existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/companyDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/companyDetails")
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
