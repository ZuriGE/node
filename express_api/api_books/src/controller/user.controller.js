const errorHandling = require("../error/errorHandling");
const myClass = require("../models/book");

let myBook1 = new myClass("Hamnet", "Edición de bolsillo", "Maggie O'Farrell", 13.0, "/assets/img/book12.jpg", 12);
let serverBook = myBook1;

//datos para para reto3
let myBook2 = new myClass("El misterio de la cripta embrujada", "Tapa dura", "Eduardo Mendoza", 15.75, "/assets/img/book1.webp", 1);
let myBook3 = new myClass("Ceniza en la boca", "Tapa blanda", "Brenda Navarro", 10.5, "/assets/img/book2.jpg", 2);
let myBook4 = new myClass("Lo peor de todo", "Edición de bolsillo", "Ray Loriga", 12.99, "/assets/img/book3.jpg", 3);
let myBook5 = new myClass("Supersaurio", "Tapa dura", "Meryem El Mehdati", 18.0, "/assets/img/book4.jpg", 4);

let serverBookArr = [myBook1, myBook2, myBook3, myBook4, myBook5];
///

// let getStart = (req, res) => {
// 	let ans = { error: false, codigo: 200, mensaje: "Inicio" };
// 	res.send(ans);
// };

//funciones reto 2
const getBook = (req, res) => {
	// console.log("Petición recibida del cliente");
	// console.log(req.url);
	// console.log(req.method);
	// console.log(req.headers["user-agent"]);

	// res.setHeader("Content-Type", "application/json");

	//no hace falta stringify porque en app hemos puesto: app.use(express.urlencoded({ extended: false })) y app.use(express.json());

	res.status(200).send(serverBook);
};

const postBook = (req, res) => {
	let ans;
	if (serverBook === null) {
		serverBook = {
			title: req.body.title,
			type: req.body.type,
			author: req.body.author,
			price: req.body.price,
			photo: req.body.photo,
			id_book: req.body.id_book,
			id_user: req.body.ise_user,
		};
		ans = { error: false, codigo: 200, mensaje: "Libro creado", data: serverBook };
	} else {
		ans = { error: true, codigo: 200, mensaje: "Libro ya existe" };
	}
	res.send(ans);
};

const putBook = (req, res) => {
	let ans;
	if (serverBook !== null) {
		serverBook = {
			title: req.body.title || serverBook.title,
			type: req.body.type || serverBook.type,
			author: req.body.author || serverBook.author,
			price: req.body.price || serverBook.price,
			photo: req.body.photo || serverBook.photo,
			id_book: req.body.id_book || serverBook.id_book,
			id_user: req.body.ise_user || serverBook.id_user,
		};
		ans = { error: false, codigo: 200, mensaje: "Libro modificado", data: serverBook };
	} else {
		ans = { error: true, codigo: 200, mensaje: "Libro no existe" };
	}
	res.send(ans);
};

const delBook = (req, res) => {
	let ans;
	if (serverBook != null) {
		serverBook = null;
		ans = { error: false, codigo: 200, message: "Libro eliminado" };
	} else {
		ans = { error: true, codigo: 200, message: "El libro no existe o ha sido eliminado." };
	}
	res.send(ans);
};

///funciones reto 3
const getBooksById = (req, res) => {
	let ans;
	let searchId = parseInt(req.query.id);

	if (isNaN(searchId)) {
		ans = { error: false, codigo: 200, message: "No se ha introducido ID de búsqueda, se muestran todos los libros", data: serverBookArr };
	} else {
		let index = serverBookArr.findIndex((book) => book.id_book == searchId);
		if (index != -1) {
			ans = { error: false, codigo: 200, message: `Libro con ID ${searchId} encontrado`, data: serverBookArr[index] };
		} else {
			ans = { error: true, codigo: 200, message: `No se ha encontrado ningún libro con ID${searchId}.` };
		}
	}
	res.send(ans);
};

const addBooks = (req, res) => {
	let ans;
	let newBook = {
		title: req.body.title,
		type: req.body.type,
		author: req.body.author,
		price: req.body.price,
		photo: req.body.photo,
		id_book: req.body.id_book,
		id_user: req.body.id_user,
	};
	serverBookArr.push(newBook);
	ans = { error: false, codigo: 200, mensaje: `Libro '${newBook.title}' añadilo a la lista de libros`, data: newBook };
	res.send(ans);
};

const putBooksById = (req, res) => {
	let ans;
	let searchId = parseInt(req.query.id);

	if (isNaN(searchId)) {
		ans = { error: true, codigo: 200, message: "ERROR: No se ha introducido ID." };
	} else {
		let index = serverBookArr.findIndex((book) => book.id_book == searchId);
		if (index == -1) {
			ans = { error: true, codigo: 200, message: `No se ha encontrado ningún libro con ID${searchId}.` };
		} else {
			let updatedBook = serverBookArr[index];
			updatedBook = {
				title: req.body.title || updatedBook.title,
				type: req.body.type || updatedBook.type,
				author: req.body.author || updatedBook.author,
				price: req.body.price || updatedBook.price,
				photo: req.body.photo || updatedBook.photo,
				id_book: req.body.id_book || updatedBook.id_book,
				id_user: req.body.ise_user || updatedBook.id_user,
			};
			serverBookArr[index] = updatedBook;
			ans = { error: false, codigo: 200, message: `Datos del libro con ID ${searchId} actualizados`, data: serverBookArr[index] };
		}
	}
	res.send(ans);
};

const delBooksById = (req, res) => {
	let ans;
	let searchId = parseInt(req.query.id);

	if (isNaN(searchId)) {
		ans = { error: true, codigo: 200, message: "ERROR: No se ha introducido ID." };
	} else {
		let index = serverBookArr.findIndex((book) => book.id_book == searchId);
		if (index == -1) {
			ans = { error: true, codigo: 200, message: `No se ha encontrado ningún libro con ID${searchId}.` };
		} else {
			serverBookArr.splice(index, 1);
			ans = { error: false, codigo: 200, message: `Libro con ID${searchId} eliminado.`, data: serverBookArr };
		}
	}
	res.send(ans);
};

module.exports = { getBook, postBook, putBook, delBook, getBooksById, addBooks, putBooksById, delBooksById };

/* libro para pruebas
{
    "title": "Test Book",
    "type": "Test type",
    "author":"Fulanito",
    "price": 13,
    "photo": "/img.jpg",
    "id_book": 15,
    "id_user": 2003
}
*/
