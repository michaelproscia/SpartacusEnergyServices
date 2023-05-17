import windmills from "../assets/windmills.jpg";

function Home() {
  return (
    <div>
      <div className="relative">
        <img
          className="z-0 backdrop-brightness-50 sm:max-w-3xl lg:max-w-7xl m-auto"
          src={windmills}
        />
        <div className="absolute inset-0 bg-gray-500 opacity-25 sm:max-w-3xl lg:max-w-7xl m-auto"></div>
        <div
          className="
        absolute 
        z-100
        top-10
        md:top-1/4
        left-1/2
        transform
        -translate-x-1/2
        -translate-y-1/2>
        flex
        flex-col
        gap-5
        "
        >
          <h2 className="text-center text-2xl sm:text-3xl lg:text-5xl whitespace-nowrap text-red-600">
            Spartacus Energy Services
          </h2>
          <p className="text-center text-xs sm:text-sm lg:text-base xl:text-xl">
            Choosing Spartacus Energy Services allows you to save money while
            fighting climate change. We generate over 75% of our energy using
            renewable resources and provide you with the most competitive rate
            possible.
            <br />
            The Power of Choice is in your hands, choose Spartacus!
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
