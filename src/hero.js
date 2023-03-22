import hero from "./plmstfy.png";
export const Hero = () => {
  return (
    <div className="  z-1 w-screen h-screen flex flex-1 bg-[url('./color.jpg')] bg-cover">
      <div className="hero-box h-[747px] overflow-hidden w-[400px]">
        <img
          className=" flex-none relative h-[347]  z-10 right-[0px] top-10"
          src={hero}
        ></img>
        <div className="card bg-gradient-to-b from-orange-600 to-yellow-300 h-[437px] w-96 absolute top-56 left-[30px] z-1 skew-y-[24deg]"></div>
      </div>
      <div className="h-[747px] w-[600px] hero-text h-auto w-96 flex flex-col justify-center mt-2 ml-36  text-sm text-yellow-500 ">
        <h1 className="font-extrabold  text-6xl  w-auto mb-4 ">
          Andrei Mihaiescu
        </h1>
        <p className="text-3xl  self-center font-bold">Antrenor Personal</p>
        <p className="text-2xl  self-center font-semibold text-yellow-500 tracking-wide mt-36"></p>
        <button class=" mt-4 font-bold text-xl self-center h-18 w-42 px-8 py-4  text-orange-50 transition-colors duration-300 bg-orange-600 rounded focus:shadow-outline hover:bg-orange-50 hover:text-orange-600">
          Apasa aici
        </button>
      </div>
    </div>
  );
};
