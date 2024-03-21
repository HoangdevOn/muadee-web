import React from "react";
import HeaderHome from "./components/homePage/headerHome";
import MainHome from "./components/homePage/mainHome";
import FooterHome from "./components/homePage/footerHome";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <HeaderHome />
      <MainHome />
      <FooterHome />
    </div>
  );
}
