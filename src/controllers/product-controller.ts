import { Request, Response } from "express";
import { ApiError } from "../middlewares/error";

class Product {
  async search(req: Request, res: Response) {
    const products = ["caneta", "borracha", "lápis"];

    const searchedProduct = req.query.name as string

    const found = products.find((product) =>
      products.includes(searchedProduct)
    );

    if (!found) throw new ApiError(404, "Nenhum produto encontrado");

    res.send({
      found,
    });
  }
}

export default new Product();
