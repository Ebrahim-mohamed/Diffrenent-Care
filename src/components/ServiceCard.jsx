const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all duration-300">
      <div className="mb-4 ">{icon}</div>
      <h3 className="text-xl font-bold text-primary-blue mb-2">{title}</h3>
      <ul className="list-disc">
        {description.map((desc) => (
          <li className="text-[#18191C] mr-6" key={desc}>
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
