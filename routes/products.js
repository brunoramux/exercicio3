import express from "express";
const router = express.Router();
import { ProductsService } from "../services/Products.js";
import { CommentsService } from "../services/Comment.js"

/* GET home page. */
router.get("/", function (_, res) {
	ProductsService.findAll().then(function (products) {
		res.render("index", { products });
	});
});

router.get("/:id", function (req, res){

	const { id } = req.params;
	console.log(id)
	ProductsService.findById2(id).then(function (product){

		ProductsService.findById(id).then(function (comments) {
			
			res.render("detalhes", { product, comments })
			
		})
	})
	

});

// router.get("/", function (_, res) {
// 	ProductsService.findAll().then((products) => {
// 		res.json(products);
// 	});
// });

router.delete("/:id", function (req, res) {
	const { id } = req.params;
	ProductsService.delete(id).then(() => {
		res.json({
			success: "Produto removido com sucesso!",
		});
	});
});

router.post("/", function (req, res) {
	const { body } = req;
	ProductsService.insert(body).then((product) => {
		res.json(product);
	});
});

router.post("/comment/:id", function(req, res) {
	const { body } = req;
	const id  = req.params.id;
	console.log(id)
	CommentsService.insert(body, id).then((comment) => {
		res.json(comment);
	});


});

router.put("/", function (req, res) {
	const { body } = req;
	ProductsService.update(body).then((product) => {
		res.json(product);
	});
});

export default router;
