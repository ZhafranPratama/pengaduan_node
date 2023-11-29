import express from "express";
import {
    getTanggapan,
    getTanggapanById,
    saveTanggapan,
    updateTanggapan,
    deleteTanggapan
} from "../controllers/TanggapanController.js";

const router = express.Router();

router.get('/tanggapan', getTanggapan)
router.get('/tanggapan/:id_tanggapan', getTanggapanById)
router.post('/tanggapan', saveTanggapan)
router.patch('/tanggapan/:id_tanggapan', updateTanggapan)
router.delete('/tanggapan/:id_tanggapan', deleteTanggapan)

export default router;