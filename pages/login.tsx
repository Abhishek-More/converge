import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { signIn } from "next-auth/react";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Login() {
  return (
    <div className="flex justify-center w-screen">
      <p>You are signed out!</p>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
  );
}
