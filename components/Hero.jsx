import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="relative md:h-[800px] h-screen flex items-center justify-center">
      <video
        loop
        muted
        autoPlay
        src="/charging.mov"
        className="absolute w-full h-full object-cover z-0 object-center"
      />

      <section className="px-2 py-10 relative">
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
