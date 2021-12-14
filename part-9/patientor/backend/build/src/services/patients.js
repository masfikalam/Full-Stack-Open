"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPatient = exports.findById = exports.getPatients = void 0;
const uuid_1 = require("uuid");
const patients_json_1 = __importDefault(require("../../data/patients.json"));
const patients = patients_json_1.default;
const getPatients = () => {
    return patients.map(function ({ id, name, dateOfBirth, gender, occupation }) {
        return { id, name, dateOfBirth, gender, occupation };
    });
};
exports.getPatients = getPatients;
const findById = (id) => {
    return patients.find((patient) => patient.id === id);
};
exports.findById = findById;
const addPatient = (patient) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const id = (0, uuid_1.v1)();
    const newEntry = Object.assign({ id }, patient);
    patients.push(newEntry);
    return newEntry;
};
exports.addPatient = addPatient;
