// This page is client-only. No server-side auth checks are performed here.
import AuthForm from "@/components/AuthForm";

const Page = () => {
  return <AuthForm type="sign-in" />;
};

export default Page;
