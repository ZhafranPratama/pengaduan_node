import Petugas from "../models/PetugasModel.js";

export const getPetugas = async(req, res)=>{
    try {
        const response = await Petugas.findAll();
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const getPetugasById = async(req, res)=>{
    try {
        const response = await Petugas.findOne({
            where:{
                id_petugas : req.params.id_petugas
            }
        });
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const savePetugas = async(req, res)=>{
    const id_petugas = req.body.id_petugas;
    const nama_petugas = req.body.nama_petugas;
    const username = req.body.username;
    const password = req.body.password;
    const telp = req.body.telp;
    const level = req.body.level;

    try {
        await Petugas.create({id_petugas: id_petugas, nama_petugas: nama_petugas, username: username, password: password, telp: telp, level: level})
        res.status(201).json({msg: "Account Created Successfully"})
    } catch (error) {
        console.log(error.message)
    }

}

export const updatePetugas = async(req, res)=>{
    const id = await Petugas.findOne({
        where:{
            id_petugas : req.params.id_petugas
        }
    })
    if(!id) return res.status(404).json({msg: "No Data Found"});
    const nama_petugas = req.body.nama_petugas;
    const username = req.body.username;
    const password = req.body.password;
    const telp = req.body.telp;
    const level = req.body.level;

    try {
        await Petugas.update({nama_petugas: nama_petugas, username: username, password: password, telp: telp, level: level},{
            where:{
                id_petugas : req.params.id_petugas
            }
        });
        res.status(201).json({msg: "Account Updated Successfully"})
    } catch (error) {
        console.log(error.message)
    }

}

export const deletePetugas = async(req, res)=>{
    const id = Petugas.findOne({
        where: {
            id_petugas : req.params.id_petugas
        }
    });
    if(!id) return res.status(404).json({msg: "No Data Found"});

    try {
        await Petugas.destroy({
            where: {
                id_petugas : req.params.id_petugas
            }
        })
        res.status(200).json({msg: "Account Deleted Successfully"})
    } catch (error) {
        console.log(error.message)
    }
}