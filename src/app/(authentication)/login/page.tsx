import { RouteGuard } from "@/components/common/route-guard";
import { LoginForm } from "@/features/login-form";
import { JsonLd } from "@/components/seo/json-ld";
import { loginMetadata } from "@/lib/metadata";
import { generateLoginStructuredData } from "@/lib/structured-data";

export const metadata = loginMetadata;

export default function LoginPage() {
  return (
    <>
      <JsonLd data={generateLoginStructuredData()} />
      <RouteGuard requireAuth={false} redirectTo="/dashboard">
        <LoginForm />
      </RouteGuard>
    </>
  );
}
