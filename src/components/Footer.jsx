import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>

      <div className="max-w-[1170px] mx-auto px-4 md:px-24 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-12 bg-base-200 text-base-content">
        <aside className="flex flex-col justify-center items-center">
        <img className=" w-[60px] h-60px " src="https://i.ibb.co/rZGbSFQ/deal.png" alt="deal" />
          <span className=' text-xl font-bold tracking-wide text-gray-800 '>
              Luxury <span className="text-orange-500">Properties</span>
           </span>
        </aside>
        <nav className="flex flex-col ">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">single family House</a>
          <a className="link link-hover">townhouses</a>
          <a className="link link-hover">apartments</a>
          <a className="link link-hover">student housing</a>
          <a className="link link-hover">senior living communities</a>
          <a className="link link-hover">vacation rentals</a>
         
        </nav>
        <nav className="flex flex-col ">
          <h6 className="footer-title">Company</h6>
          <Link to='/about' className="link link-hover">About us</Link>
          <Link to='/contact' className="link link-hover">Contact</Link>
         
        </nav>
        <nav className="flex flex-col ">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-gray-600">
              © 2024 <Link to='/'>Luxury <span>Properties</span></Link>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;