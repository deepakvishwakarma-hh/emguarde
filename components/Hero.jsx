import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className=" bg-[url('/64414fafdc6a8_emGuardeoffersyoustateoftheartprotectionagainstEMwaves2472.png')] bg-no-repeat bg-cover bg-center">
      <section className="px-2 bg-black/30 py-10">
        <div className="mx-auto max-w-2xl grid gap-10 py-5">
          <Image
            className="mx-auto rounded-md"
            src={"/emGuarde-With-Box-Beside.png"}
            alt="/"
            width={600}
            height={600}
          />
          <h1 className="font-heading lg:text-5xl md:text-3xl text-2xl font-semibold text-center text-white">
            Protect yourself against the{" "}
            <b className="text-yellow-500">Radiation</b> lurking all around us
          </h1>
          <Link
            href={"#buy-section"}
            className="font-semibold bg-yellow-400 lg:px-10 px-20 py-2 rounded-md mx-auto block md:text-md  "
          >
            Buy Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
