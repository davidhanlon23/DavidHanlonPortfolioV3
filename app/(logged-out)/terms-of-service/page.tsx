import { Metadata } from "next";
import { TermsOfService } from "@/screens";
export const metadata: Metadata = {
    title: 'Terms of Service'
};
export default function TermsOfServicePage() {
    return <TermsOfService />;
}
