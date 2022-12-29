import Cat from "../shemas/cat.js";

export const getAll = async () => {
  const result = await Cat.find({});
  return result;
};

export const getOne = async (id) => {
  const result = await Cat.findOne({ _id: id });
  return result;
};

export const createOne = async (body) => {
  const result = await Cat.create(body);
  return result;
};

export const updateOne = async (id, body) => {
  const result = await Cat.findByIdAndUpdate({ _id: id }, body, {
    returnDocument: "after"
  });
  return result;
};

export const removeOne = async (id) => {
  const result = await collection.findByIdAndRemove({ _id: id });
  return result;
};
