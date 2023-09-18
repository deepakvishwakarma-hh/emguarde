const Fixedbg = () => {
  return (
    <section
      className="md:h-[50vh] h-screen bg-cover bg-center bg-fixed flex items-end justify-end p-10"
      style={{ backgroundImage: "url('/pexels-vecislavas-popa-1571459.jpg')" }}
    >
      <div className="bg-white p-10 rounded-md max-w-3xl bg-opacity-90">
        <h5 className=" font-heading mb-2 text-xl font-semibold md:text-2xl">
          Eliminate Radiation from your Surroundings
        </h5>
        <p>
          Using EmGuarde, you don&apos;t need to unplug from the world. Just
          plug it into any power source, including portable chargers, and let it
          work its magic.
        </p>
      </div>
    </section>
  );
};
export default Fixedbg;
