import { useSelector } from "react-redux";
import "./App.css";
import Sidebar from "./components/common/Sidebar";
import DiscoverProducts from "./components/DiscoverProducts";
import ProductsPage from "./components/pages/ProductsPage";

const App = () => {
  const isVisible = useSelector((state) => state.sidebar.isVisible);

  return (
    <div className="flex flex-col">
      <main className="w-full p-6 sm:p-12 md:p-24 ">
        <DiscoverProducts />
      </main>

      <div
        className={`grid grid-cols-1 lg:grid-cols-[250px,1fr] lg:h-screen overflow-hidden`}
      >
        <aside
          className={`hidden lg:block lg:w-40 lg:h-full lg:sticky lg:top-0 lg:text-white lg:p-4 ${
            isVisible ? "block" : "hidden"
          }`}
        >
          <Sidebar />
        </aside>
        <section
          className={`flex-1 p-6 sm:p-12 overflow-y-auto lg:h-screen ${
            isVisible ? "" : "lg:w-full"
          }`}
        >
          <ProductsPage />
        </section>
      </div>
    </div>
  );
};

export default App;
