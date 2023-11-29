import Masyarakat from "../models/MasyarakatModel.js";

export const getMasyarakat = async(req, res)=>{
    try {
        const response = await Masyarakat.findAll();
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const getMasyarakatByNik = async(req, res)=>{
    try {
        const response = await Masyarakat.findOne({
            where:{
                nik : req.params.nik
            }
        });
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const saveMasyarakat = async(req, res)=>{
    const nik = req.body.nik;
    const nama = req.body.nama;
    const username = req.body.username;
    const password = req.body.password;
    const telp = req.body.telp;

    try {
        await Masyarakat.create({nik: nik, nama: nama, username: username, password: password, telp: telp})
        res.status(201).json({msg: "Account Created Successfully"})
    } catch (error) {
        console.log(error.message)
    }

}

export const updateMasyarakat = async(req, res)=>{
    const nik = await Masyarakat.findOne({
        where:{
            nik : req.params.nik
        }
    })
    if(!nik) return res.status(404).json({msg: "No Data Found"});
    const nama = req.body.nama;
    const username = req.body.username;
    const password = req.body.password;
    const telp = req.body.telp;

    try {
        await Masyarakat.update({nama: nama, username: username, password: password, telp: telp},{
            where:{
                nik : req.params.nik
            }
        });
        res.status(201).json({msg: "Account Updated Successfully"})
    } catch (error) {
        console.log(error.message)
    }

}

export const deleteMasyarakat = async(req, res)=>{
    const nik = Masyarakat.findOne({
        where: {
            nik : req.params.nik
        }
    });
    if(!nik) return res.status(404).json({msg: "No Data Found"});

    try {
        await Masyarakat.destroy({
            where: {
                nik : req.params.nik
            }
        })
        res.status(200).json({msg: "Account Deleted Successfully"})
    } catch (error) {
        console.log(error.message)
    }
}