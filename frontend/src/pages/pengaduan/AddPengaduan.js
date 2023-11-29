import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AddPengaduan = () => {
  const [id_pengaduan, setId_pengaduan] = useState("");
  const [tgl_pengaduan, setTgl_pengaduan] = useState("");
  const [nik, setNik] = useState("");
  const [isi_laporan, setIsi_laporan] = useState("");
  const [file, setFile] = useState("");
  const [status, setStatus] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const savePengaduan = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id_pengaduan", id_pengaduan);
    formData.append("tgl_pengaduan", tgl_pengaduan);
    formData.append("nik", nik);
    formData.append("isi_laporan", isi_laporan);
    formData.append("status", status);
    formData.append("foto", file);
    try {
      await axios.post("http://localhost:5000/pengaduan", formData, {
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
          <form onSubmit={savePengaduan}>
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
              <label className="label">Tgl Pengaduan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={tgl_pengaduan}
                  onChange={(e) => setTgl_pengaduan(e.target.value)}
                  placeholder="Tanggal Pengaduan"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Nik</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nik}
                  onChange={(e) => setNik(e.target.value)}
                  placeholder="Nik"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Isi Laporan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={isi_laporan}
                  onChange={(e) => setIsi_laporan(e.target.value)}
                  placeholder="Isi Laporan"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Status</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  placeholder="Proses, Selesai"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <div className="file">
                  <label className="file-label">
                    <input
                      type="file"
                      className="file-input"
                      onChange={loadImage}
                    />
                    <span className="file-cta">
                      <span className="file-label">Choose a file...</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {preview ? (
              <figure className="image is-128x128">
                <img src={preview} alt="Preview Image" />
              </figure>
            ) : (
              ""
            )}

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

export default AddPengaduan;