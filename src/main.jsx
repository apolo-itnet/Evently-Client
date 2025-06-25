import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes";
import Aos from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Context/AuthContext";

Aos.init({
  duration: 1000,
  easing: "ease-in-out",
  once: false,
});

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
    <Toaster />
  </AuthProvider>
);
