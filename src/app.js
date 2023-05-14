"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Product_1 = __importDefault(require("./routes/Product"));
const database_1 = __importDefault(require("./config/database"));
const path_1 = __importDefault(require("path"));
database_1.default.connect;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
app.disable('x-powered-by');
app.use('/', Product_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map