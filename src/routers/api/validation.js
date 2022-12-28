import Joi from "joi";

const schemaCreate = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  age: Joi.number().integer().min(0).max(30).required(),
  isVacinated: Joi.boolean().optional()
});

const schemaUpdate = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).optional(),
  age: Joi.number().integer().min(0).max(30).optional(),
  isVacinated: Joi.boolean().optional()
});

const schemaUpdateVacinated = Joi.object({
  isVacinated: Joi.boolean().required()
});

const validate = (schema, obj, next) => {
  const { error } = schema.validate(obj);
  if (error) {
    const [{ message }] = error.details;
    return next({
      status: 400,
      message,
      data: "Bad Request"
    });
  }
  next();
};

export const createValidation = (req, res, next) => {
  return validate(schemaCreate, req.body, next);
};

export const updateValidation = (req, res, next) => {
  return validate(schemaUpdate, req.body, next);
};

export const udateVacinatedValidation = (req, res, next) => {
  return validate(schemaUpdateVacinated, req.body, next);
};
