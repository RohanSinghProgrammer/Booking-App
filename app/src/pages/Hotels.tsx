import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchedItem from "../components/SearchedItem";

const Hotels = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [showDate, setShowDate] = useState<boolean>(false)
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Header />
      <div className="flex py-4 px-16 space-x-4 relative">
        {/* --------------------------- FILTER --------------------------- */}
        <div className="flex-1 bg-yellow-400 p-4 rounded-lg flex flex-col space-y-3 h-fit sticky top-4">
          <p className="text-blue-700 text-2xl font-bold">Search</p>
          <label htmlFor="dest">Destination</label>
          <input
            type="text"
            id="dest"
            placeholder={destination}
            className="p-2"
          />
          <p>Check-in date</p>
          <span onClick={()=> setShowDate(prev => !prev)} className="p-2 bg-white">{`${format(
            date[0].startDate,
            "MM/dd/yyyy"
          )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
          {showDate && <DateRange
            onChange={(item) => setDate([item.selection])}
            minDate={new Date()}
            ranges={date}
            editableDateInputs
          />}
          <p>Options</p>
          <div className="px-2">
            <div className="flex items-center justify-between mb-3">
              <label htmlFor="min" className="text-sm text-gray-700">Min price per night</label>
              <input type="number" id="min" min={1} className="w-16 px-1 py-0.5 focus:outline-none" />
            </div>
            <div className="flex items-center justify-between mb-3">
              <label htmlFor="max" className="text-sm text-gray-700">Max price per night</label>
              <input type="number" id="max" min={1} className="w-16 px-1 py-0.5 focus:outline-none" />
            </div>
            <div className="flex items-center justify-between mb-3">
              <label htmlFor="adult" className="text-sm text-gray-700">Adult</label>
              <input type="number" id="adult" min={1} className="w-16 px-1 py-0.5 focus:outline-none" placeholder={options.adult} />
            </div>
            <div className="flex items-center justify-between mb-3">
              <label htmlFor="child" className="text-sm text-gray-700">Children</label>
              <input type="number" id="child" min={0} className="w-16 px-1 py-0.5 focus:outline-none" placeholder={options.children} />
            </div>
            <div className="flex items-center justify-between mb-3">
              <label htmlFor="room" className="text-sm text-gray-700">Rooms</label>
              <input type="number" id="room" min={1} className="w-16 px-1 py-0.5 focus:outline-none" placeholder={options.room} />
            </div>
          </div>
          <button className="py-3 bg-blue-800 text-white w-full">Search</button>
        </div>
        {/* --------------------------- RESULTS -------------------------- */}
        <div className="flex-[3]">
          <SearchedItem />
          <SearchedItem />
          <SearchedItem />
          <SearchedItem />
          <SearchedItem />
          <SearchedItem />
        </div>
      </div>
    </div>
  );
};

export default Hotels;
