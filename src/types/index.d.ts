declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.pdf";
declare module "*.ico";
declare module "*.webp";

type device = {
  id: number;
  vendor: "samsung" | "iphone" | "xiaomi" | string;
  name: string;
  image: string;
  dateCreated: string;
  status: string;
  ipv4: string;
};
