import { Router } from "express";
import express from "express";

const router = Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello world");
});
