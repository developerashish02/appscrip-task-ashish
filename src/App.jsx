import { useSelector } from "react-redux";
import "./App.css";
import Sidebar from "./components/common/Sidebar";
import DiscoverProducts from "./components/DiscoverProducts";
import ProductsPage from "./components/pages/ProductsPage";

const App = () => {
  const isVisible = useSelector((state) => state.sidebar.isVisible);

  return (
    <div className="flex flex-col">
      <main className="w-full p-6 sm:p-12 md:p-24">
        <DiscoverProducts />
      </main>

      <div className="lg:flex lg:h-screen lg:overflow-hidden">
        <aside
          className={`transition-all duration-300 lg:sticky lg:top-0 lg:h-full lg:text-white lg:p-4 ${
            isVisible ? "lg:w-64" : "lg:w-0 lg:p-0"
          }`}
          style={{
            overflow: "hidden",
          }}
        >
          <Sidebar />
        </aside>

        <section
          className={`flex-1 p-6 sm:p-12 overflow-y-auto transition-all duration-300 ${
            isVisible ? "lg:w-[calc(100%-16rem)]" : "lg:w-full"
          } lg:h-screen`}
        >
          <ProductsPage />
        </section>
      </div>
    </div>
  );
};

export default App;
