// import ImageUploading from "react-images-uploading";
// import { text } from "express";
// import Carousel from "react-multi-carousel";
// import Login from "./auth/Login";
// import { useState } from "react";
import "./Home.css";
import "react-multi-carousel/lib/styles.css";
import { Header } from "../components/HomeComponents/HeaderComponent";
import { Main } from "../components/HomeComponents/MainComponent";
import { Section } from "../components/HomeComponents/SectionComponent";
import { Section2 } from "../components/HomeComponents/Section2Component";
import { Banner } from "../components/HomeComponents/BannerComponent";
import { Fashion } from "../components/HomeComponents/FashionComponent";
import { Trending } from "../components/HomeComponents/TrendingComponent";
import { Brand } from "../components/HomeComponents/BrandComponent";
import { ProductPage } from "../components/ProductComponents/ProductPage";

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <Section />
      <Section2 />
      <Banner />
      <Fashion />
      <Trending />
      <Brand />
      <ProductPage />
    </div>
  );
};

export default Home;
