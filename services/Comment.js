import { db } from "../connection/db.js";

export const TABLE_NAME = "comments";
export const TABLE_NAME2 = "products"
export const CommentsService = {
	findAll() {
		return db(TABLE_NAME).select("*");
	},
	findById(id) {
		return db(TABLE_NAME).where("post_id", id).select("*")
	},
	insert(comment, id) {
		return db(TABLE_NAME).insert({
            post_id: id,
            comment: comment.comment
        });
	},
	delete(id) {
		return db(TABLE_NAME).where("id", id).del();
	}
};