import { body, param } from "express-validator";

export const noteCreateValidation = () => {
    return [
        body('title')
        .isString()
        .withMessage('O título (title) é obrigatório'),

        body('text')
        .isString()
        .withMessage('O texto (text) é obrigatório'),
    ]
}

export const noteDeleteValidation = () => {
    return [
        param('noteId')
        .isString()
        .withMessage('O ID da nota (noteId) é obrigatório'),
    ]
}