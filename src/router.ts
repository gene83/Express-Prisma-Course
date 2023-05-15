import { Router } from "express";
import { handleInputErrors } from "./modules/middleware";
import {
  body,
  checkSchema,
  matchedData,
  validationResult,
} from "express-validator";
import { UPDATE_STATUS } from "@prisma/client";

const router = Router();
/**
 * Product
 */
router.get("/product", (req, res) => {
  res.json({ message: "product" });
});

router.get("/product/:id", () => {});

router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {
    res.json("updated");
  }
);

router.post(
  "/product",
  body("name").isString(),
  body("name").isLength({ min: 0, max: 255 }),
  handleInputErrors,
  (req, res) => {
    // create product here.
  }
);
router.delete("/product/:id", () => {});

/**
 * Update
 */
router.get("/update", () => {});
router.get("/update/:id", () => {});

router.put(
  "/update/:id",
  body("title").optional().isString(),
  body("body").optional().isString(),
  body("status").isIn(Object.values(UPDATE_STATUS)),
  body("version").optional(),
  handleInputErrors,
  () => {}
);

router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("version").optional().isString(),
  handleInputErrors,
  () => {}
);

router.delete("/update/:id", () => {});

/**
 * Update Point
 */
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});

router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  handleInputErrors,
  () => {}
);

router.post(
  "/updatepoint",
  body("name").exists().isString(),
  body("description").exists().isString(),
  body("updateId").exists().isString(),
  handleInputErrors,
  () => {}
);

router.delete("/updatepoint/:id", () => {});

export default router;
