import img from "./logo-removebg-preview.png";

export const Header = () => {
  return (
    <div className=" flex justify-center">
      <nav
        className=" fixed py-3 top-5 z-[100000]  font-sans flex   
            font-sans font-semibold  text  backdrop-blur bg-yellow-50/10
          justify-between w-half rounded "
      >
        <div className=" w-10 h-10 mr-10 cursor-pointer">
          <a href="#" />
          <img src={img} />
        </div>
        <ul className="flex flex-row  justify-center my-auto text-xl text-orange-200 mr-10 transition-colors duration-300">
          <li className="pr-8 hover:text-white cursor-pointer transition-colors duration-300">
            Acasa
            <a href="#" />
          </li>
          <li className="pr-8 hover:text-white cursor-pointer transition-colors duration-300">
            Servicii
            <a href="#" />
          </li>
          <li className="pr-8 hover:text-white cursor-pointer transition-colors duration-300">
            Clienti
            <a href="#" />
          </li>
          <li className="pr-8 hover:text-white cursor-pointer transition-colors duration-300">
            Contact
            <a href="#" />
          </li>
        </ul>
      </nav>
    </div>
  );
};
