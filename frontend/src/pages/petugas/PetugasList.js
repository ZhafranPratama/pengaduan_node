import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.js"
import PrimaryButton from "../../components/PrimaryButton.js"

const PetugasList = () => {
  const [petugast, setPetugas] = useState([]);

  useEffect(() => {
    getPetugas();
  }, []);

  const getPetugas = async () => {
    const response = await axios.get("http://localhost:5000/petugas");
    setPetugas(response.data);
  };

  const deletePetugas = async (id_petugas) => {
    try {
      await axios.delete(`http://localhost:5000/petugas/${id_petugas}`);
      getPetugas();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <PrimaryButton thisPath={'/addPetugas'} NamaButton={'Add Petugas'} />

        <div className="columns is-multiline mt-2">
          {petugast.map((petugas) => (
            <div className="column is-one-quarter" key={petugas.id_petugas}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{petugas.id_petugas}</p>
                      <p className="title is-4">{petugas.nama_petugas}</p>
                      <p className="title is-4">{petugas.username}</p>
                      <p className="title is-4">{petugas.password}</p>
                      <p className="title is-4">{petugas.telp}</p>
                      <p className="title is-4">{petugas.level}</p>
                    </div>
                  </div>
                </div>

                <footer className="card-footer">
                  <Link to={`/editPetugas/${petugas.id_petugas}`} className="card-footer-item">
                    Edit
                  </Link>
                  <a
                    onClick={() => deletePetugas(petugas.id_petugas)}
                    className="card-footer-item"
                  >
                    Delete
                  </a>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PetugasList;
