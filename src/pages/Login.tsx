import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../firebase";

export default function Login() {
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");

  const logInHandler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      console.log(user);
    } catch (error) {
      toast.error("Sign in fail");
    }
  };

  return (
    <div className="login">
      <main>
        <h1 className="heading">Login</h1>
        <div className="">
          <label htmlFor="">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            id=""
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="">
          <label>Date of Birth</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            id=""
          />
        </div>
        <div className="">
          <p>Already Signed In Once</p>
          <button onClick={logInHandler}>
            <FcGoogle />
            <span>Sign in with google</span>
          </button>
        </div>
      </main>
    </div>
  );
}
