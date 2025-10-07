import { useEffect, useState } from "react";
import Logo from "../assets/coding club dp copy 2.svg";
import Avvvatars from "avvvatars-react";
import { useNavigate } from "react-router-dom";
import { SignOutButton } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import { API_ENDPOINTS } from "../apis/api";

export default function ProfilePage() {
  const [token, setToken] = useState();

  const { getToken } = useAuth();

  useEffect(() => {
    async function getUser() {
      try {
        const token = await getToken();
        setToken(token);
        const res = await fetch(`${API_ENDPOINTS.PROFILE}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        });
        const responseData = await res.json();
        setUser(responseData);
      } catch (err) {
        console.log("Error while fetching user", err);
      }
    }
    getUser();
  }, []);

  const [user, setUser] = useState();

  useEffect(() => {
    function fetchUser() {
      const user = localStorage.getItem("user");
      setUser(JSON.parse(user));
    }
    fetchUser();
  }, []);

  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <header className="flex items-center justify-between px-10 py-5">
        <div className="text-sm">
          <img src={Logo} alt="Logo" className="w-24 h-24" />
        </div>
        <SignOutButton />
      </header>

      {/* Content */}
      <main className="px-6 md:px-10">
        {/* Title row */}
        <div className="mb-6 lg:ml-14 flex items-center justify-between">
          <h1 className="text-6xl font-extrabold tracking-tight">
            <span className="text-red-500 mr-2">&lt;</span>
            Profile
            <span className="text-red-500 ml-2">&gt;</span>
          </h1>

          <button
            onClick={() => setEditing((v) => !v)}
            className="rounded-full bg-white text-black px-5 py-2 font-semibold shadow hover:brightness-95"
          >
            {editing ? "Done" : "Edit"}
          </button>
        </div>

        {/* Two columns with vertical dividers */}
        <div className="grid grid-cols-12 gap-6 mt-10">
          {/* Left column: avatar + nav */}
          <aside className="col-span-12 lg:col-span-4 md:ml-14 ">
            <div className="flex flex-col items-start">
              {/* Avatar */}
              <div className="h-44 w-44 rounded-full bg-neutral-800 ring-1 ring-white/10 overflow-hidden">
                {/* placeholder avatar */}
                <Avvvatars
                  value={user ? user.name : "Loading"}

                  style="shape"
                  size={176}
                  textSize={64}
                  colors={["#FF5733", "#33FF57", "#3357FF"]}
                  className="h-full w-full"
                />
              </div>

              {/* Name pill */}
              <div className="mt-4 rounded-lg py-2 text-4xl my-3 font-extrabold">
                {user ? user.name : "Loading"}
              </div>

              {/* Nav */}
              <nav className="mt-4 space-y-2 text-2xl">
                <a className="block font-semibold text-red-500">Profile</a>
                <a className="block text-neutral-300 hover:text-white">
                  Events
                </a>
                <a className="block text-neutral-300 hover:text-white">
                  Hackathon
                </a>
                <a className="block text-neutral-300 hover:text-white">
                  Workshops
                </a>
              </nav>
            </div>
          </aside>

          {/* Right vertical line */}
          <div className="col-span-1 hidden md:block">
            <div className="mx-auto h-full w-px bg-white/30" />
          </div>

          {/* Right column: form */}
          <section className="col-span-12 md:col-span-6">
            <div className="space-y-8">
              {/* Year */}
              <div>
                <label className="mb-2 block text-xl font-bold">Year</label>
                <h1 className="w-full rounded-xl bg-[#252b31] px-5 py-4 text-lg text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30 disabled:opacity-60">
                  {user ? user.year : "Loading"}
                </h1>
              </div>

              {/* Branch */}
              <div>
                <label className="mb-2 block text-xl font-bold">Branch</label>
                <h1 className="w-full rounded-xl bg-[#252b31] px-5 py-4 text-lg text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30 disabled:opacity-60">
                  {user ? user.branch : "Loading"}
                </h1>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-xl font-bold">Email</label>
                <h1 className="w-full rounded-xl bg-[#252b31] px-5 py-4 text-lg text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30 disabled:opacity-60">
                  {user ? user.emailID : "Loading"}
                </h1>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
