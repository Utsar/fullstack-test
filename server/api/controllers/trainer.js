import Trainer from "../models/TrainerSchema.js";
import Course from "../models/CourseSchema.js";

export const getTrainers = async (req, res, next) => {
  try {
    const trainers = await Trainer.find();
    res.send(trainers);
  } catch (error) {
    next(error);
  }
};

export const getBySkills = async (req, res, next) => {
  const { skills } = req.body;
  try {
    const trainer = await Trainer.find().where("competencies").in(skills);
    res.send(trainer);
  } catch (error) {
    next(error);
  }
};

// get course id by available trainer
export const availableTrainer = async (req, res, next) => {
  const { courseId } = req.body;
  try {
    const course = await Course.findById(courseId);
    const { topic } = course;
    const trainer = await Trainer.find().where("competencies").in(topic);
    res.send(trainer);
  } catch (error) {
    next(error);
  }
};

export const getComp = async (req, res, next) => {
  const queryNew = req.query.new;
  const queryCompetency = req.query.competency;
  try {
    let trainer;
    if (queryNew) {
      trainer = await Trainer.find({ competencies: queryCompetency });
    } else if (queryCompetency) {
      trainer = await Trainer.find({
        competencies: {
          $in: [queryCompetency],
        },
      });
    } else {
      trainer = await Trainer.find();
    }
    res.send(trainer);
  } catch (error) {
    next(error);
  }
};
// const decideToPushOrNot = (skills, comps) => {
//   for (let i = 0; i < skills.lenght; i++) {
//     if (comps.indexOf(skills[i]) !== -1) return false;
//   }
//   return true;
// };
// for (let i = 0; i < trainers.length; i++) {
//   if (decideToPushOrNot(skills, trainers[i].competencies)) {
//     trainer.push(trainers[i]);
//   }
// }

//   for (let j = 0; j < trainers[i].competencies.length; j++) {
//     if (skills.indexOf(trainers[i].competencies[j] !== -1 && )) {
//       trainer.push(trainers[i]);
//     }
//   }
// }

export const getByCompetencies = async (req, res, next) => {
  const skills = req.query.skills.split(",");
  try {
    const list = await Promise.all(
      skills.map((skill) => {
        return Trainer.countDocuments({ competencies: skill });
      })
    );
    res.status(200).send(list);
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

export const getDisabledTrainers = async (req, res, next) => {
  try {
    const trainers = await Trainer.find({
      needWheelchair: true,
    });
    res.send(trainers);
  } catch (error) {
    next(error);
  }
};
