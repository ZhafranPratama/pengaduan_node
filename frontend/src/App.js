import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.js";

import MasyarakatList from "./pages/masyarakat/MasyarakatList.js";
import AddMasyarakat from "./pages/masyarakat/AddMasyarakat";
import EditMasyarakat from "./pages/masyarakat/EditMasyarakat";

import PengaduanList from "./pages/pengaduan/PengaduanList.js";
import AddPengaduan from "./pages/pengaduan/AddPengaduan";
import EditPengaduan from "./pages/pengaduan/EditPengaduan";

import PetugasList from "./pages/petugas/PetugasList.js";
import AddPetugas from "./pages/petugas/AddPetugas";
import EditPetugas from "./pages/petugas/EditPetugas";

import TanggapanList from "./pages/tanggapan/TanggapanList.js";
import AddTanggapan from "./pages/tanggapan/AddTanggapan";
import EditTanggapan from "./pages/tanggapan/EditTanggapan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/masyarakat" element={<MasyarakatList/>}/>
        <Route path="/addMasyarakat" element={<AddMasyarakat/>}/>
        <Route path="/edit/:nik" element={<EditMasyarakat/>}/>

        <Route path="/pengaduan" element={<PengaduanList/>}/>
        <Route path="/addPengaduan" element={<AddPengaduan/>}/>
        <Route path="/editPengaduan/:id_pengaduan" element={<EditPengaduan/>}/>

        <Route path="/petugas" element={<PetugasList/>}/>
        <Route path="/addPetugas" element={<AddPetugas/>}/>
        <Route path="/editPetugas/:id_petugas" element={<EditPetugas/>}/>

        <Route path="/tanggapan" element={<TanggapanList/>}/>
        <Route path="/addTanggapan" element={<AddTanggapan/>}/>
        <Route path="/editTanggapan/:id_tanggapan" element={<EditTanggapan/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
