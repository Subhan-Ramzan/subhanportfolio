import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import connectDB from "@/utils/connectDB";
import User from "@/models/NextAuth";

export const authoptions = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      try {
        await connectDB();

        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            provider: account.provider,
          });
        }

        return true;
      } catch (error) {
        console.error('Error in signIn callback:', error);
        return false; 
      }
    },
    async session({ session, token }) {
      await connectDB();

      const dbUser = await User.findOne({ email: session?.user?.email });
      if (dbUser) {
        session.user.id = dbUser._id;
      }

      return session;
    },
  },
});

export { authoptions as GET, authoptions as POST };
