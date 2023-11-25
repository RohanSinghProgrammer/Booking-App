const demoData = [
  {
    img: "https://th.bing.com/th/id/OIP.J0TBL7LZb3g6kiEZH_KE2AHaE6?w=248&h=180&c=7&r=0&o=5&pid=1.7",
    title: "Hotels",
    desc: "559 hotels",
  },
  {
    img: "https://th.bing.com/th/id/OIP.vnz67OxOmi8xN738RcjpsAHaEL?w=326&h=183&c=7&r=0&o=5&pid=1.7",
    title: "Apartments",
    desc: "258 hotels",
  },
  {
    img: "https://th.bing.com/th/id/OIP.pHsLoGEH-EJJUEJTNmtSjgHaEo?w=280&h=180&c=7&r=0&o=5&pid=1.7",
    title: "Resorts",
    desc: "586 hotels",
  },
  {
    img: "https://th.bing.com/th/id/OIP.PFYjvQIJ2wUcUb0sLoncDAHaFj?w=256&h=192&c=7&r=0&o=5&pid=1.7",
    title: "Villas",
    desc: "683 hotels",
  },
  {
    img: "https://th.bing.com/th/id/OIP.LlmdR43YaJI7ucDYIsuyygHaE8?w=251&h=180&c=7&r=0&o=5&pid=1.7",
    title: "Cabins",
    desc: "342 hotels",
  },
];

const PropertyList = () => {
  return (
    <div className="flex items-center space-x-2 h-44 my-4">
      {demoData.map((item, index) => (
        <div
          key={index}
          className="h-full flex-1 overflow-hidden rounded-md cursor-pointer"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-[70%] object-cover"
          />
          <div className="px-2 mt-0.5">
            <p className="font-semibold">{item.title}</p>
            <p className="font-light text-sm text-gray-700">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
