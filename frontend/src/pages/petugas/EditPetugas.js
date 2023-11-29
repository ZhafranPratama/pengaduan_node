import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar.js";

const EditPetugas = () => {
  const [nama_petugas, setNama_petugas] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [telp, setTelp] = useState("");
  const [level, setLevel] = useState("");
  const { id_petugas } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPetugasById();
  }, []);

  const getPetugasById = async () => {
    const response = await axios.get(`http://localhost:5000/petugas/${id_petugas}`);
    setNama_petugas(response.data.nama_petugas);
    setUsername(response.data.username);
    setPassword(response.data.password);
    setTelp(response.data.telp);
    setLevel(response.data.level);
  };

  const updatePetugas = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama_petugas", nama_petugas);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("telp", telp);
    formData.append("level", level);
    try {
      await axios.patch(`http://localhost:5000/petugas/${id_petugas}`, formData, {
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
          <form onSubmit={updatePetugas}>
            <div className="field">
              <label className="label">Petugas Nama</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nama_petugas}
                  onChange={(e) => setNama_petugas(e.target.value)}
                  placeholder="Petugas Nama"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Petugas Username</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Petugas Username"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Petugas Password</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Petugas Password"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Petugas Telp</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={telp}
                  onChange={(e) => setTelp(e.target.value)}
                  placeholder="Petugas Telp"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Level</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  placeholder="Petugas, Admin"
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button type="submit" className="button is-success">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditPetugas;
