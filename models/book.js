const books = [
  {
    id: 1,
    judul: "Bumi",
    pengarang: "Tere Liye",
  },
  {
    id: 2,
    judul: "Psycology of Money",
    pengarang: "Morgan Housel",
  },
  {
    id: 3,
    judul: "Meditation",
    pengarang: "Marcus Aurelius",
  },
];

module.exports = {
  findAll: () => Promise.resolve(books),
  create: ({ judul, pengarang }) => {
    const id = books[books.length - 1].id + 1;
    const book = { id, judul, pengarang };
    books.push(book);
    return Promise.resolve(book);
  },
};
