const router = require('express').Router();
let Excercise = require('../schema/excercise.schema');

router.route('/').get((req,res) =>{
    Excercise.find()
    .then(excercises =>res.json(excercises))
    .catch(err => res.status(400).json('error : '+err))
})

router.route('/add').post((req,res) =>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExcercise = new Excercise({
        username,description,duration,date
    });

    newExcercise.save()
    .then(()=> res.json('Exercise Added Succsfully'))
    .catch(err => res.status(400).json('Error : '+err))
})

router.route('/:id').get((req,res) =>{
    Excercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error : ' + err));
})

router.route('/:id').delete((req,res) =>{
    Excercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted !!!"))
    .catch(err => res.status(400).json('Error : ' + err));
})

router.route('/update/:id').post((req,res) =>{
    Excercise.findById(req.params.id)
    .then(exercise =>{
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = req.body.date;

        exercise.save()
        .then(() => res.json("Excercise Updated Succesfully !!!"))
        .catch(err => res.status(400).json('error : ' + err))
    })
    .catch(err => res.status(400).json("error : " +err))
})

// router.route('/:id')

module.exports = router