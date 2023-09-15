import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="px-2 bg-gray-50 py-10">
      <div className="mx-auto max-w-2xl grid gap-10 py-5">
        <Image
          className="mx-auto rounded-md"
          src={"/product.png"}
          alt="/"
          width={600}
          height={600}
        />
        <h1 className="font-heading lg:text-4xl md:text-3xl text-2xl font-semibold text-center">
          Eliminate All Harmful Radiation Effects from Your Surroundings /
          Unleash the Power of Radiant Health
        </h1>
        <Link
          href={"#buy-section"}
          className="font-semibold bg-yellow-400 lg:px-10 px-20 py-2 rounded-full mx-auto block   outline-yellow-400 outline outline-offset-1 md:text-md text-sm"
        >
          Buy Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
