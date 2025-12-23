import { signUp } from "../../controllers/auth.controller";

export async function POST(req: Request) {
  return signUp(req);
}
