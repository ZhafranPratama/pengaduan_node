import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar.js";

const AddPetugas = () => {
  const [id_petugas, setId_petugas] = useState("");
  const [nama_petugas, setNama_petugas] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [telp, setTelp] = useState("");
  const [level, setLevel] = useState("");
  const navigate = useNavigate();

  const savePetugas = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id_petugas", id_petugas);
    formData.append("nama_petugas", nama_petugas);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("telp", telp);
    formData.append("level", level);
    try {
      await axios.post("http://localhost:5000/petugas", formData, {
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
          <form onSubmit={savePetugas}>
            <div className="field">
              <label className="label">Id Petugas</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={id_petugas}
                  onChange={(e) => setId_petugas(e.target.value)}
                  placeholder="Petugas Nik"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Petugas Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nama_petugas}
                  onChange={(e) => setNama_petugas(e.target.value)}
                  placeholder="Petugas Name"
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
              <label className="label">Petugas password</label>
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
                  placeholder="Admin, Petugas"
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

export default AddPetugas;
