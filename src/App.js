import React from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import './Index.scss';

function App() {
  return (
    <>
    <div className="window">
        <Header/>
        <Main/>
        <Footer/>
    </div>

    </>
  );
}

export default App;
