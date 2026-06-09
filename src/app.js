const express = require('express');
const students = require('./data/studentsData');

const app = express();

app.use(express.json());

app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            error: 'Élève introuvable'
        });
    }

    res.json(student);
}); 


app.post('/students', (req, res) => {
    const { firstName, lastName, age } = req.body;

    if (!firstName || !lastName || !age) {
        return res.status(400).json({
            error: 'Prénom, nom et âge obligatoires'
        });
    }

    const newStudent = {
        id: students.length + 1,
        firstName,
        lastName,
        age,
        notes: []
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});

module.exports = app;