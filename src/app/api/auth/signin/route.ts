import { signIn } from "../../controllers/auth.controller";

export async function POST(req: Request) {
  return signIn(req);
}
