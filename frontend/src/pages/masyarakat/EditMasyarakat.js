import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const EditMasyarakat = () => {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [telp, setTelp] = useState("");
  const { nik } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMasyarakatByNik();
  }, []);

  const getMasyarakatByNik = async () => {
    const response = await axios.get(`http://localhost:5000/masyarakat/${nik}`);
    setNama(response.data.nama);
    setUsername(response.data.username);
    setPassword(response.data.password);
    setTelp(response.data.telp);
  };

  const updateMasyarakat = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("telp", telp);
    try {
      await axios.patch(`http://localhost:5000/masyarakat/${nik}`, formData, {
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
          <form onSubmit={updateMasyarakat}>
            <div className="field">
              <label className="label">Masyarakat Nama</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Masyarakat Nama"
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
              <label className="label">Masyarakat Password</label>
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

export default EditMasyarakat;
