// import model student
const Student = require("../models/Student");

// buat student controller
class StudentController {
    async index(req, res) {
        const Students = await Student.all();
        const data = {
            message: "Menampilkan data student",
            data: Students,
        };
        res.status(200).json(data);
    }

    async store(req, res) {
        const students = await Student.create(req.body);
        // console.log(Promise.resolve(student));
        const data = {
            message: "Menambahkan data students",
            data: students,
        };
        res.json(data);
    }

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        const data = {
            message: `Mengedit data students id ${id}, nama ${nama}`,
            data: [],
        };

        res.json(data);
    }

    destroy(req, res) {
        const { id } = req.params;

        const data = {
            message: `Menghapus data students ${id}`,
            data: [],
        };

        res.json(data);
    }
}

// buat object Student Controller
const object = new StudentController();

// export object
module.exports = object;