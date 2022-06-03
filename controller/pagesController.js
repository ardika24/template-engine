const { Book } = require("../models");

module.exports = {
  home: (req, res) => {
    const title = "Binar Bookstore",
      subTitle = "Welcome to the world";
    res.render("index", { title, subTitle });
  },
  book: (req, res) => {
    res.render("manajemenBuku", { title: "Manajemen Buku" });
  },

  daftar: (req, res) => {
    Book.findAll().then((books) => {
      res.render("daftarBuku", { title: "Daftar Buku", books });
    });
  },
};
