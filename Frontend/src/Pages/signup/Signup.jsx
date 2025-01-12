import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../hook/useSignup";

const Signup = () => {
  const [signupInputs, setSignupInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  // eslint-disable-next-line no-unused-vars
  const { loading, signup } = useSignup();
  const checkGender = (gender) => {
    setSignupInputs({ ...signupInputs, gender: gender });
  };
  const handleSignupFormSubmit = async (e) => {
    e.preventDefault();
    // console.log(signupInputs);
    await signup(signupInputs);
  };
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className=" text-blue-500">ChatApp</span>
        </h1>
        <form onSubmit={handleSignupFormSubmit}>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Akila Umayanga"
              className=" w-full input input-bordered h-10"
              value={signupInputs.fullName}
              onChange={(e) =>
                setSignupInputs({ ...signupInputs, fullName: e.target.value })
              }
            ></input>
          </div>

          <div>
            <label className=" label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="akilaumayangaw@gmail.com"
              className=" w-full input input-bordered h-10"
              value={signupInputs.userName}
              onChange={(e) =>
                setSignupInputs({ ...signupInputs, userName: e.target.value })
              }
            ></input>
          </div>

          <div>
            <label className=" label">
              <span className=" text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className=" w-full input input-bordered h-10"
              value={signupInputs.password}
              onChange={(e) =>
                setSignupInputs({ ...signupInputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className=" label">
              <span className=" text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className=" w-full input input-bordered h-10"
              value={signupInputs.confirmPassword}
              onChange={(e) =>
                setSignupInputs({
                  ...signupInputs,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>
          <GenderCheckBox
            onChangeGender={checkGender}
            selectedGender={signupInputs.gender}
          />
          <Link
            to={"/login"}
            className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button className=" btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className=" loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// import GenderCheckBox from "./GenderCheckBox";

// const Signup = () => {
//   return <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
//     <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//     <h1 className=" text-3xl font-semibold text-center text-gray-300">
//           Sign Up <span className=" text-blue-500">ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className=" label p-2">
//               <span className="text-base label-text">
//                 Full Name
//               </span>
//             </label>
//             <input type="text" placeholder="Akila Umayanga" className=" w-full input input-bordered h-10"></input>
//           </div>

//           <div>
//           <label className=" label p-2">
//               <span className="text-base label-text">
//                 Username
//               </span>
//             </label>
//             <input type="text" placeholder="akilaumayangaw@gmail.com" className=" w-full input input-bordered h-10"></input>
//           </div>

//           <div>
//             <label className=" label">
//               <span className=" text-base label-text">Password</span>
//             </label>
//             <input type="password" placeholder="Enter password" className=" w-full input input-bordered h-10"/>
//           </div>

//           <div>
//             <label className=" label">
//               <span className=" text-base label-text">Conform Password</span>
//             </label>
//             <input type="password" placeholder="Conform password" className=" w-full input input-bordered h-10"/>
//           </div>
//             <GenderCheckBox/>
//           <a href="#"className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//             Already have an account?
//           </a>
//           <div>
//             <button className=" btn btn-block btn-sm mt-2">Sign Up</button>
//           </div>
//         </form>
//     </div>
//   </div>;
// };

// export default Signup;
