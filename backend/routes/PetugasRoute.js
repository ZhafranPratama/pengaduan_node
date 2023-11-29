import express from "express";
import {
    getPetugas,
    getPetugasById,
    savePetugas,
    updatePetugas,
    deletePetugas
} from "../controllers/PetugasController.js";

const router = express.Router();

router.get('/petugas', getPetugas)
router.get('/petugas/:id_petugas', getPetugasById)
router.post('/petugas', savePetugas)
router.patch('/petugas/:id_petugas', updatePetugas)
router.delete('/petugas/:id_petugas', deletePetugas)

export default router;