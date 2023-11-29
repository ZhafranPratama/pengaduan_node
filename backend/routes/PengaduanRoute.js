import express from "express";
import {
    getPengaduan,
    getPengaduanById,
    savePengaduan,
    updatePengaduan,
    deletePengaduan
} from "../controllers/PengaduanController.js";

const router = express.Router();

router.get('/pengaduan', getPengaduan)
router.get('/pengaduan/:id_pengaduan', getPengaduanById)
router.post('/pengaduan', savePengaduan)
router.patch('/pengaduan/:id_pengaduan', updatePengaduan)
router.delete('/pengaduan/:id_pengaduan', deletePengaduan)

export default router;