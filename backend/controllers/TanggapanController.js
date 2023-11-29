import Tanggapan from "../models/TanggapanModel.js";

export const getTanggapan = async(req, res)=>{
    try {
        const response = await Tanggapan.findAll();
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const getTanggapanById = async(req, res)=>{
    try {
        const response = await Tanggapan.findOne({
            where:{
                id_tanggapan : req.params.id_tanggapan
            }
        });
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const saveTanggapan = async(req, res)=>{
    const id_tanggapan = req.body.id_tanggapan;
    const id_pengaduan = req.body.id_pengaduan;
    const tgl_tanggapan = req.body.tgl_tanggapan;
    const tanggapan = req.body.tanggapan;
    const id_petugas = req.body.id_petugas;

    try {
        await Tanggapan.create({id_tanggapan:id_tanggapan, id_pengaduan:id_pengaduan, tgl_tanggapan, tgl_tanggapan, tanggapan:tanggapan, id_petugas:id_petugas})
        res.status(201).json({msg: "Tanggapan berhasil dibuat"})
    } catch (error) {
        console.log(error.message)
    }

}

export const updateTanggapan = async(req, res)=>{
    const id = await Tanggapan.findOne({
        where:{
            id_tanggapan : req.params.id_tanggapan
        }
    })
    if(!Tanggapan) return res.status(404).json({msg: "No Data Found"});
    const id_tanggapan = req.body.id_tanggapan;
    const id_pengaduan = req.body.id_pengaduan;
    const tgl_tanggapan = req.body.tgl_tanggapan;
    const tanggapan = req.body.tanggapan;
    const id_petugas = req.body.id_petugas;

    try {
        await Tanggapan.update({id_tanggapan:id_tanggapan, id_pengaduan:id_pengaduan, tgl_tanggapan, tgl_tanggapan, tanggapan:tanggapan, id_petugas:id_petugas},{
            where:{
                id_tanggapan : req.params.id_tanggapan
            }
        });
        res.status(201).json({msg: "Account Updated Successfully"})
    } catch (error) {
        console.log(error.message)
    }

}

export const deleteTanggapan = async(req, res)=>{
    const id = Tanggapan.findOne({
        where: {
            id_tanggapan : req.params.id_tanggapan
        }
    });
    if(!Tanggapan) return res.status(404).json({msg: "No Data Found"});

    try {
        await Tanggapan.destroy({
            where: {
                id_tanggapan : req.params.id_tanggapan
            }
        })
        res.status(200).json({msg: "Account Deleted Successfully"})
    } catch (error) {
        console.log(error.message)
    }
}