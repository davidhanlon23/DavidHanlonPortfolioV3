"use client"
import { SignInForm } from "./components";

const SignIn = () => {
    return(
            <section className="mx-auto w-full max-w-md p-6">
                <div className="mx-auto text-center">
                    <SignInForm />
                </div>
            </section>
    );
};
export default SignIn;
