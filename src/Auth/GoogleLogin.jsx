import { SignIn } from "@clerk/clerk-react";
import { API_BASE_URL } from "../apis/api";

export default function GoogleLogin() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <SignIn signUpUrl={`${API_BASE_URL}/register`} />
    </div>
  );
}
