const featureList = [
  "Mobile version",
  "your Account",
  "Make changes online to your booking",
  "Customer service help",
  "Become an affiliate",
  "Travel.in for your business",
];
const footerList = [
  "Contrives",
  "Regions",
  "Cities",
  "Districts",
  "Airports",
  "Hotels",
  "Places of interest",
];
const currentDate = new Date();

const Footer = () => {
  return (
    <div>
      <div className="bg-blue-800 grid place-items-center p-4 border-b border-white">
        <button className="p-2 border border-white text-white">
          List your property
        </button>
      </div>
      {/* ------------------------ FEATURES ------------------------ */}
      <div className="flex px-24 py-2 justify-between items-center bg-blue-800 text-sm">
        {featureList.map((item, index) => (
          <a
            target="_blank"
            key={index}
            className="text-white underline cursor-pointer"
          >
            {item}
          </a>
        ))}
      </div>
      {/* ------------------------ OPTIONS ------------------------ */}
      <div className="bg-white text-blue-700 grid grid-cols-5 px-20 py-6">
        {Array(5)
          .fill(0)
          .map((_,i) => (
            <div key={i}>
              {footerList.map((item, index) => (
                <div>
                  <a
                    target="_blank"
                    key={index}
                    className="cursor-pointer text-sm"
                  >
                    {item}
                  </a>
                </div>
              ))}
            </div>
          ))}
      </div>
      {/* ------------------------ COPYRIGHT ------------------------ */}
      <div className="px-16 py-4 flex justify-between text-blue-700 font-semibold border-t">
        <p>Travel.in</p>
        <p>&copy; all rights reserved 2022 - {currentDate.getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
