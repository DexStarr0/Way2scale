import React, { createContext, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./component/Home/Home";
import Explore from "./component/Explore";
import Profile from "./component/Profile/Profile";
import Contact from "./component/Contact";
import ErrorPage from "./component/ErrorPage";
import Footer from "./component/Footer";
import SigninSignup from "./component/Login_register/Signin_singup";
import Navbar from "./component/Navbar";
import SearchJob from "./component/SearchJob";

export const UserContext = createContext();

//reducer function for toggle btween signin and signout

function App() {
  const location = useLocation();
  const [userData, setuserData] = useState({ active: false });
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    try {
      const response = await fetch("/fetdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.status !== 200) {
        throw new Error(data.error);
      }
      setuserData({ ...data });

      console.log(data);
    } catch (error) {
      setuserData({ active: false });
      // console.log(error);
    }
  };

  // const fetchdata = async () => {
  //   try {
  //     const response = await fetch("/getdata", {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     });

  //     const data = await response.json();

  //     if (response.status !== 200) {
  //       throw new Error(data.error);
  //     }
  //     console.log(data);
  //     setuserData({ ...data });
  //   } catch (error) {
  //     setuserData({ active: false });
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <UserContext.Provider value={{ userData, fetchdata }}>
        <Navbar />

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />

          <Route path="contact" element={<Contact />} />
          <Route path="explore" element={<Explore />} />
          <Route path="search-job" element={<SearchJob />} />

          <Route path="signin" element={<SigninSignup />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
