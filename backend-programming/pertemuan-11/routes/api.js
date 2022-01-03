// import Student Controller
const StudentController =  require("../controllers/StudentController");
// import express
const express = require("express");
// buat object router 
const router = express.Router();

router.get("/", function(req, res){
    res.send("Hello Express");
});

// Routing untuk students
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// export routing
module.exports = router;