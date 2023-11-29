import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Masyarakat from "./MasyarakatModel.js";


const {DataTypes} = Sequelize;

const Pengaduan = db.define("pengaduan", {
    id_pengaduan: {type: DataTypes.INTEGER(11), primaryKey: true, autoIncrement:true},
    tgl_pengaduan: DataTypes.DATE(),
    nik: DataTypes.CHAR(16),
    isi_laporan: DataTypes.TEXT(),
    foto: DataTypes.STRING(255),
    status: DataTypes.ENUM('0', 'proses', 'selesai')
}, {
    freezeTableName: true
});

Pengaduan.belongsTo(Masyarakat,{foreignKey:"nik"});
Masyarakat.hasMany(Pengaduan,{foreignKey:"nik"});

export default Pengaduan;

(async()=>{
    await db.sync();
})();