import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the answers.
router.get("/", async (req, res) => {
  let collection = await db.collection("answers");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single answer by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("answers");
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you create a new answer.
router.post("/", async (req, res) => {
  let newDocument = {
    answers: req.body,
  };
  let collection = await db.collection("answers");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// This section will help you delete an answer
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("answers");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;