import { FaLocationDot } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const images = [
  "https://th.bing.com/th/id/R.fd7b996f2e00e3715d4211863b2fdabf?rik=hNpMMNtcoHdgdQ&riu=http%3a%2f%2fwww.bestwesternplusmeridian.com%2fContent%2fimages%2fQueen-Room.jpg&ehk=KCbSmDyFZVzRHEPvo3ervhhEh3CHbDcQQbR%2btZeyFuo%3d&risl=&pid=ImgRaw&r=0",
  "https://cdn.dubai-marina.com/media/internal_articles_image/3._Premier_Suite.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/52/Hotel_Room_(9638499309).jpg",
  "https://lh3.googleusercontent.com/yjDoBdvT5hee7GpGXk5fSi43sU0E_4_f2YeopUW99NJODjcMWAHbDWhkLO6KvjwTXvjQwlyRR0gQx2w2CnGfyohY8ETkGVzVwo-O5ti6uk8gaHecDEMA4w4yyiCAHepf29ZGXE8M",
  "https://www.realestate.com.au/blog/images/2633x1974-fit,progressive/2018/12/19142303/27616925_EPCExternalUser_63f6449d-d085-4d76-82ba-a2dd366d1d84.jpg",
  "https://r1imghtlak.mmtcdn.com/724aabe26da511e685d40015c5f4277e.jpg?&output-quality=75&downsize=910:612&crop=910:612;141,0&output-format=jpg",
];

const Hotel = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [imgIndex, setImgIndex] = useState(0);
  const handleOpen = (i: number) => {
    setImgIndex(i);
    setOpen(true);
  };
  const handleSlide = (direction: string) => {
    let newIndex;
    if (direction == "r") {
      imgIndex == 5 ? (newIndex = 0) : (newIndex = imgIndex + 1);
    } else {
      imgIndex == 0 ? (newIndex = 5) : (newIndex = imgIndex - 1);
    }
    setImgIndex(newIndex);
  };
  return (
    <div className={`relative ${open && "h-screen w-full overflow-hidden"}`}>
      {/* IMAGE SLIDER */}
      {open && (
        <div className="absolute top-0 h-screen w-full z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-evenly px-8">
          <button onClick={() => setOpen(false)}>
            <IoCloseCircle className="absolute top-4 right-8 text-4xl text-gray-400" />
          </button>
          <button>
            <FaArrowAltCircleLeft
              onClick={() => handleSlide("l")}
              className="text-4xl text-gray-400"
            />
          </button>
          <img src={images[imgIndex]} className="h-4/5 w-4/5" />
          <button onClick={() => handleSlide("r")}>
            <FaArrowAltCircleRight className="text-4xl text-gray-400" />
          </button>
        </div>
      )}
      <div className="z-0">
        <Header />
        <div className="px-40">
          {/* PAGE HEADER */}
          <div className="flex justify-between py-4">
            <div>
              <h2 className="text-2xl font-bold">Tower Street Apartments</h2>
              <div className="flex items-center my-3 space-x-2">
                <FaLocationDot className="text-xs" />
                <p>5/3 Boston, Old Town, 33-332 Krakow, Poland</p>
              </div>
              <p className="text-lg text-blue-500 font-semibold">
                Excellent location - 500m from center
              </p>
              <p className="text-lg text-green-500 mt-2 font-semibold">
                Book a stay over $114 at this property and get a free airport
                taxi
              </p>
            </div>
            <button className="px-3 py-1.5 bg-blue-700 text-white h-fit rounded-lg font-semibold">
              Reserve or Book Now!
            </button>
          </div>
          {/* IMAGE GALLERY */}
          <div className="grid grid-cols-3 grid-rows-2 gap-4 mb-4">
            {images.map((item, index) => (
              <img
                onClick={() => handleOpen(index)}
                key={index}
                src={item}
                alt="Hotel Room"
                className="h-full w-full object-cover"
              />
            ))}
          </div>
          {/* DESCRIPTION ABOUT HOTEL */}
          <div className="flex my-4">
            <div className="flex-[3]">
              <h2 className="text-2xl font-bold">
                Stay in the heart of Boston
              </h2>
              <p className="my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt, odio. Omnis facere esse praesentium, reprehenderit
                tempore molestias. Saepe, dolor quasi?Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Laborum labore ipsa ut
                tempora tempore id? Nostrum fugiat quas tenetur non.
              </p>
            </div>
            <div className="flex-1 bg-blue-200 p-4">
              <h2 className="text-cl font-semibold text-gray-600 tracking-wide">
                Perfect for a 9-night stay!
              </h2>
              <p className="text-sm my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                dolore!
              </p>
              <p className="text-2xl font-semibold my-4">
                $915 <span className="font-light">(9 nights)</span>
              </p>
              <button className="w-full py-2 font-semibold text-white bg-blue-700 rounded-md text-sm">
                Reserve or Book Now!
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
