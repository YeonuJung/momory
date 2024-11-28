import { redirect } from "next/navigation";

export function redirectToLogin(momory_uuid?: string) {
    const redirectUri = momory_uuid ? `/?auth_error=unauthorized&redirect_uri=/momory/${momory_uuid}` : `/?auth_error=unauthorized`;
    redirect(redirectUri);
  }