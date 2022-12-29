import {
  getAll,
  getOne,
  createOne,
  updateOne,
  removeOne
} from "../model/cats.js";

export const get = async (req, res, next) => {
  try {
    const allCats = await getAll();

    res.json({
      status: "sucsses",
      code: 200,
      data: { allCats }
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const cat = await getOne(req.params.id);
    if (cat) {
      res.json({
        status: "sucsses",
        code: 200,
        data: { cat }
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        data: "Not Found"
      });
    }
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const cat = await createOne(req.body);
    res.status(201).json({
      status: "sucsses",
      code: 201,
      data: { cat }
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const cat = await updateOne(req.params.id, req.body);
    if (cat) {
      res.json({
        status: "sucsses",
        code: 200,
        data: { cat }
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        data: "Not Found"
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateStatus = async (req, res, next) => {
  try {
    const cat = await updateOne(req.params.id, req.body);
    if (cat) {
      res.json({
        status: "sucsses",
        code: 200,
        data: { cat }
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        data: "Not Found"
      });
    }
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const cat = await removeOne(req.params.id);
    if (cat) {
      res.json({
        status: "sucsses",
        code: 200,
        data: { cat }
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        data: "Not Found"
      });
    }
  } catch (error) {
    next(error);
  }
};

export default { get, getById, create, update, updateStatus, remove };
