"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diagnoses_1 = require("../services/diagnoses");
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.json((0, diagnoses_1.getDiagnoses)());
});
router.post("/", (_req, res) => {
    res.send("adding diagnose");
});
exports.default = router;
