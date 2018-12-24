import express from "express";
import productController from "../controllers/product.controller";

const router = express.Router();

router.get("/", productController.index);
// router.get("/create", productController.create);
router.post("/", productController.store);
router.get("/:id", productController.show);
// router.get("/:id/edit", productController.edit);
router.put("/:id", productController.update);
router.delete("/:id", productController.destroy);

module.exports = router;
