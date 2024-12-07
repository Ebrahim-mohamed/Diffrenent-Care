import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300">
      <div className="mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary-blue mb-2">{title}</h3>
      <p className="text-secondary-blue">{description}</p>
    </div>
  );
};

export default ServiceCard;