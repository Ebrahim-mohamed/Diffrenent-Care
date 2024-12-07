import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-2xl font-bold text-blue-900">الرعاية المختلفة </span>
        </div>
        <nav className="flex space-x-6">
          <a href="#hero" className="text-gray-700 hover:text-blue-600">الرئيسية</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">من نحن</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600">خدماتنا</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">تواصل معنا</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-blue-600 hover:underline">English</a>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800">تسجيل حساب</button>
        </div>
      </div>
    </header>
  );
};

export default Header;