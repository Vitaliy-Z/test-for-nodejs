import { v4 as uuid } from "uuid";
import db from "./db.js";

const getAll = async () => {
  return db.data;
};

const getById = async (id) => {
  return db.data.cats.find((e) => e.id === id);
};

const create = async (body) => {
  const id = uuid();
  const cat = {
    id,
    isVacinated: false,
    ...body
  };
  db.data.cats.push(cat);
  db.write();
  return db.data.cats.find((e) => e.id === id);
};

const update = async (id, body) => {
  const cat = db.data.cats.find((e) => e.id === id);
  const index = db.data.cats.indexOf(cat);
  db.data.cats.splice(index, 1, { ...cat, ...body });
  db.write();
  return db.data.cats[index];
};

const remove = async (id) => {
  const cat = db.data.cats.find((e) => e.id === id);
  const index = db.data.cats.indexOf(cat);
  db.data.cats.splice(index, 1);
  db.write();
  return cat;
};

export default { getAll, getById, create, update, remove };
