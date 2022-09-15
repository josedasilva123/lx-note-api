"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteDeleteValidation = exports.noteCreateValidation = void 0;
var express_validator_1 = require("express-validator");
var noteCreateValidation = function () {
    return [
        (0, express_validator_1.body)('title')
            .isString()
            .withMessage('O título (title) é obrigatório'),
        (0, express_validator_1.body)('text')
            .isString()
            .withMessage('O texto (text) é obrigatório'),
    ];
};
exports.noteCreateValidation = noteCreateValidation;
var noteDeleteValidation = function () {
    return [
        (0, express_validator_1.param)('noteId')
            .isString()
            .withMessage('O ID da nota (noteId) é obrigatório'),
    ];
};
exports.noteDeleteValidation = noteDeleteValidation;
