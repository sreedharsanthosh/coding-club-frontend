import { SignUp } from "@clerk/clerk-react";
import { API_BASE_URL } from "../apis/api";

export default function GoogleRegister() {
  console.log(API_BASE_URL);
  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <SignUp
        signInUrl={`${API_BASE_URL}/login`}
        fallbackRedirectUrl={`${API_BASE_URL}/addDetails`}
      />
    </div>
  );
}
