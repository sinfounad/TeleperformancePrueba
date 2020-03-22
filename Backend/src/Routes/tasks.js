const Router = require('express').Router();
const mongojs = require ('mongojs');
const db = mongojs('dbTest', ['reporte']);

Router.get('/getReporte', (req, res, next )=>{
    console.log("llega a Back");
    db.reporte.find((err, reporte)=>{
    if (err) return next(err);
    
    res.json(reporte);
    console.log(reporte);
    });
    
});

Router.get('/task/:id', (req, res, next )=>{
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, task)=>{
    if (err) return next(err);
    res.json(task);
    });
    
});

Router.post('/saveReporte', (req, res, next)=>{

    const report =req.body;
    if(!report.Documento){
        res.status(400).json({
          error: 'Bad data'
        });
    }else{

        db.reporte.save(report, (err, report) => {
            
            if (err) return next(err);
            res.json(report);
            console.log("post");

        });
    }
    
});

Router.delete('/task/:id', (req, res, next)=>{

   db.task.remove({_id: mongojs.ObjectID(req.params.id)}, (err, result)=>{
    if (err) return next(err);
    res.json(result);


   });
   
});

Router.put('/task/:id',(req, res, next)=>{
    const task = req.body;
    const updateTask = {}; 
    if(task.isDone){
        updateTask.isDone=task.isDone;
    }

    if(task.title){
        update.title = task.title;
    }

    if(!updateTask){
        res.status(400).json({
         error: 'Bad request'
        });
    } else{
        db.task.update({_id: mongojs.ObjectID(req.params.id)}, (err, task)=>{

            if (err) return next(err);
            res.json(task);

        });

    }
   
});

module.exports = Router;