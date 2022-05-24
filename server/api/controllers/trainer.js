import Trainer from '../models/TrainerSchema.js';

export const getTrainers = async (req, res, next) => {
  try {
    const trainers = await Trainer.find();
    res.send(trainers);
  } catch (error) {
    next(error);
  }
};

// export const countByCompentence = async (req,res,next)=>{
//   const competencies = req.query.competencies.split(",")
//   try {
//     const list = await Promise.all(competencies.map(competence =>{
//       return TrainerSchema.countDocuments({})
//     }))

//   } catch (error) {
//     next(error)
//   }
// }
