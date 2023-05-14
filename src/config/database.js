"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const url = String(process.env.DB_URL);
mongoose_1.default.connect(url);
mongoose_1.default.connection.on('error', console.error.bind(console, 'Error al conectarse con la base de datos.'));
mongoose_1.default.connection.once('open', () => {
    console.log('Conexión con la base de datos iniciada.');
});
exports.default = mongoose_1.default;
//# sourceMappingURL=database.js.map