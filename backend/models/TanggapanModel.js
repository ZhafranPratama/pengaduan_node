import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Pengaduan from "./PengaduanModel.js";
import Petugas from "./PetugasModel.js";


const {DataTypes} = Sequelize;

const Tanggapan = db.define("tanggapan", {
    id_tanggapan: {type: DataTypes.INTEGER(11), primaryKey: true, autoIncrement: true},
    id_pengaduan: DataTypes.INTEGER(11),
    tgl_tanggapan: DataTypes.DATE(),
    tanggapan: DataTypes.TEXT(),
    id_petugas: DataTypes.INTEGER(11)
}, {
    freezeTableName: true
});

Tanggapan.belongsTo(Pengaduan,{
    foreignKey:"id_pengaduan",
    onDelete:"CASCADE"
})

Pengaduan.hasMany(Tanggapan, {
    foreignKey: "id_pengaduan"
})

Tanggapan.belongsTo(Petugas,{
    foreignKey:"id_petugas",
})

Petugas.hasMany(Tanggapan,{
    foreignKey:"id_petugas"
})

export default Tanggapan;

(async()=>{
    await db.sync();
})();