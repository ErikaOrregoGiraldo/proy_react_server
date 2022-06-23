const express = require("express");
const SubjectController = require("../controllers/subject");

const api = express.Router();

api.get("/subjects", SubjectController.ListSubject);
api.post("/subject", SubjectController.AddSubject);
api.put("/updatesubject/:id", SubjectController.UpdateSubject);
api.delete("/deleteSubject/:id", SubjectController.DeleteSubject);

module.exports = api;
