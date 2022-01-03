class StudentController {
    index(req, res) {
        const data = {
            message: "Menampilkan data student",
            data: [],
        };
        res.json(data);
    }

    store(req, res) {
        const {nama} = req.body;

        const data = {
            message: `Menambahkan data students ${nama}`,
            data: [],
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