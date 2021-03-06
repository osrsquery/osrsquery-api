import type { ContextUser } from "..";
declare global {
  namespace Express {
    export interface Request {
      user?: ContextUser;
      startTime: number; // defaults to Date.now()
    }
  }
}
