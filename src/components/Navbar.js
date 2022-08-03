import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full p-5 bg-blue-600 flex justify-center items-center">
      <img src={Logo} alt="logo" className="w-14" />
    </div>
  );
};

export default Navbar;
