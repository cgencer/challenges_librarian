export type Environment =
  | "dev"
  | "prod";

export interface Config
{
    environment: Environment;
	jwt_secret: string,
	port: number,
	db_url: string,
	db_uri: string,
}
