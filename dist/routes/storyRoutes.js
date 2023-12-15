"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Story_1 = __importDefault(require("../models/Story"));
const router = (0, express_1.Router)();
router.get('/stories', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.query.userId) || 1;
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        const offset = (page - 1) * pageSize;
        const stories = yield Story_1.default.findAll({
            where: { userId: userId },
            limit: pageSize,
            offset: offset,
        });
        res.status(200).json(stories);
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}));
router.post('/stories', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const story = yield Story_1.default.create(req.body);
        console.log("story added: ", story);
        res.status(201).json(story);
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}));
router.put('/stories/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const story = yield Story_1.default.update(req.body, {
            where: { id: req.params.id },
        });
        res.status(200).json(story);
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}));
router.delete('/stories/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Story_1.default.destroy({
            where: { id: req.params.id },
        });
        res.status(204).json({ message: 'Story deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}));
exports.default = router;
