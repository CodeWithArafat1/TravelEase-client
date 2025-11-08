import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

const App = () => {
  return (
    <>
      <nav>
        <Navbar/>
      </nav>

      <main className="px-2 mt-12">
        <Outlet />
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default App;
