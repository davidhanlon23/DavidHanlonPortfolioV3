import { Metadata } from "next";
import { SignUp } from "@/screens";

export const metadata: Metadata = {
  title: 'Sign Up'
};

export default function SignUpPage() {
  return <SignUp />;
}
