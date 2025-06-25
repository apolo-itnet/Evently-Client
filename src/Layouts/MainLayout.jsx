import React from "react";
import { Outlet, useLocation, useNavigation } from "react-router";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
import Footer from "../Components/Footer";
import PageLoader from "../Components/PageLoader";

const routeTitles = {
  "/": "Home",
  "/login": "Login",
  "/register": "Register",
  "/forgot-password": "Forgot Password",
  "/profile": "Profile",
  "/another-page": "Another Page",
  "/event/:id": "Event Details",
};

const MainLayout = () => {
  const location = useLocation();
  const {state} = useNavigation()

  const getTitle = () => {
    if (location.pathname.startsWith("/event/")) {
      return routeTitles["/event/:id"];
    }
    return routeTitles[location.pathname] || "Home";
  };

  const title = getTitle();

  return (
    <div>
      <Helmet>
        <title>Evently | {title}</title>
      </Helmet>
      <header>
        <Navbar />
      </header>
      <main>
        {state === "loading" ? <PageLoader/> : <Outlet />
          }
      </main>
      <footer>
        <Footer />
      </footer>
      <BackToTop />
    </div>
  );
};

export default MainLayout;
