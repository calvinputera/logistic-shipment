import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Material from "../components/Material";
import Detail from "./Detail";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getMaterials = async () => {
    try {
      const getData = await axios.get("http://localhost:5000/materials");
      setData(getData.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getMaterials();
  }, []);

  return (
    <div className="p-5">
      <div className="relative">
        <h1 className="text-3xl font-semibold text-center mt-2">Materials</h1>
        <span className="absolute top-[83px] right-[20px] text-2xl text-gray-300">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="search material.."
          className="p-4 border-2 w-full mt-7 rounded-xl text-lg"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-full flex flex-wrap justify-center mt-10 md:w-full md:gap-10 ">
        {data
          .filter((material) => {
            if (search === "") {
              return material;
            } else if (
              material.material_name
                .toLowerCase()
                .includes(search.toLowerCase())
            ) {
              return material;
            }
          })
          .map((material) => (
            <Link
              to={`/detail/${material.id}`}
              key={material.id}
              element={<Detail />}
            >
              <Material
                image={material.image}
                alt={material.material_name}
                name={material.material_name}
                location={material.location}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;
