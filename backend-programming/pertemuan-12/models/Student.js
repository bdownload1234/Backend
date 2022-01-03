// import db
const db = require("../config/database");

// buat model Student
class Student {
    static all() {
        return new Promise((resolve, reject) => {
            //query untuk ambil data
            const sql = "SELECT * FROM students";
            db.query(sql, (err, results) => {
                resolve(results);
            });
        });
    }

    static async create(data){
        // promise 1 : insert data
        const id = await new Promise((resolve, reject) => {
            // query create
            const sql = "INSERT INTO students SET ?";
            db.query(sql, data, (err, results) => {
                resolve(results.insertId);
            });
        });

        // promise 2 : select data yang baru diinsert
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM students WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }
}

// export model
module.exports = Student;