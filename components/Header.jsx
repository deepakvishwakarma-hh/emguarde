import Image from "next/image";
const Header = () => {
  return (
    <header className="bg-black flex items-center justify-center gap-3">
      <Image alt="logo" src={"/logo.png"} width={50} height={50} />
      <h5 className=" py-5 font-heading text-lg text-white font-semibold">
        EmGuarde
      </h5>
    </header>
  );
};
export default Header;
