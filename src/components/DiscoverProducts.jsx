const DiscoverProducts = () => {
  return (
    <section className="flex flex-col items-center text-center font-poppins py-8 sm:py-10 bg-white dark:bg-gray-900 transition-all duration-300">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white uppercase tracking-wide">
          Discover Our Products
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 w-4/5 sm:w-3/5 mx-auto leading-relaxed">
          Explore a wide range of high-quality products that are designed to
          meet your needs and exceed your expectations.
        </p>

        <div className="mt-8 border-t-2 border-dotted border-gray-200 dark:border-gray-700 w-1/2 mx-auto"></div>

        <div className="mt-8 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-green-400 dark:to-yellow-500"></div>
      </div>
    </section>
  );
};

export default DiscoverProducts;
