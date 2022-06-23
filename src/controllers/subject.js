const Subject = require("../models/subject");

const ListSubject = (req, res) => {
  Subject.find().then((subjects) => {
    !subjects
      ? res
          .status(404)
          .send({ message: "No se ha encontrado ningúna asignatura" })
      : res.status(200).send({ subjects });
  });
};

const AddSubject = (req, res) => {
  const newSubject = new Subject(req.body);
  newSubject
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: "No se pudo crear la asignatura" });
    });
};

const UpdateSubject = (req, res) => {
  const subjectData = req.body;
  const params = req.params;

  Subject.findByIdAndUpdate(
    { _id: params.id },
    subjectData,
    (err, userUpdate) => {
      err
        ? res.status(500).send({ message: "Error del servidor" })
        : !userUpdate
        ? res.status(404).send({ message: "No se encontró la asignatura" })
        : res.status(200).send({ message: "Asignatura actualizada" });
    }
  );
};

const DeleteSubject = (req, res) => {
  const { id } = req.params;
  Subject.findByIdAndDelete(id, (err, subjectDelete) => {
    err
      ? res.status(500).send({ message: "Error del servidor" })
      : !subjectDelete
      ? res.status(404).send({ message: "No se encontró la asignatura" })
      : res.status(200).send({ message: "Asignatura eliminada" });
  });
};

module.exports = {
  AddSubject,
  ListSubject,
  UpdateSubject,
  DeleteSubject,
};
