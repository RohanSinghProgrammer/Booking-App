const demoData = [
  {
    img: "https://th.bing.com/th/id/OIP.39do8RXOROSrDM2M-2TKAAHaEo?w=223&h=180&c=7&r=0&o=5&pid=1.7",
    title: "Hotel Taj",
    desc: "Mumbai",
    price: "$900",
    rating: 8.9,
  },
  {
    img: "https://th.bing.com/th/id/OIP.azAh7GP3SpQe_1QmqA0ISAHaEK?w=288&h=180&c=7&r=0&o=5&pid=1.7",
    title: "JW Marriott",
    desc: "Delhi",
    price: "$1200",
    rating: 9.3,
  },
  {
    img: "https://th.bing.com/th/id/OIP.39do8RXOROSrDM2M-2TKAAHaEo?w=223&h=180&c=7&r=0&o=5&pid=1.7",
    title: "The Majestic Haven",
    desc: "Bangalore",
    price: "$1300",
    rating: 9.1,
  },
  {
    img: "https://th.bing.com/th/id/OIP.Etok2G2E6j04a4VULYjF4QHaEo?w=262&h=180&c=7&r=0&o=5&pid=1.7",
    title: "The Regal Respite",
    desc: "Goa",
    price: "$1900",
    rating: 9.5,
  },
];

const FeaturedProperties = () => {
  return (
    <div className="flex items-center space-x-4 my-4">
      {demoData.map((item, index) => (
        <div
          key={index}
          className="flex-1 rounded-md overflow-hidden cursor-pointer"
        >
          <img
            src={item.img}
            alt={item.title}
            className="h-44 w-full object-cover"
          />
          <div className="p-1.5 tracking-wider">
            <p className="font-bold text-lg">{item.title}</p>
            <p className="text-gray-700 text-sm">{item.desc}</p>
            <p className="font-semibold">Starting from {item.price}</p>
            <div className="flex items-center space-x-1.5 mt-0.5">
              <button className="px-1 bg-blue-900 text-white rounded-md">
                {item.rating}
              </button>
              <span className="text-sm">Excellent</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
