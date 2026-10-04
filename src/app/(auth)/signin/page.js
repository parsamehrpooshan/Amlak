import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import Signinpage from "@/template/signinpage";

async function Signin() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <Signinpage />;
}

export default Signin;
