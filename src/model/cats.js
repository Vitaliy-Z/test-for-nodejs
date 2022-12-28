import db from "./db.js";
import { ObjectId } from "mongodb";

const getCollection = async (db, name) => {
  const client = await db;
  const collection = await client.db().collection(name);
  return collection;
};

const getAll = async () => {
  const collection = await getCollection(db, "cats");
  const result = await collection.find({}).toArray();
  return result;
};

const getById = async (id) => {
  const collection = await getCollection(db, "cats");
  const objId = new ObjectId(id);
  console.log(objId.getTimestamp());
  const result = await collection.findOne({ _id: objId });
  return result;
};

const create = async (body) => {
  const cat = {
    isVacinated: false,
    ...body
  };
  const collection = await getCollection(db, "cats");
  const { acknowledged, insertedId } = await collection.insertOne(cat);
  return acknowledged && (await collection.findOne(insertedId));
};

const update = async (id, body) => {
  const collection = await getCollection(db, "cats");
  const objId = new ObjectId(id);
  const { value: result } = await collection.findOneAndUpdate(
    { _id: objId },
    { $set: body },
    { returnDocument: "after" }
  );
  return result;
};

const remove = async (id) => {
  const collection = await getCollection(db, "cats");
  const objId = new ObjectId(id);
  const { value: result } = await collection.findOneAndDelete({ _id: objId });
  return result;
};

export default { getAll, getById, create, update, remove };
