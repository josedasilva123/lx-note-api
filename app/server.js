"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
var user_routes_1 = __importDefault(require("./routes/userRoutes/user.routes"));
var note_routes_1 = __importDefault(require("./routes/noteRoutes/note.routes"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(express_1.default.json());
app.use('/user', user_routes_1.default);
app.use('/notes', note_routes_1.default);
exports.default = app;
