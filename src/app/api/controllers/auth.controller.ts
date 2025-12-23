// controllers/auth.controller.ts
import { AuthService } from "../services/auth.service";

export async function signIn(req: Request) {
  const { email, password } = await req.json();
  console.log(email, password);

  try {
    const data = await AuthService.login(email, password);
    return Response.json(data, { status: 200 });
  } catch (e: any) {
    return new Response(e.message, { status: 400 });
  }
}

export async function signUp(req: Request) {
  const { email, password, role } = await req.json();

  try {
    const data = await AuthService.signUp(email, password, role);
    return Response.json(data, { status: 201 });
  } catch (e: any) {
    return new Response(e.message, { status: 400 });
  }
}
