import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../apis/api";

export default function Register() {
  return (
    <div className="registration-root">
      {/* quick-scoped styles for this component */}
      <style>{`
        :root{
          --bg:#0b0b0c;
          --panel:#141419;
          --panel2:#1a1b22;
          --text:#f5f5f5;
          --muted:#bdbdbf;
          --accent:#ff2b2b;
          --input:#2a2c36;
          --inputFocus:#353746;
          --ring:rgba(255,255,255,.12);
          --cardBorder:rgba(255,255,255,.18);
          --gradA:#7b5cff;
          --gradB:#ff7b6e;
        }
        .registration-root{
          color:var(--text);
          background:var(--bg);
          min-height:100dvh;
          width:100%;
          overflow-x:hidden;
        }
        .container{
          max-width:1180px;
          margin:0 auto;
          padding:56px 24px 110px;
          position:relative;
        }
        .rails{ position:absolute; inset:0; pointer-events:none }
        .rail{
          position:absolute; top:40px; bottom:40px; width:2px;
          background:linear-gradient(to bottom, transparent 0 6%, #ffffff22 6% 94%, transparent 94% 100%);
          border-radius:2px;
        }
        .rail.left{ left:72px } .rail.right{ right:72px }

        .brand{
          display:flex; align-items:center; gap:10px;
          color:#fff; font-weight:700; letter-spacing:.3px;
          margin-bottom:12px;
        }
        .club{ padding:8px 14px; border:2px solid #fff; border-radius:10px; font-size:18px }
        .campus{ margin-left:8px; font-weight:600; opacity:.85; font-size:14px }

        .title{
          font-size:clamp(44px,6vw,84px);
          font-weight:800; letter-spacing:-1px; margin:10px 0 30px;
        }
        .angle{ color:var(--accent) }

        .card{
          position:relative;
          border-radius:28px;
          border:1.5px solid var(--cardBorder);
          background:
            radial-gradient(1200px 400px at 70% 0%, #ffffff08 0%, transparent 60%),
            url("data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'>\
<defs><pattern id='topo' width='400' height='400' patternUnits='userSpaceOnUse'>\
<path d='M0,120 C80,90 140,130 220,110 S360,70 400,90' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/>\
<path d='M0,200 C90,170 150,210 230,190 S360,150 400,170' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/>\
<path d='M0,280 C70,250 140,290 220,270 S360,230 400,250' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/>\
</pattern></defs><rect width='400' height='400' fill='url(%23topo)'/></svg>") repeat,
            linear-gradient(180deg, var(--panel) 0%, var(--panel2) 100%);
          padding:38px 34px;
          box-shadow:0 10px 30px rgba(0,0,0,.35), inset 0 0 0 1px #ffffff10;
        }
        .grid{
          display:grid; grid-template-columns:1.1fr 1fr; gap:clamp(22px,3.5vw,40px);
        }
        @media (max-width:880px){ .grid{ grid-template-columns:1fr } }

        .pitch h2{ margin:4px 0 14px; font-size:clamp(28px,3.2vw,44px); font-weight:800 }
        .pitch p{ margin:0; color:var(--muted); line-height:1.6 }
        .aboutBtn{
          margin-top:24px; display:inline-block; padding:12px 22px;
          color:#111; background:#fff; border-radius:999px; font-weight:700; border:none; cursor:pointer;
          transition:transform .12s ease, box-shadow .2s ease;
          box-shadow:0 6px 16px rgba(255,255,255,.15);
        }
        .aboutBtn:hover{ transform:translateY(-1px) }

        .form{ display:grid; gap:14px; align-content:start }
        .field{ display:grid; grid-template-columns:auto 1fr; align-items:center; gap:14px }
        .label{ display:flex; align-items:center; gap:10px; font-size:20px; font-weight:800 }
        .dash{ width:14px; height:3px; background:var(--accent); border-radius:2px }
        .input{
          height:48px; border-radius:14px; background:var(--input);
          border:1px solid #ffffff14; padding:0 16px; color:var(--text); outline:none;
          transition:border-color .2s ease, background .2s ease, box-shadow .2s ease;
        }
        .input::placeholder{ color:#a4a6b3 }
        .input:focus{ background:var(--inputFocus); border-color:#ffffff33; box-shadow:0 0 0 4px var(--ring) }

        .actions{ display:flex; justify-content:flex-end; margin-top:28px }
        .cta{
          height:54px; padding:0 28px; border:none; border-radius:999px;
          color:#111; font-weight:800; font-size:18px; cursor:pointer;
          background:linear-gradient(90deg, var(--gradA), var(--gradB));
          box-shadow:0 10px 24px rgba(127,88,255,.35), 0 6px 18px rgba(255,123,110,.25);
          transition:transform .12s ease, filter .2s ease, box-shadow .2s ease;
        }
        .cta:hover{ transform:translateY(-1px); filter:brightness(1.05) }
        .status{ margin-top:10px; font-size:.95rem; color:var(--muted) }
        .status.ok{ color:#7ef29a } .status.err{ color:#ff8b8b }
      `}</style>

      <div className="container">
        {/* rails */}
        <div className="rails" aria-hidden="true">
          <span className="rail left" />
          <span className="rail right" />
        </div>

        {/* header */}
        <div className="brand">
          <span className="club">&lt;Coding Club&gt;</span>
          <span className="campus">TKMCE</span>
        </div>

        <h1 className="title">
          <span className="angle">&lt;</span>Registration
          <span className="angle">&gt;</span>
        </h1>

        {/* card */}
        <section className="card">
          <div className="grid">
            {/* left copy */}
            <div className="pitch">
              <h2>JOIN US</h2>
              <p>
                Collaborate &amp; connect with passionate coders and creators
                like you
              </p>
              <button
                className="aboutBtn"
                type="button"
                onClick={() => alert("About Coding Club TKMCE")}
              >
                About us
              </button>
            </div>

            {/* form */}
            <FormBlock />
          </div>
        </section>
      </div>
    </div>
  );
}

