import { FaDumbbell } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
export const Servicii = () => {
  return (
    <div className="w-screen h-screen bg-black text-white grid grid-cols-3 pt-24">
      <div className="first flex justify-center">
        <FaDumbbell className="h-12 w-12" />
      </div>
      <div className="second flex justify-center">
        <FaHeartbeat className="h-12 w-12" />
      </div>
      <div className="third flex justify-center">
        <FaUserMd className="h-12 w-12" />
      </div>
    </div>
  );
};
