import Featured from "../components/Featured";
import FeaturedProperties from "../components/FeaturedProperties";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PropertyList from "../components/PropertyList";
import SendMail from "../components/SendMail";

const Home = () => {
  return (
    <div>
      <Header type="list" />
      <div className="px-40 mt-10 mb-4">
        <Featured />
        <h2 className="mt-4 font-bold text-lg tracking-wider text-gray-800">
          Browse by property type
        </h2>
        <PropertyList />
        <h2 className="mt-4 font-bold text-lg tracking-wider text-gray-800">
          Homes guests love
        </h2>
        <FeaturedProperties />
      </div>
      <div className="mt-8">
        <SendMail />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
