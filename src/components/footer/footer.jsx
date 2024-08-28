import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-6">
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 dark:from-green-400 dark:to-yellow-500">
                Appscrip
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Resources
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Support</h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex space-x-4 items-center mb-6 sm:mb-0">
            <span className="text-sm font-semibold uppercase">We Accept:</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-6"
            />
            <img
              src="https://zeevector.com/wp-content/uploads/Paypal-Logo-Transparent-Download.png"
              alt="Paypal"
              className="h-6"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/apple-pay-2.svg"
              alt="Apple Pay"
              className="h-6"
            />
          </div>

          <div className="flex space-x-5">
            <Link to="#" className="text-gray-400 hover:text-white">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22.46 6.03c-.77.35-1.6.58-2.47.68a4.3 4.3 0 0 0 1.88-2.38 8.4 8.4 0 0 1-2.72 1.04 4.15 4.15 0 0 0-7.07 3.78 11.77 11.77 0 0 1-8.55-4.35 4.14 4.14 0 0 0 1.28 5.55 4.12 4.12 0 0 1-1.88-.52v.05a4.15 4.15 0 0 0 3.32 4.06 4.2 4.2 0 0 1-1.88.07 4.17 4.17 0 0 0 3.87 2.88A8.31 8.31 0 0 1 2 18.55a11.75 11.75 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.52A8.36 8.36 0 0 0 24 4.56a8.4 8.4 0 0 1-2.54.7z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-6">
          © 2024{" "}
          <Link to="#" className="hover:underline">
            ashish.gaikwad
          </Link>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
