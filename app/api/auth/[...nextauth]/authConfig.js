import { getUserByEmail } from "@/app/lib/actions/user.action";
import bcrypt from "bcrypt";
import Credentials from "next-auth/providers/credentials";

export const authConfig = {
  pages: {
    signIn: "/login",
  },

  providers: [
    Credentials({
      async authorize(credentials) {
        const email = credentials?.email.toLowerCase();
        const password = credentials?.password;

        const user = await getUserByEmail(email);
        if (user && (await bcrypt.compare(password, user.password))) {
          return user;
        }
        return null;
      },
    }),
  ],
};
