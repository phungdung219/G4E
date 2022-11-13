const Worker = require('../models/Worker')
const { MongooseToObject } = require('../../util/mongoose')
class WorkerController {

    //[get] /workers/:slug
    show(req,res,next) {
        Worker.findOne({slug:req.params.slug})
            .then((worker)=>{
                res.render('workers/show', {
                    worker: MongooseToObject(worker),
                    account: req.data
                })
            }) 
            .catch(next)
    }

    //[get] /workers/create
    create(req,res,next) {
        res.render('workers/create', {
            account: req.data
        })
    }

    //[post] /workers/create
    store(req,res,next) {
        const worker = new Worker( req.body );
        worker.img = req.file.filename
        worker.save()
        res.redirect('/')
    }

    //[get] /workers/:id/edit
    edit(req,res,next) {
        Worker.findById(req.params.id)
            .then(worker => res.render('workers/edit',{
                worker : MongooseToObject(worker),
                account: req.data
            }))
            .catch(next)  
    }

    //[put] /workers/:id
    update(req,res,next) {
        Worker.updateOne({_id: req.params.id }, req.body)
            .then(()=>res.redirect('/admin/stored/workers'))
            .catch(next)
    }

    //[delete] /workers/:id
    delete(req,res,next) {
        Worker.deleteOne({_id: req.params.id }, req.body)
            .then(()=>res.redirect('back'))
            .catch(next)
    }
    
}

module.exports = new WorkerController