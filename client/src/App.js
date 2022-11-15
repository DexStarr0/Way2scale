import React, { createContext, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./component/Home/Home";
import News from "./component/News/News";
import Profile from "./component/Profile/Profile";
import Contact from "./component/Contact";
import ErrorPage from "./component/ErrorPage";
import Footer from "./component/Footer";
import SigninSignup from "./component/Sign_In-Out/Signin_singup";
import Navbar from "./component/Navbar/Navbar";
import SearchJob from "./component/SearchJob/SearchJob";
import Alert from "./component/Alert/Alert";
import ScrollToTop from "./component/ScrollToTop";
import Explore from "./component/Explore/Explore";
import BlogPost from "./component/Explore/BlogPost";
import Lodder from "./component/Loader/Loader";

export const UserContext = createContext();

//reducer function for toggle btween signin and signout

function App() {
  const location = useLocation();
  const [userData, setuserData] = useState({ active: false });
  const [showLoader, setLoader] = useState(false);
  const [alert, setAlert] = useState(null);
  useEffect(() => {
    setLoader(false);
    fetchdata();
  }, [location]);
  const fetchdata = async () => {
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch("/fetdata", option);

      const data = await response.json();

      if (response.status !== 200) {
        throw new Error(data.error);
      }
      setuserData({ ...data });
    } catch (error) {
      setuserData({ active: false });
    }
  };
  const showAlert = (type, msg) => {
    setAlert({ type: type, msg: msg });
    setInterval(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <UserContext.Provider
        value={{ userData, fetchdata, showAlert, setLoader }}
      >
        <Navbar />
        <Lodder pop={showLoader} />
        <ScrollToTop />
        <Alert alert={alert} />
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />

          <Route path="contact" element={<Contact />} />
          <Route path="explore" element={<Explore />} />
          <Route path="blog_post" element={<BlogPost />} />
          <Route path="news" element={<News />} />
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
