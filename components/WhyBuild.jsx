import Image from "next/image";

const list = [
  { name: "car", src: "/car.jpg" },
  { name: "mobile", src: "/mobile.jpg" },
  { name: "television", src: "/television.jpg" },
  { name: "oven", src: "/oven.jpg" },
  { name: "fan", src: "/fan.jpg" },
  { name: "massage chair", src: "/chair.jpg" },
];

const Element = ({ name, src }) => (
  <div className="border-2--">
    <Image
      alt="/"
      width={500}
      height={500}
      src={src}
      className="rounded-sm  h-[250px] object-cover object-center"
    />
    <p className="capitalize text-lg text-white py-2 font-heading">{name}</p>
  </div>
);

const WhyBuilt = () => {
  return (
    <section className="py-20 bg-black ">
      <div className="text-white mx-auto max-w-5xl mb-20 px-2">
        <h3 className="text-center md:text-3xl text-2xl text font-heading font-semibold">
          Biggest Radiation Sources Around Us
        </h3>
        <p className="text-center mt-5">
          Based on clinical research by a world-renowned professor on PubMed,
          Dr. Magda Havas, Ph.D., electromagnetic radiation causes Rouleau
          formation (unhealthy blood).
        </p>
      </div>

      <div className=" mx-auto max-w-7xl mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 max-w-7xl mx-auto mt-10 gap-5 px-5">
          {list.map((e) => (
            <Element {...e} key={e.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuilt;
