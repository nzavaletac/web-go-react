import React from "react";
import CarouselImg from "../components/carousel/Carousel";
import Footer from "../components/footer/Footer";
import Maps from "../components/map/Maps";
import NavBar from "../components/navbar/NavBar";
import Search from "../components/search/Search";
import Tags from "../components/tags/Tags";

const Home = () => {
  return (
    <>
      <NavBar />
      <CarouselImg />
      <Search />
      <Tags />
      <Maps />
      <Footer />
    </>
  );
};

export default Home;
