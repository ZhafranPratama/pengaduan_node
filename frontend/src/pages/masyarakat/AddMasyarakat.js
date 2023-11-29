import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AddMasyarakat = () => {
  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [telp, setTelp] = useState("");
  const navigate = useNavigate();

  const saveMasyarakat = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nik", nik);
    formData.append("nama", nama);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("telp", telp);
    try {
      await axios.post("http://localhost:5000/masyarakat", formData, {
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
          <form onSubmit={saveMasyarakat}>
            <div className="field">
              <label className="label">Masyarakat Nik</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nik}
                  onChange={(e) => setNik(e.target.value)}
                  placeholder="Masyarakat Nik"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Masyarakat Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Masyarakat Name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Masyarakat Username</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masyarakat Username"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Masyarakat password</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masyarakat Password"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Masyarakat Telp</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={telp}
                  onChange={(e) => setTelp(e.target.value)}
                  placeholder="Masyarakat Telp"
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

export default AddMasyarakat;
