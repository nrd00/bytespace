import { useState } from "react";
import { NavLink } from "react-router";
import { Lock, Eye, EyeOff } from "lucide-react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Logo from "./Logo";
import Button from "./Button";
import SignUpCard1 from '../assets/images/signup-card.svg'
import SignUpCard from '../assets/images/signup-card1.svg'
import HappyStudents from "./HappyStudents";
import limeCone from '../assets/images/lime-cone.svg';
import limeEclipse from '../assets/images/lime-eclipses.svg';


const authConfig = {
  signup: {
    title: "Sign up and come in",
    subtitle:
      "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
    formTitle: "Create an Account",
    formHeadings: "Welcome to ByteSpace",
    button: "Continue",
  },

  login: {
    title: "Sign in with ease",
    subtitle:
      "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
    formTitle: "Sign In",
    formHeadings: "Welcome Back",
    button: "Sign In",
  },

  reset: {
    title: "Retrive your access.",
    subtitle: "Enter your email and we'll send you a reset link",
    formTitle: "Reset your password",
    formHeadings: "We are with you",
    button: "Send Reset Link",
  },
};

function AuthForm({ mode = "login" }) {
  const [showPassword, setShowPassword] = useState(false);

  const config = authConfig[mode];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="min-h-screen blue-bg px-4 py-8">
      <div className="container w-full max-w-md">
        <Logo usage="authForm" />
        <div className="grid grid-cols-1 md:grid-cols-2 py-5 items-center">
          <article className="px-5">
            <h2 className="text-[#F5F5F6] text-lg pb-4 font-semibold">{config.title}</h2>
            <p className="text-[#F5F5F6] text-base pb-4 font-normal">{config.subtitle}</p>
            <div className="py-20 relative mt-5">
                <div>
                    <img src={SignUpCard} className="max-w-80 max-h-94"/>
                </div>
                <div className="absolute top-0 right-0">
                    <img src={SignUpCard1} className="max-w-80 max-h-90"/>
                </div>
                <div className="absolute bottom-5 right-0">
                    <HappyStudents className="bg-[#D4FB20]"/>
                </div>
                <div className="absolute top-0 left-0">
                    <img src={limeEclipse} />
                </div>
                <div className="absolute -bottom-10 -left-10">
                    <img src={limeCone} className="max-w-46 max-h-46"/>
                </div>
            </div>
          </article>
          <aside className="px-5">
            <div className="rounded-2xl bg-white p-2 shadow-xl sm:p-8">
              <h2 className="text-[#003BE2] text-lg">{config.formTitle}</h2>
              <p className="text-[#242528] text-4xl font-bold pt-2 pb-4">{config.formHeadings}</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name - Signup only */}
                {mode === "signup" && (
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Full Name
                    </label>

                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        placeholder="Jamie Devis"
                        className="w-full rounded-lg border border-slate-300 py-3 pl-4 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                      />
                    </div>
                  </div>
                )}

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>

                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      placeholder="designer@example.com"
                      className="w-full rounded-lg border border-slate-300 py-3 pl-4 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                  </div>
                </div>

                {/* Password - Signup & Login */}
                {mode !== "reset" && (
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-slate-700"
                      >
                        Password
                      </label>

                      {mode === "login" && (
                        <NavLink
                          to="/reset-password"
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot password?
                        </NavLink>
                      )}
                    </div>

                    <div className="relative">
                      <Lock
                        size={19}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="w-full rounded-lg border border-slate-300 py-3 pl-10 pr-11 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? (
                          <EyeOff size={19} />
                        ) : (
                          <Eye size={19} />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Submit */}
                <div className="flex justify-end">
                  <Button text={config.button} />
                </div>

                {/* Other Login - Login only */}
                {mode === "login" && (
                  <div>
                    <div className="w-full max-w-md mx-auto my-6 flex flex-col items-center">
                      {/* "or" Divider Section */}
                      <div className="relative w-full flex items-center justify-center my-6">
                        <div className="border-t border-gray-300 w-full"></div>
                        <span className="bg-white px-4 text-gray-400 text-sm absolute font-normal">
                          or
                        </span>
                      </div>

                      {/* Social Buttons Section */}
                      <div className="flex items-center gap-4 mt-2">
                        {/* Facebook Button */}
                        <button
                          type="button"
                          aria-label="Log in with Facebook"
                          className="w-16 h-16 rounded-2xl border border-gray-200 flex items-center justify-center transition-all hover:bg-gray-50 active:scale-95 shadow-sm"
                        >
                          <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                            <FaFacebookF className="text-xl translate-x-[0.5px]" />
                          </div>
                        </button>

                        {/* Google Button */}
                        <button
                          type="button"
                          aria-label="Log in with Google"
                          className="w-16 h-16 rounded-2xl border border-gray-200 flex items-center justify-center transition-all hover:bg-gray-50 active:scale-95 shadow-sm"
                        >
                          <FaGoogle className="text-2xl text-black" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </form>

              {/* Bottom navigation */}
              <div className="mt-6 text-center text-sm text-slate-500">
                {mode === "signup" && (
                  <>
                    Already have an account?{" "}
                    <NavLink
                      to="/login"
                      className="font-semibold text-indigo-600 hover:underline"
                    >
                      Login
                    </NavLink>
                  </>
                )}

                {mode === "login" && (
                  <>
                    New user?{" "}
                    <NavLink
                      to="/signup"
                      className="font-semibold text-indigo-600 hover:underline"
                    >
                      Create an account
                    </NavLink>
                  </>
                )}

                {mode === "reset" && (
                  <>
                    Remember your password?{" "}
                    <NavLink
                      to="/login"
                      className="font-semibold text-indigo-600 hover:underline"
                    >
                      Back to login
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default AuthForm;
