import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.js";
import PrimaryButton from "../../components/PrimaryButton.js";

const TanggapanList = () => {
  const [tanggapans, setTanggapan] = useState([]);

  useEffect(() => {
    getTanggapan();
  }, []);

  const getTanggapan = async () => {
    const response = await axios.get("http://localhost:5000/tanggapan");
    console.log(response.data)
    setTanggapan(response.data);
  };

  const deleteTanggapan = async (id_tanggapan) => {
    try {
      await axios.delete(`http://localhost:5000/tanggapan/${id_tanggapan}`);
      getTanggapan();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <PrimaryButton thisPath={'/addTanggapan'} NamaButton={'Add Tanggapan'} />
        <div className="columns is-multiline mt-2">
          {tanggapans.map((tanggapan) => (
            <div className="column is-one-quarter" key={tanggapan.id_tanggapan}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{tanggapan.id_pengaduan}</p>
                      <p className="title is-4">{tanggapan.tanggapan}</p>
                      <p className="title is-4">{tanggapan.id_petugas}</p>
                      <p className="title is-4">{tanggapan.tgl_tanggapan}</p>
                    </div>
                  </div>
                </div>

                <footer className="card-footer">
                  <Link to={`/editTanggapan/${tanggapan.id_tanggapan}`} className="card-footer-item">
                    Edit
                  </Link>
                  <a
                    onClick={() => deleteTanggapan(tanggapan.id_tanggapan)}
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

export default TanggapanList;