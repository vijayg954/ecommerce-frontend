import Bestsellerg from "../components/Bestsellerg";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewsLetterbox from "../components/NewsLetterbox";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestCollection></LatestCollection>
      <Bestsellerg></Bestsellerg>
      <OurPolicy></OurPolicy>
      <NewsLetterbox></NewsLetterbox>
    </div>
  );
};

export default Home;
