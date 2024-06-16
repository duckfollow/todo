const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getTodos);

router.post(
    '/',
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required()
        })
    }),
    todoController.createTodo
);

router.put(
    '/:id',
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().integer().required()
        }),
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string(),
            completed: Joi.boolean()
        })
    }),
    todoController.updateTodo
);

router.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().integer().required()
        })
    }),
    todoController.deleteTodo
);

module.exports = router;
