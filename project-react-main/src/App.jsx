import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { AppRoute } from "./routes/AppRoute";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AuthNavbar } from "./components/AuthNavbar";

function Layout() {
  // const location = useLocation();

  // const isAuthPage =
  //   location.pathname === "/login" || location.pathname === "/signup";

  return (
    <Box w="98vw" minH="100vh" overflowX="hidden">
      {  <Navbar />}
      <AppRoute />
      { <Footer />}
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Layout />
      </Router>
    </ChakraProvider>
  );
}

export default App;
