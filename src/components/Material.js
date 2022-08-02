import { FaMapMarkerAlt } from "react-icons/fa";

const Material = ({ image, alt, name, location }) => {
  return (
    <div className="w-full h-auto p-5 flex items-center mb-10 shadow-lg border rounded-md md:mb-0">
      <img
        src={image}
        alt={alt}
        className="w-44 h-44 object-cover rounded-md"
      />
      <div className="ml-5 flex flex-col justify-evenly h-full">
        <h3 className="text-xl font-semibold">{name}</h3>

        <p className="text-sm text-slate-400 flex items-center">
          <span className="mr-1">
            <FaMapMarkerAlt />
          </span>
          {location}
        </p>
      </div>
    </div>
  );
};

export default Material;
