import { Metadata } from "next";
import { SignIn } from "@/screens";

export const metadata: Metadata = {
  title: 'Sign In'
};

export default function SignInPage() {
  return <SignIn />;
}
