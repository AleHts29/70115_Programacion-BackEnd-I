import express from 'express';
import __dirname from './util.js';
import handlebars from 'express-handlebars';

import mongoose from 'mongoose';
import studentRouter from './routes/students.router.js'
import coursesRouter from './routes/courses.router.js'
import viewsRouter from "./routes/views.router.js";

import studentsModel from './services/db/models/students.js';
import { coursesModel } from './services/db/models/courses.js';

//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Template engine
 */
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'))

//Declaración de Routers:
app.use('/', viewsRouter);
app.use("/api/students", studentRouter);
app.use("/api/courses", coursesRouter);

const SERVER_PORT = 9091;
app.listen(9091, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async () => {
    try {

        /*=============================================
        =                   Population                =
        =============================================*/
        await mongoose.connect('mongodb://localhost:27017/colegio_C16?retryWrites=true&w=majority');
        console.log("Conectado con exito a MongoDB usando Moongose.");


        // 1ro creamos al estudiante
        // let nuevoEstudiante = await studentsModel.create({
        //     name: "Jesus",
        //     lastName: "Gonzalez",
        //     age: "20",
        // })
        // let student = await studentsModel.findOne({ _id: nuevoEstudiante._id })
        // console.log(student);


        // // 2do creamos un nuevo curso
        // let nuevoCurso = await coursesModel.create({
        //     title: "Curso NodeJS",
        //     description: "Curso backend de NodeJS",
        //     teacherName: "Alejandro Huertas"
        // })
        // let curso = await coursesModel.findOne({ _id: nuevoCurso._id })
        // console.log(curso);


        // // 3ro creamos la relacion
        // let student = await studentsModel.findOne({ _id: "66e0d5ddecf04ad930c65cc7" });
        // console.log(JSON.stringify(student, null, 2));

        // student.courses.push({ course: "66e0d6c356976369c13fd5e2" });
        // console.log(student);


        // // Actualizacion en la DB
        // let result = await studentsModel.updateOne({ _id: "66e0d5ddecf04ad930c65cc7" }, student);
        // console.log(result);




        // // 4to añadimos el populate
        // let student = await studentsModel.findOne({ _id: "66e0d5ddecf04ad930c65cc7" }).populate('courses.course');
        // console.log(student);

        // console.log(JSON.stringify(student, null, 2));




        // usando populate como Middleware
        let student = await studentsModel.find({ _id: "66e0d5ddecf04ad930c65cc7" })
        console.log(JSON.stringify(student, null, 2));




    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();