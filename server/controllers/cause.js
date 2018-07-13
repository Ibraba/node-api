import mongoose from 'mongoose';
import Cause from '../models/cause';
// create new cause
// create new cause
export function createCause(req, res) {
    const cause = new Cause({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
    });
    return cause
        .save()
        .then((newCause) => {
            return res.status(201).json({
                success: true,
                message: 'New cause created successfully',
                Cause: newCause,
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            });
        });
}

// Get all causes
export function getAllCause(req, res){
    Cause.find()
        .select('_id title description')
        .then((allClause) => {
            return res.status(200).json({
                success: true,
                message: 'A list of all cause',
                Cause: allClause,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again',
                error: err.message,
            })
        })
}
// get single cause
export function getSingleCause(req, res) {
    const id = req.params.causeId;
    Cause.findById(id)
        .then((singleCause) => {
            return res.status(200).json({
                success: true,
                message: `More on ${singleCause.title}`,
                Cause: singleCause,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'This cause does not exist',
                error: err.message,
            });
        });
}


//export default Cause;
