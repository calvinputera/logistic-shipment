import mailSend from "../assets/mail-send.gif";
import { Link } from "react-router-dom";
import { FaCogs } from "react-icons/fa";

const Success = () => {
  return (
    <div className="p-5 mt-16">
      <p className="text-center text-slate-400 font-semibold">
        Thank you for trusting us.
      </p>
      <h2 className="font-semibold text-xl text-center mt-4">
        An invoice will be sent to your email immediately
      </h2>
      <img src={mailSend} alt="mailSend" className="mt-5 w-28 mx-auto" />
      <Link
        to="/"
        className="text-base text-slate-800 font-semibold items-center mb-4 border-2 border-slate-800 p-4 rounded-md w-1/2 mx-auto flex justify-center mt-7 hover:border-blue-500 hover:text-blue-500 md:w-1/5"
      >
        <p>Back to Home</p>
      </Link>
      <p className="flex items-center justify-center mt-24 text-gray-400 ">
        <span className="mr-2">
          <FaCogs />
        </span>
        Still Development
      </p>
    </div>
  );
};

export default Success;
