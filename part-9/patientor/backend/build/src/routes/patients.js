"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("../utils");
const patients_1 = require("./../services/patients");
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.json((0, patients_1.getPatients)());
});
router.get("/:id", (req, res) => {
    const patient = (0, patients_1.findById)(req.params.id);
    patient ? res.json(patient) : res.sendStatus(404);
});
router.post("/", (req, res) => {
    try {
        const typedEntry = (0, utils_1.typeReq)(req.body);
        const patient = (0, patients_1.addPatient)(typedEntry);
        res.json(patient);
    }
    catch (e) {
        e instanceof Error && console.log(e.message);
    }
});
exports.default = router;
