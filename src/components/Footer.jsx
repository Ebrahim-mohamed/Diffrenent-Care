import logo from "../assets/logo.svg";
import locationIcon from "../assets/location-icon.png"; // Replace with your actual icon path
import emailIcon from "../assets/email-icon.png"; // Replace with your actual icon path
import phoneIcon from "../assets/phone-icon.png"; // Replace with your actual icon path
import twitterIcon from "../assets/twitter-icon.png"; // Replace with your actual icon path
import instagramIcon from "../assets/instagram-icon.png"; // Replace with your actual icon path
import githubIcon from "../assets/github-icon.png"; // Replace with your actual icon path

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white relative">
      <div className="container flex px-20   py-10 justify-around">
        {/* Company Info */}
        <div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <img src={twitterIcon} alt="Twitter Icon" className="h-5" />
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <img src={instagramIcon} alt="Instagram Icon" className="h-5" />
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <img src={githubIcon} alt="GitHub Icon" className="h-5" />
            </a>
          </div>
        </div>

        <nav className="flex flex-col items-start space-y-2">
          <a href="#" className="hover:text-gray-300">
            الرئيسية
          </a>
          <a href="#" className="hover:text-gray-300">
            من نحن
          </a>
          <a href="#" className="hover:text-gray-300">
            خدماتنا
          </a>
          <a href="#" className="hover:text-gray-300">
            تواصل معنا
          </a>
        </nav>

        <div className="flex flex-col items-end">
          <div className="flex items-center mb-4">
            <div className="bg-white p-2 rounded-full">
              <img src={logo} alt="Logo" className="h-10" />
            </div>
          </div>
          <p className="flex items-center gap-2">
            <address> Riyadh - Alsahafa District</address>
            <img src={locationIcon} alt="Location Icon" className="h-5" />
          </p>
          <p className="flex items-center gap-2 mt-2">
            <a href="mailto:Info@differentcare.sa"> Info@differentcare.sa</a>
            <img src={emailIcon} alt="Email Icon" className="h-5" />
          </p>
          <p className="flex items-center gap-2 mt-2">
            Info@differentcare.sa
            <img src={phoneIcon} alt="Phone Icon" className="h-5" />
          </p>
        </div>
      </div>

      <div className="text-center text-xs py-4">
        © 2024 All Rights Reserved Different Care
      </div>
    </footer>
  );
};

export default Footer;
