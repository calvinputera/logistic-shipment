import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [material, setMaterial] = useState({});
  const baseUrl = `http://localhost:5000/materials/${id}`;

  const getData = async () => {
    try {
      const response = await axios.get(baseUrl);
      setMaterial(response.data);
      //   console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-5 p-4 flex flex-col justify-center items-center">
      <Link to="/" className="text-xs text-slate-400">
        <p>Back To Home</p>
      </Link>
      <h1 className="text-2xl font-semibold mb-5">{material.material_name}</h1>
      <img
        src={material.image}
        alt={material.material_name}
        className="w-44 h-44 object-cover rounded-md shadow-lg"
      />

      {/* Itinerary */}
      <div className="w-full h-auto p-3 shadow-lg mt-6 border rounded-md">
        <h2 className="text-lg font-semibold">Itinerary</h2>
        <div className="flex w-full justify-between mt-2">
          <input
            type="text"
            placeholder="From.."
            className="px-2 py-1 w-1/4 text-sm"
          />
          <input
            type="text"
            placeholder="To.."
            className="px-2 py-1 w-1/4 text-sm"
          />
          <input
            type="text"
            placeholder="From.."
            className="px-2 py-1 w-1/4 text-sm"
          />
        </div>
      </div>

      {/* Shipment Details */}
      <div className="w-full h-auto p-3 shadow-lg mt-6 border rounded-md">
        <h2 className="text-lg font-semibold">Shipment Details</h2>
        <div className="flex w-full justify-between mt-2">
          <input
            type="text"
            placeholder="From.."
            className="px-2 py-1 w-1/4 text-sm"
          />
          <input
            type="text"
            placeholder="To.."
            className="px-2 py-1 w-1/4 text-sm"
          />
          <input
            type="text"
            placeholder="From.."
            className="px-2 py-1 w-1/4 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
