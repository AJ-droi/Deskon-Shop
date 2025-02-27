// import ImageUploading from "react-images-uploading";
// import { text } from "express";
// import Carousel from "react-multi-carousel";
// import Login from "./auth/Login";
// import { useState } from "react";
import "./Home.css";
import "react-multi-carousel/lib/styles.css";
import { Header } from "../components/HomeComponents/HeaderComponent";
import { Main } from "../components/HomeComponents/MainComponent";
import { Section1 } from "../components/HomeComponents/Section1Component";
import { Section2 } from "../components/HomeComponents/Section2Component";
import { Banner } from "../components/HomeComponents/BannerComponent";
import { Fashion } from "../components/HomeComponents/FashionComponent";
import { Trending } from "../components/HomeComponents/TrendingComponent";
import { Brand } from "../components/HomeComponents/BrandComponent";


const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <Section1 />
      <Section2 />
      <Banner />
      <Fashion />
      <Trending />
      <Brand />
    </div>
  );
};

export default Home;
