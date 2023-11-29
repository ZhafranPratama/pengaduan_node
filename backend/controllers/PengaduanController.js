import Pengaduan from "../models/PengaduanModel.js";
import path from "path";
import fs from "fs";

export const getPengaduan = async(req, res)=>{
    try {
        const response = await Pengaduan.findAll();
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const getPengaduanById = async(req, res)=>{
    try {
        const response = await Pengaduan.findOne({
            where:{
                id_pengaduan : req.params.id_pengaduan
            }
        });
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const savePengaduan = async(req, res)=>{
    const id_pengaduan = req.body.id_pengaduan;
    const tgl_pengaduan = req.body.tgl_pengaduan;
    const nik = req.body.nik;
    const isi_laporan = req.body.isi_laporan;
    const status = req.body.status;
    const foto = req.files.foto;
    const fileSize = foto.data.length;
    const ext = path.extname(foto.name);
    const fileName = foto.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg : "Foto tidak valid"});
    if(fileSize > 5000000) return res.status(422).json({msg : "Foto harus kurang dari 5MB"});

    foto.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Pengaduan.create({tgl_pengaduan:tgl_pengaduan, nik:nik, isi_laporan:isi_laporan, foto:fileName, status:status})
            res.status(201).json({msg: "Pengaduan telah diupload"})
        }catch (error){
            console.log(error.message);
        }
    })
}

export const updatePengaduan = async(req, res)=>{
    const pengaduan = await Pengaduan.findOne({
        where:{
            id_pengaduan : req.params.id_pengaduan
        }
    });
    if(!pengaduan) return res.status(404).json({msg: "Data tidak ditemukan"});
    
    let fileName = "";
    if(req.files === null){
        fileName = pengaduan.foto;
    }else{
        const foto = req.files.foto;
        const fileSize = foto.data.length;
        const ext = path.extname(foto.name);
        fileName = foto.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Foto tidak valid"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Foto harus kurang dari 5MB"});

        const filepath = `./public/images/${pengaduan.foto}`;
        fs.unlinkSync(filepath);

        foto.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const id_pengaduan = req.body.id_pengaduan;
    const tgl_pengaduan = req.body.tgl_pengaduan;
    const nik = req.body.nik;
    const isi_laporan = req.body.isi_laporan;
    const status = req.body.status;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    
    try {
        await Pengaduan.update({id_pengaduan:id_pengaduan, tgl_pengaduan:tgl_pengaduan, nik:nik, isi_laporan:isi_laporan, foto:fileName, status:status},{
            where:{
                id_pengaduan: req.params.id_pengaduan
            }
        });
        res.status(200).json({msg: "Pengaduan berhasil diubah"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePengaduan = async(req, res)=>{
    const pengaduan = await Pengaduan.findOne({
        where:{
            id_pengaduan : req.params.id_pengaduan
        }
    });
    if(!pengaduan) return res.status(404).json({msg: "Data tidak ditemukan"});

    try {
        const filepath = `./public/images/${pengaduan.foto}`;
        fs.unlinkSync(filepath);
        await Pengaduan.destroy({
            where:{
                id_pengaduan : req.params.id_pengaduan
            }
        });
        res.status(200).json({msg: "Pengaduan berhasil dihapus"});
    } catch (error) {
        console.log(error.message);
    }
}