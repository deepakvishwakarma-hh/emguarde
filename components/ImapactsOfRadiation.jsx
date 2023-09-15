import Image from "next/image";

const ImpactsOfRadiation = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="mx-auto max-w-5xl">
        <h3 className="text-center text-3xl font-heading font-semibold">
          Impacts of Radiations
        </h3>
        <p className="text-center text-sm mt-5">
          With so many radiation sources bombarding our body at different
          frequencies almost all the time, it is difficult to avoid the toxic
          effects of radiation. Possible consequences include
        </p>
      </div>

      <div className="grid md:grid-cols-2 max-w-7xl mx-auto mt-10 gap-5">
        <div className="flex items-center justify-center bg-gray-100 rounded-md">
          <Image
            className="mx-auto rounded-md"
            src={"/product.png"}
            alt="/"
            width={500}
            height={500}
          />
        </div>
        <div className="">
          <ul className=" list-decimal ml-5 gap-2 grid">
            <li className="p-2">
              <h3 className="font-heading font-semibold text-lg">
                Chronic fatigue
              </h3>
              <p className="text-sm text-gray-600">
                Increased risk of Alzheimer&apos;s Disease and cataracts
              </p>
            </li>
            <li className="p-2">
              <h3 className="font-heading font-semibold text-lg">
                Reduced blood circulation
              </h3>
              <p className="text-sm text-gray-600">
                Increased risk of Alzheimer&apos;s Disease and cataracts
              </p>
            </li>
            <li className="p-2">
              <h3 className="font-heading font-semibold text-lg">
                Higher chance of miscarriages
              </h3>
              <p className="text-sm text-gray-600">
                Increased risk of Alzheimer&apos;s Disease and cataracts
              </p>
            </li>
            <li className="p-2">
              <h3 className="font-heading font-semibold text-lg">
                Possible birth defects in babies
              </h3>
              <p className="text-sm text-gray-600">
                Increased risk of Alzheimer&apos;s Disease and cataracts
              </p>
            </li>
            <li className="p-2">
              <h3 className="font-heading font-semibold text-lg">
                Chronic fatigue
              </h3>
              <p className="text-sm text-gray-600">
                Increased risk of Alzheimer&apos;s Disease and cataracts
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ImpactsOfRadiation;
