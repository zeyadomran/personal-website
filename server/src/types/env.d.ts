declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    MONGO_URL: string;
    SESSION_SECRET: string;
    CORS_ORIGIN: string;
    EMAIL_USER: string;
    EMAIL_PASS: string;
  }
}