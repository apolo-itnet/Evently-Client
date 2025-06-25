import React, { useState } from "react";
import { NavLink } from "react-router";
import NavbarBG from "../Components/NavbarBG";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset link sent! Check your inbox");
      setMessage("Password reset email sent! Check your inbox.");
      setError("");
      setEmail("");
    } catch (error) {
      toast.warning("Failed to send email! Check your email address");
      setError("Failed to send email. Check your email address.");
      setMessage("");
    }
  };

  return (
    <div>
      <NavbarBG />
      <div
        data-aos="fade-in"
        data-aos-once="true"
        data-aos-duration="1000"
        className="relative w-full h-[calc(100vh-240px)] mx-auto"
      >
        <div className="inset-0 flex flex-col items-center justify-center z-20 px-4 top-20 ">
          <div className=" inset-0 top-30 z-30 w-full md:w-lg mx-auto py-6">
            <div>
              <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-2xs">
                <div className="p-4 sm:p-7">
                  <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800">
                      Forgot password?
                    </h1>
                    <p className="mt-2 text-sm text-gray-600 pl-2">
                      Remember your password?
                      <NavLink
                        to="/login"
                        className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium"
                      >
                        Login here
                      </NavLink>
                    </p>
                  </div>

                  <div className="mt-5">
                    {/* Form */}
                    <form onSubmit={handleResetPassword}>
                      <div className="grid gap-y-4">
                        {/* Form Group */}
                        <div>
                          <label htmlFor="email" className="block text-sm mb-2">
                            Email address
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm 
                              focus:outline-none focus:border-rose-500 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none"
                              required
                              aria-describedby="email-error"
                            />
                          </div>
                          {error && (
                            <p className="text-sm text-red-600 mt-2">{error}</p>
                          )}
                          {message && (
                            <p className="text-sm text-green-600 mt-2">
                              {message}
                            </p>
                          )}
                        </div>
                        {/* End Form Group */}

                        <button
                          type="submit"
                          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg btn-secondary btn text-white "
                        >
                          Reset password
                        </button>
                      </div>
                    </form>
                    {/* End Form */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
