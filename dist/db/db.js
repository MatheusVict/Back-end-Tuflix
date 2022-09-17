"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoURI = 'mongodb+srv://Matheus:Familia26@typescript.f3tjf3e.mongodb.net/?retryWrites=true&w=majority';
function dbConnect() {
    if (mongoURI) {
        mongoose_1.default.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }, () => console.log('Conecatdo'));
    }
    else {
        console.log('Falha ao conectar');
    }
}
exports.default = dbConnect;
