"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeReq = void 0;
const types_1 = require("./types");
const isString = (text) => typeof text === "string";
const isDate = (date) => Boolean(Date.parse(date));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (str) => 
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
Object.values(types_1.Gender).includes(str);
const parseString = (str) => {
    if (!str || !isString(str)) {
        throw new Error("Incorrect or missing str");
    }
    return str;
};
const parseDate = (date) => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error("Incorrect or missing date");
    }
    return date;
};
const parseGender = (gender) => {
    if (!gender || !isGender(gender)) {
        throw new Error("Incorrect or missing gender");
    }
    return gender;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typeReq = (patient) => {
    const newEntry = {
        name: parseString(patient.name),
        dateOfBirth: parseDate(patient.dateOfBirth),
        gender: parseGender(patient.gender),
        occupation: parseString(patient.occupation),
    };
    return newEntry;
};
exports.typeReq = typeReq;
