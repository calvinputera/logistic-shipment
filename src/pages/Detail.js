import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
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
      <Link to="/" className="text-xs text-slate-400 flex items-center mb-4">
        <span className="mr-1">
          <FaArrowLeft />
        </span>
        <p>Home</p>
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
            required
            placeholder="From.."
            className="px-2 py-1 w-1/4 text-sm border rounded-md"
          />
          <input
            type="text"
            required
            placeholder="To.."
            className="px-2 py-1 w-1/4 text-sm border rounded-md"
          />
          <input
            type="date"
            required
            className="px-2 py-1 w-1/4 text-sm border rounded-md"
          />
          <span className="relative top-2 right-5 text-sm text-slate-300">
            <FaCalendarAlt />
          </span>
        </div>
      </div>

      {/* Shipment Details */}
      <div className="w-full h-auto p-3 shadow-lg mt-6 border rounded-md">
        <h2 className="text-lg font-semibold">Shipment Details</h2>
        <div className="w-full justify-between mt-4">
          <h3 className="mb-2 text-slate-600 text-base">Weight</h3>
          <input
            required
            type="number"
            min="0"
            placeholder="0"
            className="px-2 py-1 w-1/4 text-sm mr-1"
          />
          <select
            name="weight"
            id="weight"
            className="text-sm mb-7 p-2 rounded-md"
          >
            <option value="ton">Ton</option>
            <option value="kg">Kg</option>
          </select>
          <h3 className="mb-2 text-slate-600 text-base">Type Contract</h3>
          <select
            name="weight"
            id="weight"
            className="text-sm mb-7 p-2 rounded-md"
          >
            <option value="tenyears">per 10 years</option>
            <option value="tenyears">per 5 years</option>
            <option value="ayear">per year</option>
          </select>
          <h3 className="mb-2 text-slate-600 text-base">Agency Partner</h3>
          <select
            name="weight"
            id="weight"
            className="text-sm mb-7 p-2 rounded-md"
          >
            <option value="bims">PT. Berlian Intan Makmur Sejahtera</option>
            <option value="ndcm">PT. Nusa Dua Citra Megah</option>
            <option value="am">PT. Agung Mulya</option>
            <option value="imtm">PT. Indo Material Tambang Makmur</option>
          </select>

          <h3 className="mb-2 text-slate-600 text-base">
            Email to Get Invoice
          </h3>
          <input
            required
            type="email"
            placeholder="type your email.."
            className="text-sm mb-5 border p-2 w-3/4 rounded-md"
          />
        </div>
      </div>
      <button className="w-full p-3 bg-blue-600 text-white text-lg font-semibold rounded-lg mt-5">
        Submit
      </button>
      <button className="w-full p-3 bg-gray-300 text-slate-500 text-lg font-semibold rounded-lg mt-4">
        Cancel
      </button>
    </div>
  );
};

export default Detail;