function FormBlock() {
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const year = String(data.get("year") || "").trim();
    const branch = String(data.get("branch") || "").trim();
    const email = String(data.get("email") || "").trim();
    const password = String(data.get("password") || "").trim();
    const confirmPassword = String(data.get("confirmPassword") || "").trim();

    const status = e.currentTarget.querySelector(".status");
    const fields = ["name", "year", "branch", "email", "password"];
    const values = { name, year, branch, email, password };
    const missing = fields.filter((field) => !values[field]);

    if (missing.length) {
      status.textContent = "Please fill all required fields.";
      status.className = "status err";
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = "Enter a valid email address.";
      status.className = "status err";
      return;
    }

    if (isNaN(year) || year < 1 || year > 4) {
      status.textContent = "Please enter a valid year 1-4.";
      status.className = "status err";
      return;
    }

    if (password.length < 6) {
      status.textContent = "Password must be at least 6 characters long.";
      status.className = "status err";
      return;
    }

    if (password !== confirmPassword) {
      status.textContent = "Passwords do not match.";
      status.className = "status err";
      return;
    }

    status.textContent = "Creating account...";
    status.className = "status";

    try {
      const res = await fetch(`${API_ENDPOINTS.REGISTER}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name,
          branch,
          emailID: email,
          year: parseInt(year),
          password,
        }),
      });

      const responseData = await res.json();

      if (res.ok) {
        status.textContent = responseData.message || "Registration successful!";
        status.className = "status ok";

        setTimeout(() => {
          navigate("/Login");
          console.log("Registration successful! Redirect to login...");
        }, 2000);

        console.log("Registration successful:", responseData);
      } else {
        status.textContent =
          responseData.message || `Registration failed (${res.status})`;
        status.className = "status err";
        console.error("Registration failed:", responseData);
      }
    } catch (err) {
      console.error("Registration error:", err);
      status.textContent = "Network error. Please check your connection.";
      status.className = "status err";
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label className="label" htmlFor="name">
          Name <span className="dash" />
        </label>
        <input
          id="name"
          name="name"
          className="input"
          placeholder="Your name"
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="year">
          Year <span className="dash" />
        </label>
        <input
          id="year"
          name="year"
          className="input"
          placeholder="1st / 2nd / 3rd / 4th"
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="branch">
          Branch <span className="dash" />
        </label>
        <input
          id="branch"
          name="branch"
          className="input"
          placeholder="CSE / ECE / ..."
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="email">
          Email ID <span className="dash" />
        </label>
        <input
          id="email"
          name="email"
          className="input"
          type="email"
          placeholder="abc@tkmce.ac.in"
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="password">
          Password <span className="dash" />
        </label>
        <input
          id="password"
          name="password"
          className="input"
          type="password"
          placeholder="Enter password"
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="confirmPassword">
          Confirm <span className="dash" />
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          className="input"
          type="password"
          placeholder="Confirm password"
        />
      </div>

      <div className="actions">
        <button className="cta" type="submit">
          Register
        </button>
      </div>

      <p className="status" />
    </form>
  );
}
