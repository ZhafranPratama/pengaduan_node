import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.js";
import PrimaryButton from "../../components/PrimaryButton.js";

const PengaduanList = () => {
  const [pengaduans, setPengaduan] = useState([]);

  useEffect(() => {
    getPengaduan();
  }, []);

  const getPengaduan = async () => {
    const response = await axios.get("http://localhost:5000/pengaduan");
    console.log(response.data)
    setPengaduan(response.data);
  };

  const deletePengaduan = async (id_pengaduan) => {
    try {
      await axios.delete(`http://localhost:5000/pengaduan/${id_pengaduan}`);
      getPengaduan();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <PrimaryButton thisPath={'/addPengaduan'} NamaButton={'Add Pengaduan'} />
        <div className="columns is-multiline mt-2">
          {pengaduans.map((pengaduan) => (
            <div className="column is-one-quarter" key={pengaduan.id_pengaduan}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={`http://localhost:5000/images/${pengaduan.foto}`} alt="Image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{pengaduan.id_pengaduan}</p>
                      <p className="title is-4">{pengaduan.nik}</p>
                      <p className="title is-4">{pengaduan.isi_laporan}</p>
                      <p className="title is-4">{pengaduan.status}</p>
                      <p className="title is-4">{pengaduan.tgl_pengaduan}</p>
                    </div>
                  </div>
                </div>

                <footer className="card-footer">
                  <Link to={`/editPengaduan/${pengaduan.id_pengaduan}`} className="card-footer-item">
                    Edit
                  </Link>
                  <a
                    onClick={() => deletePengaduan(pengaduan.id_pengaduan)}
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

export default PengaduanList;