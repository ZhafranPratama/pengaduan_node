import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const EditPengaduan = () => {
  const [tanggapan, setTanggapan] = useState("");
  const { id_tanggapan } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTanggapanById();
  }, []);

  const getTanggapanById = async () => {
    const response = await axios.get(`http://localhost:5000/tanggapan/${id_tanggapan}`);
    setTanggapan(response.data.tanggapan);
  };

  const updateTanggapan = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("tanggapan", tanggapan);
    try {
      await axios.patch(`http://localhost:5000/tanggapan/${id_tanggapan}`, formData, {
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
          <form onSubmit={updateTanggapan}>
            <div className="field">
              <label className="label">Tanggapan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={tanggapan}
                  onChange={(e) => setTanggapan(e.target.value)}
                  placeholder="Tanggapan"
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

export default EditPengaduan;