import windmills from "../assets/windmills.jpg";
import mall from "../assets/mall.jpg";
import houses from "../assets/houses.jpg";
import panels from "../assets/panels.jpg";

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
          <h1 className="text-center text-2xl sm:text-3xl lg:text-5xl whitespace-nowrap text-red-600">
            Spartacus Energy Services
          </h1>
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
      <div className="bg-gray-400 grid grid-cols-3 gap-10 py-6 px-4 sm:max-w-3xl lg:max-w-7xl m-auto">
        <h2 className="text-black h-48 text-xl ">Commercial Energy</h2>
        <div className="bg-red-900 h-48 text-red-100">
          Spartacus Energy was founded by industry veterans with over 50 years
          of experience. Our energy experts help you better manage your monthly
          power consumption and budget so you can focus on running your
          business.
        </div>
        <img className="h-48 object-cover" src={mall} />
        <h2 className="text-black h-48 text-xl">Residential Energy</h2>
        <div className="bg-red-900 text-red-100 h-48">
          We provide our clients with custom plans at a fixed monthly rate to
          protect you from volatile markets. Save money, reduce climate change,
          and cancel any time.
        </div>
        <img className="h-48 object-cover" src={houses} />
      </div>
      <img className="sm:max-w-3xl lg:max-w-7xl m-auto" src={panels} />
    </div>
  );
}
export default Home;
