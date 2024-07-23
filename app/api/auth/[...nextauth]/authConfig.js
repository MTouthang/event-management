import bcrypt from "bcrypt";
import Credentials from "next-auth/providers/credentials";

import { getUserByEmail } from "@/lib/actions/user.actions";
import { pages } from "next/dist/build/templates/app-page";

export const authConfig = {
  pages: {
    signin: "/login",
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
