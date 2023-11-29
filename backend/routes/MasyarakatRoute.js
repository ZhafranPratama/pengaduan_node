import express from "express";
import {
    getMasyarakat,
    getMasyarakatByNik,
    saveMasyarakat,
    updateMasyarakat,
    deleteMasyarakat
} from "../controllers/MasyarakatController.js";

const router = express.Router();

router.get('/masyarakat', getMasyarakat)
router.get('/masyarakat/:nik', getMasyarakatByNik)
router.post('/masyarakat', saveMasyarakat)
router.patch('/masyarakat/:nik', updateMasyarakat)
router.delete('/masyarakat/:nik', deleteMasyarakat)

export default router;