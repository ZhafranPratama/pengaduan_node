import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import MasyarakatRoute from "./routes/MasyarakatRoute.js";
import PetugasRoute from "./routes/PetugasRoute.js";
import PengaduanRoute from "./routes/PengaduanRoute.js";
import TanggapanRoute from "./routes/TanggapanRoute.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"))
app.use(MasyarakatRoute);
app.use(PetugasRoute);
app.use(PengaduanRoute);
app.use(TanggapanRoute);

app.listen(5000, ()=> console.log('Server Up and Running...'))