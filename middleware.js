import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // console.log(req.nextauth.token,"token");
  },
  {
    pages: {
      signIn: "/signin",
    },
    secret: process.env.NEXTAUTH_SECRET,
  }
);


