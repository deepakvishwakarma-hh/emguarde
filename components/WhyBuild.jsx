import Image from "next/image";
const list = ["Car", "mobile", "television", "oven", "fan", "chair"];
const Element = ({ name }) => (
  <div className="border-2--">
    <Image
      className="rounded-sm  h-[250px] object-cover object-center"
      src={`/${name}.jpg`}
      alt="/"
      width={500}
      height={500}
    />
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
            <Element name={e} key={e} />
          ))}
        </div>

        {/* <ul className="grid md:grid-cols-3 gap-1 bg-yellow-100-- p-1">
          <li className="p-10 bg-yellow-50">
            <h3 className="font-heading font-semibold text-lg">
              Poor circulation
            </h3>
            <p className="  text-gray-600">
              Enhance blood flow and circulation with specialized compression
              socks.
            </p>
          </li>
          <li className="p-10 bg-yellow-50">
            <h3 className="font-heading font-semibold text-lg">
              Low oxygen transport
            </h3>
            <p className="  text-gray-600">
              Improve oxygen levels during sleep with an advanced sleep apnea
              device.
            </p>
          </li>
          <li className="p-10 bg-yellow-50">
            <h3 className="font-heading font-semibold text-lg">
              Reduced waste removal
            </h3>
            <p className="  text-gray-600">
              Support kidney health with a natural detox supplement.
            </p>
          </li>
          <li className="p-10 bg-yellow-50">
            <h3 className="font-heading font-semibold text-lg">
              Headache, fatigue
            </h3>
            <p className="  text-gray-600">
              Alleviate headaches and fatigue with a smart hydration tracker.
            </p>
          </li>
          <li className="p-10 bg-yellow-50">
            <h3 className="font-heading font-semibold text-lg">
              Difficulty concentrating
            </h3>
            <p className="  text-gray-600">
              Boost focus and mental clarity with a mindfulness meditation app.
            </p>
          </li>
          <li className="p-10 bg-yellow-50">
            <h3 className="font-heading font-semibold text-lg">
              Numbness, tingling, cold extremities
            </h3>
            <p className="  text-gray-600">
              Relieve numbness and improve circulation with heated foot
              massager.
            </p>
          </li>
        </ul> */}
      </div>
    </section>
  );
};

export default WhyBuilt;
