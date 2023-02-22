import { Reward } from "../reward/Reward";

export type Organisation = {
  createdAt: Date;
  id: string;
  largeImageUrl: string | null;
  mediumImageUrl: string | null;
  name: string | null;
  rewards?: Array<Reward>;
  smallImageUrl: string | null;
  updatedAt: Date;
  website: string | null;
};
