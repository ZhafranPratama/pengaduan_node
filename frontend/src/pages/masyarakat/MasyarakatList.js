import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";
import Navbar from "../../components/Navbar";

const MasyarakatList = () => {
  const [masyarakats, setMasyarakat] = useState([]);

  useEffect(() => {
    getMasyarakat();
  }, []);

  const getMasyarakat = async () => {
    const response = await axios.get("http://localhost:5000/masyarakat");
    setMasyarakat(response.data);
  };

  const deleteMasyarakat = async (masyarakatNik) => {
    try {
      await axios.delete(`http://localhost:5000/masyarakat/${masyarakatNik}`);
      getMasyarakat();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <PrimaryButton thisPath={'/addMasyarakat'} NamaButton={'Add Masyarakat'} />
        <div className="columns is-multiline mt-2">
          {masyarakats.map((masyarakat) => (
            <div className="column is-one-quarter" key={masyarakat.nik}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{masyarakat.nik}</p>
                      <p className="title is-4">{masyarakat.nama}</p>
                      <p className="title is-4">{masyarakat.username}</p>
                      <p className="title is-4">{masyarakat.telp}</p>
                    </div>
                  </div>
                </div>

                <footer className="card-footer">
                  <Link to={`/edit/${masyarakat.nik}`} className="card-footer-item">
                    Edit
                  </Link>
                  <a
                    onClick={() => deleteMasyarakat(masyarakat.nik)}
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

export default MasyarakatList;
