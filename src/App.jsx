import "./App.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import { useState, useRef, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Events from "./components/Events";
import Execom from "./components/Execom";
import Contacts from "./components/Contacts";
import { Toast } from "primereact/toast";
import AdminLogin from "./adminPages/AdminLogin";
import AdminDashboard from "./adminPages/AdminDashboard";
import AdminEvents from "./adminPages/AdminEvents";
import Loader from "./components/Loader/loader";
import ProtectedAdminRoute from "./protectedRoutes/ProtectedAdminRoute";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import ProtectedUserRoute from "./protectedRoutes/protectedUserRoute";
import ProfilePage from "./userPages/UserDashboard";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import GoogleRegister from "./Auth/GoogleRegister";
import GoogleLogin from "./Auth/GoogleLogin";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  function RequireAuth() {
    const token = localStorage.getItem("CCUserToken");
    if (token?.length > 0) return <Outlet />;
    else return <Navigate to="/" element={<Home />} exact />;
  }

  const toast = useRef(null);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-source w-full h-full max-w-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toast ref={toast} position="bottom-center" />
          <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/execom" element={<Execom />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route element={<RequireAuth />}></Route>
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/Login" element={<GoogleLogin />} />
                <Route path="/register" element={<GoogleRegister />} />
                <Route path="/register" element={<GoogleRegister />} />
                <Route path="/addDetails" element={<Register />} />
                {/* Protected Admin Routes */}
                <Route element={<ProtectedAdminRoute />}>
                  <Route path="/admin-dashboard" element={<AdminDashboard />} />
                  <Route path="/admin-events" element={<AdminEvents />} />
                </Route>

                {/* Protected User Routes */}
                <Route path="/user_dashboard" element={<ProfilePage />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </ClerkProvider>
        </>
      )}
    </div>
  );
}

export default App;
