"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const storyRoutes_1 = __importDefault(require("./routes/storyRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Body parser middleware
// After the Express app initialization
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Add CRUD routes here
app.use('/api', userRoutes_1.default);
app.use('/api', storyRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
