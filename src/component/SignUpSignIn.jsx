// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
// eslint-disable-next-line no-unused-vars
import { signInWithRedirect } from "firebase/auth";

import { doc, getDoc, setDoc } from "firebase/firestore";
import Header from "./Header/Header";
import { toast } from "react-toastify";

const SignUpSignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const createUserDocument = async (user) => {
    setLoading(true);
    if (!user) return;

    const userRef = doc(db, "users", user.uid);
    const userData = await getDoc(userRef);

    if (!userData.exists()) {
      const { displayName, email, photoURL } = user;
      const createdAt = new Date();

      try {
        await setDoc(userRef, {
          name: displayName || name,
          email,
          photoURL: photoURL || "",
          createdAt,
        });
        toast.success("Account Created!");
      } catch (error) {
        toast.error(error.message);
      }
    }
    setLoading(false);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserDocument(result.user);
      toast.success("Successfully Signed Up!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
      toast.success("Logged In Successfully!");
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      await createUserDocument(result.user);
      toast.success("User Authenticated Successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 -mt-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-6">
          <h2
            className={`text-4xl font-extrabold text-center ${
              isLogin ? "text-blue-700" : "text-green-600"
            } relative`}
          >
            {isLogin ? "Welcome Back to Financly" : "Sign Up on Financly"}
            <span className="block h-1 w-24 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-2 rounded-full"></span>
          </h2>

          <form
            onSubmit={isLogin ? handleSignIn : handleSignUp}
            className="space-y-4"
          >
            {!isLogin && (
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            )}

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />

            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none transition duration-300 cursor-pointer"
            >
              {loading ? "Loading..." : isLogin ? "Log In" : "Sign Up"}
            </button>
          </form>

          <div className="relative flex items-center justify-center">
            <span className="absolute bg-white px-4 text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          <button
            disabled={loading}
            onClick={handleGoogleSignIn}
            className="w-full py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none transition duration-300 cursor-pointer"
          >
            {loading ? "Loading..." : "Continue with Google"}
          </button>

          <p
            onClick={() => setIsLogin(!isLogin)}
            className="text-center text-blue-600 cursor-pointer hover:underline -mt-2.5 transition duration-300"
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Log In"}
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpSignIn;
