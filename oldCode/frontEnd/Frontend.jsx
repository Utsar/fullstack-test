import CourseInfo from "../../components/courseInfo/CourseInfo";
import Navbar from "../../components/navbar/Navbar";
import TrainerInfo from "../../components/trainerInfo/TrainerInfo";

const Frontend = () => {
  return (
    <>
      <Navbar />
      <CourseInfo frontend />
      <TrainerInfo frontendTrainer />
    </>
  );
};

export default Frontend;
