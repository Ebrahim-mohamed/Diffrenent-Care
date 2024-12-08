import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-10 px-20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <nav className="flex gap-10  space-x-6">
          <a
            href="#hero"
            className="text-[#191717] font-bold hover:text-blue-600"
          >
            الرئيسية
          </a>
          <a
            href="#aboutUs"
            className="text-[#191717] font-bold hover:text-blue-600"
          >
            من نحن
          </a>
          <a
            href="#services"
            className="text-[#191717] font-bold hover:text-blue-600"
          >
            خدماتنا
          </a>
          <a
            href="#contact"
            className="text-[#191717] font-bold hover:text-blue-600"
          >
            تواصل معنا
          </a>
        </nav>
        <div className="flex items-center gap-8 space-x-4">
          <a href="#" className="text-blue-600 hover:underline">
            English
          </a>
          <button className="bg-blue-900 text-white px-8 py-2 rounded-lg hover:bg-blue-800">
            تسجيل حساب
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
