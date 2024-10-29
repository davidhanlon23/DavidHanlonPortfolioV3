"use client"
import { SignUpForm } from "./components";
import { WaitList } from "@/elements";
import { useSearchParams } from 'next/navigation'
import { Suspense } from "react";

const RenderContent = () => {
    const searchParams = useSearchParams()
    const adminQueryParam = searchParams.get('admin');
    const enableSignUp  = adminQueryParam === 'davidhanlon23';
    return (
        <section className="mx-auto w-full max-w-md p-6">
        { enableSignUp ? 
        <div className="mx-auto text-center">
            <SignUpForm />
        </div>
            :  
        <div>
            <WaitList />
        </div>
        }
    
    </section>
    );
}
const SignUp = () => {
 
    return(
            <Suspense>
                <RenderContent />
            </Suspense>
     
    );
};
export default SignUp;