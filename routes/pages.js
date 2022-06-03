const router = require("express").Router();
const page = require("../controller/pagesController");

router.get("/", page.home);
router.get("/manajemenBuku", page.book);
router.get("/daftarBuku", page.daftar);

module.exports = router;
