import { db } from "../connection/db.js";

export const TABLE_NAME = "products";
export const TABLE_NAME2 = "comments"
export const ProductsService = {
	findAll() {
		return db(TABLE_NAME).select("*");
	},
	findById(id) {
		return db('products as p')
		.where('p.id', id)
		.join('comments as c', 'p.id', 'c.post_id')
		.select('c.comment')

	},
	findById2(id) {
		return db(TABLE_NAME).where("id", id)

	},
	insert(product) {
		return db(TABLE_NAME).insert(product);
	},
	delete(id) {
		return db(TABLE_NAME).where("id", id).del();
	},
	update(product) {
		return db(TABLE_NAME)
			.where("id", product.id)
			.update({
				name: product.name,
				description: product.description,
				price: product.price
			});
	},
};
