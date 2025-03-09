import "./App.css";
import Banner from "./components/Banner";
import Cards_section from "./components/Cards_section";
import Movie_bar from "./components/Movie_bar";
import Movie_card from "./components/Movie_card";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router";
import Wishlist from "./components/Wishlist";
import Pagination from "./components/Pagination";

function App() {
  return (
    <>
      <div className=" min-h-[100vh] bg-black text-white position-relative">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route
              path="/"
              element={
                <>
                  <Banner /> <Movie_bar /> <Cards_section /> 
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
