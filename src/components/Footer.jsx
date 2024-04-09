import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-200 py-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              © 2024 <Link to="havetic.com">Havetic</Link>. All rights reserved.
            </p>
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
};

export default Footer;