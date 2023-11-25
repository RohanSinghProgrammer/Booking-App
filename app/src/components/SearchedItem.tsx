import { useNavigate } from "react-router-dom";

const SearchedItem = () => {
  const navigate = useNavigate();
  const slug = "slug";
  return (
    <div
      className="p-2 border rounded-md mb-4 flex h-64"
    >
      {/* Image */}
      <img
        src="https://th.bing.com/th/id/OIP.Rl8hh60sDOLoUPCfkP0uHAHaE7?rs=1&pid=ImgDetMain"
        alt="hotel room"
        className="w-64 h-full object-cover"
      />
      {/* MIDDLE */}
      <div className="flex-1 text-sm flex flex-col justify-between pl-4">
        <h2 className="text-blue-700 font-bold text-2xl">
          Tower street apartments
        </h2>
        <p>500m from center</p>
        <p className="bg-green-500 text-white py-1 px-0.5 w-fit">
          Free airport taxi
        </p>
        <p className="font-semibold">Studio Apartment with air conditioning</p>
        <p>
          Entire studio . 1 bathroom . 21m<sup>2</sup> 1 full bed
        </p>
        <p className="text-green-500 font-semibold text-lg">
          Free cancellation
        </p>
        <p className="text-green-500">
          You can cancel later, so lock in this great price today!
        </p>
      </div>
      {/* RIGHT SIDE */}
      <div className="h-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <p>Excellent</p>
          <div className="h-7 w-7 bg-blue-900 grid place-items-center">
            <p className="text-white">8.9</p>
          </div>
        </div>
        <div>
          <h2 className="text-end text-2xl mb-2">$123</h2>
          <p className="text-sm text-gray-700 mb-1">Inclued taxes and fees</p>
          <button onClick={() => navigate(`/hotel/${slug}`)} className="py-2 rounded-md bg-blue-700 text-white w-full font-semibold">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchedItem;
