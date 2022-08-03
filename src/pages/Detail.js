import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [material, setMaterial] = useState({});
  const url = `http://localhost:5000/materials/${id}`;

  const [email, setEmail] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [weight, setWeight] = useState(0);

  const navigate = useNavigate();

  const submit = () => {
    if (email && from && to && weight && date) {
      navigate("/success");
    } else {
      alert("Please fill in all the forms to go through the next process");
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setMaterial(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-5 p-4 flex flex-col justify-center items-center">
      <Link
        to="/"
        className="text-xs text-slate-400 flex items-center mb-4 hover:text-slate-600"
      >
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
      <p className="mt-5 text-slate-600">
        Location: <b>{material.location}</b>
      </p>

      {/* Itinerary */}
      <div className="w-full h-auto p-3 shadow-lg mt-6 border rounded-md md:w-1/3">
        <h2 className="text-lg font-semibold">Itinerary</h2>
        <div className="flex w-full justify-between mt-2">
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
            placeholder="From.."
            className="px-2 py-1 w-1/4 text-sm border rounded-md"
          />
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
            placeholder="To.."
            className="px-2 py-1 w-1/4 text-sm border rounded-md"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="px-2 py-1 w-2/5 text-sm border rounded-md"
          />
          <span className="relative top-2 right-7 text-sm text-slate-300">
            <FaCalendarAlt />
          </span>
        </div>
      </div>

      {/* Shipment Details */}
      <div className="w-full h-auto p-3 shadow-lg mt-6 border rounded-md md:w-1/3">
        <h2 className="text-lg font-semibold">Shipment Details</h2>
        <div className="w-full justify-between mt-4">
          <h3 className="mb-2 text-slate-600 text-base">Weight</h3>
          <input
            required
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            type="number"
            min="0"
            placeholder="0"
            className="p-2 w-1/4 text-sm mr-1 border rounded-md"
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="type your email.."
            className="text-sm mb-5 border p-2 w-3/4 rounded-md"
          />
        </div>
      </div>
      <button
        onClick={submit}
        className="w-full p-3 bg-blue-600 text-white text-lg font-semibold rounded-lg mt-5 flex justify-center md:w-1/3 hover:opacity-80"
      >
        Submit
      </button>
      <Link
        to="/"
        className="w-full p-3 bg-gray-300 text-slate-500 text-lg font-semibold rounded-lg mt-4 flex justify-center md:w-1/3 hover:opacity-80"
      >
        <button>Cancel</button>
      </Link>
    </div>
  );
};

export default Detail;
