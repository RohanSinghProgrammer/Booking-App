import { useState } from "react";
import {
  MdDateRange,
  MdDirectionsCar,
  MdFlight,
  MdMan,
  MdNightsStay,
} from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { FaBed } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";

type dateType = {
  startDate: Date;
  endDate: Date;
  key: string;
};
type optionsType = {
  [key: string]: number;
};
type Props = {
  type?: string;
};

const Header = ({ type }: Props) => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState<string>("");
  const [date, setDate] = useState<dateType[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState<optionsType>({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [showDate, setShowDate] = useState<boolean>(false);
  const [showOption, setShowOption] = useState<boolean>(false);
  const handleOption = (name: string, operation: string) => {
    if (Object.keys(options).includes(name)) {
      setOptions((prev) => {
        let item: number = prev[name];
        return {
          ...prev,
          [name]: operation === "i" ? item + 1 : item - 1,
        };
      });
    } else {
      throw new Error("Option doesn't exists!");
    }
  };
  const handleNavigate = () =>
    navigate("/hotels", { state: { destination, date, options } });
  return (
    <div
      className={`bg-blue-800 text-white px-40 ${type == "list" && "pb-16"}`}
    >
      {/* -------------------------------- NAVBAR -------------------------------- */}
      <div className="py-4 flex justify-between">
        <Link to={"/"} className="font-semibold text-xl">
          Travel.in
        </Link>
        <div className="flex gap-4">
          <button className="bg-white text-blue-800 px-3 py-1.5">
            Register
          </button>
          <button className="bg-white text-blue-800 px-3 py-1.5">Login</button>
        </div>
      </div>
      {/* ------------------------------ BOOKING VARIANTS ------------------------------ */}
      <div className="flex items-center space-x-8 py-4">
        <button className="px-2 py-1 rounded-2xl flex items-center space-x-1 border-white border">
          <MdNightsStay />
          <p>Stays</p>
        </button>
        <button className="px-2 py-1 rounded-2xl flex items-center space-x-1">
          <MdFlight />
          <p>Flights</p>
        </button>
        <button className="px-2 py-1 rounded-2xl flex items-center space-x-1">
          <IoCarSport />
          <p>Car Rentals</p>
        </button>
        <button className="px-2 py-1 rounded-2xl flex items-center space-x-1">
          <SiYourtraveldottv />
          <p>Attractions</p>
        </button>
        <button className="px-2 py-1 rounded-2xl flex items-center space-x-1">
          <MdDirectionsCar />
          <p>Airport Taxies</p>
        </button>
      </div>
      {type == "list" && (
        <>
          {/* --------------------------------- TITLE --------------------------------- */}
          <div className="flex flex-col space-y-4 mt-4">
            <p className="text-4xl font-bold">
              A lifetime of discounts? its Genius.
            </p>
            <p className="text-sm text-gray-200 tracking-wider">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Travel.in account
            </p>
            <button className="p-2 bg-blue-600 w-fit">Sign in/ Register</button>
          </div>
          {/* --------------------------------- FILTER --------------------------------- */}
          <div className="bg-white w-full py-1 px-12 border-2 border-yellow-500 mt-14 -mb-[5.5rem] flex justify-between items-center text-gray-400">
            {/* SEARCH */}
            <div className="flex items-center space-x-4">
              <FaBed className="text-gray-400 text-xl" />
              <input
                type="search"
                placeholder="Where are you going?"
                className="focus:outline-none text-gray-700"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </div>
            {/* SELECT DATE */}
            <div className="flex items-center space-x-2 relative">
              <MdDateRange />
              <p
                className="cursor-pointer"
                onClick={() => setShowDate((prev) => !prev)}
              >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</p>
              {/* CALENDER */}
              {showDate && (
                <DateRange
                  minDate={new Date()}
                  ranges={date}
                  onChange={(item) => setDate([item.selection as dateType])}
                  editableDateInputs
                  moveRangeOnFirstSelection={false}
                  className="absolute top-9 -left-16 z-10 shadow-xl"
                />
              )}
            </div>
            {/* SELECT PEOPLE & ROOM */}
            <div className="flex items-center space-x-2 relative">
              <MdMan />
              <p
                className="cursor-pointer"
                onClick={() => setShowOption((prev) => !prev)}
              >
                {options.adult} adults {options.children} children{" "}
                {options.room} room
              </p>
              {/* OPTIONS */}
              {showOption && (
                <div className="p-4 absolute bg-white top-10 left-4 w-48 drop-shadow-xl text-gray-800 flex flex-col space-y-4 z-20">
                  <div className="flex items-center justify-between">
                    <p>Adult</p>
                    <div className="flex items-center space-x-2">
                      <button
                        disabled={options.adult <= 1}
                        className="border border-blue-900 w-7 h-7 grid items-center"
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span>{options.adult}</span>
                      <button
                        className="border border-blue-900 w-7 h-7 grid items-center"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Children</p>
                    <div className="flex items-center space-x-2">
                      <button
                        disabled={options.children <= 0}
                        className="border border-blue-900 w-7 h-7 grid items-center"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span>{options.children}</span>
                      <button
                        className="border border-blue-900 w-7 h-7 grid items-center"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Room</p>
                    <div className="flex items-center space-x-2">
                      <button
                        disabled={options.room <= 1}
                        className="border border-blue-900 w-7 h-7 grid items-center"
                        onClick={() => handleOption("room", "d")}
                      >
                        -
                      </button>
                      <span>{options.room}</span>
                      <button
                        className="border border-blue-900 w-7 h-7 grid items-center"
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* SEARCH BUTTON */}
            <button
              onClick={handleNavigate}
              className="h-full p-2 bg-blue-800 text-white"
            >
              Search
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
