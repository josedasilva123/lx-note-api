"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server"));
var mongoose_1 = __importDefault(require("mongoose"));
var port = process.env.PORT || 3030;
mongoose_1.default.connect(process.env.DATABASE_URL)
    .then(function () {
    console.log('Conectamos ao MongoDB!');
    server_1.default.listen(port, function () {
        console.log('[SERVER] API iniciou com sucesso!');
    });
})
    .catch(function (err) { return console.log(err); });
