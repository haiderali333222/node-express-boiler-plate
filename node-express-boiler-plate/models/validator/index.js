let Joi = require('joi')

let validator = (values, schema) => {
  let errors = {};
  Joi.validate(values, schema, { abortEarly: false }, (err, val) => {
    if (err) {
      errors = err.details.reduce(
        (errors, error) => ({
          ...errors,
          [error.path]: error.message
        }),
        {}
      );
    }
  });
  return errors;
 };

module.exports = validator