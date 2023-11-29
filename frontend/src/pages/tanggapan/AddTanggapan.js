import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AddTanggapan = () => {
  const [id_tanggapan, setId_tanggapan] = useState("");
  const [id_pengaduan, setId_pengaduan] = useState("");
  const [tgl_tanggapan, setTgl_tanggapan] = useState("");
  const [tanggapan, setTanggapan] = useState("");
  const [id_petugas, setId_petugas] = useState("");
  const navigate = useNavigate();

  const saveTanggapan = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id_tanggapan", id_tanggapan);
    formData.append("id_pengaduan", id_pengaduan);
    formData.append("tgl_tanggapan", tgl_tanggapan);
    formData.append("tanggapan", tanggapan);
    formData.append("id_petugas", id_petugas);
    try {
      await axios.post("http://localhost:5000/tanggapan", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="columns is-centered mt-5">
        <div className="column is-half">
          <form onSubmit={saveTanggapan}>
          <div className="field">
              <label className="label">Id Tanggapan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={id_tanggapan}
                  onChange={(e) => setId_tanggapan(e.target.value)}
                  placeholder="Id Tanggapan"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Id Pengaduan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={id_pengaduan}
                  onChange={(e) => setId_pengaduan(e.target.value)}
                  placeholder="Id Pengaduan"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Tgl Tanggapan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={tgl_tanggapan}
                  onChange={(e) => setTgl_tanggapan(e.target.value)}
                  placeholder="Tanggal Tanggapan"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Tanggapan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={tanggapan}
                  onChange={(e) => setTanggapan(e.target.value)}
                  placeholder="tanggapan"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Id Petugas</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={id_petugas}
                  onChange={(e) => setId_petugas(e.target.value)}
                  placeholder="Id Petugas"
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button type="submit" className="button is-success">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTanggapan;