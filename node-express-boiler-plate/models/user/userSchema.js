let Joi = require ('joi');

module.exports= Joi.object().keys({

    name:Joi.string().min(2).max(30).required().messages({
        "string.base": `"username" should be a type of 'text'`,
        "string.empty": `"username" cannot be an empty field`,
        "string.min": `"username" should have a minimum length of {#limit}`,
        "string.max": `"username" should have a maximum length of {#limit}`,
        "any.required": `"username" is a required field`
      }),
    email:Joi.string().email().required(),
    phone_no:Joi.number(),
    organization:Joi.array()    
})
