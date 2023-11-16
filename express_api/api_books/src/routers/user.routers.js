const { Router } = require("express");
const router = Router();
const usersCtrl = require("../controller/user.controller");

///reto 2
router.get("/book", usersCtrl.getBook);
router.delete("/book", usersCtrl.delBook);
router.post("/book", usersCtrl.postBook);
router.put("/book", usersCtrl.putBook);

///reto 3
router.get("/books", usersCtrl.getBooksById);
// router.get("/books", usersCtrl.getAllBooks);
router.post("/books", usersCtrl.addBooks);
router.put("/books", usersCtrl.putBooksById);
router.delete("/books", usersCtrl.delBooksById);

module.exports = router;
