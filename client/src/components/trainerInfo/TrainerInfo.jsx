import "./trainerInfo.css";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import frontend2 from "../../assets/images/frontend2.jpg";

const TrainerInfo = ({
  frontendTrainer,
  backendTrainer,
  fullstackTrainer,
  cloudTrainer,
  securityTrainer,
}) => {
  const [trainerFE, setTrainerFE] = useState([]);
  const [trainerBE, setTrainerBE] = useState([]);
  const [trainerFS, setTrainerFS] = useState([]);
  const [trainerCL, setTrainerCL] = useState([]);
  const [trainerSEC, setTrainerSEC] = useState([]);

  // Frontendcourseses
  useEffect(() => {
    const fetchTrainerCometence = async () => {
      try {
        const result = await axios.get(
          `http://localhost:3001/api/trainers/getComp?competency=Frontend`
        );
        console.log(result.data);
        setTrainerFE(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrainerCometence();
  }, []);
  // Backend trainers
  useEffect(() => {
    const fetchTrainerCometence = async () => {
      try {
        const result = await axios.get(
          `http://localhost:3001/api/trainers/getComp?competency=Backend`
        );

        setTrainerBE(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrainerCometence();
  }, []);
  // Fullstack trainer
  useEffect(() => {
    const fetchTrainerCometence = async () => {
      try {
        const result = await axios.get(
          `http://localhost:3001/api/trainers/getComp?competency=Fullstack`
        );

        setTrainerFS(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrainerCometence();
  }, []);
  // Cloud trainer
  useEffect(() => {
    const fetchTrainerCometence = async () => {
      try {
        const result = await axios.get(
          `http://localhost:3001/api/trainers/getComp?competency=Cloud`
        );

        setTrainerCL(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrainerCometence();
  }, []);
  // Security trainier
  useEffect(() => {
    const fetchTrainerCometence = async () => {
      try {
        const result = await axios.get(
          `http://localhost:3001/api/trainers/getComp?competency=Security`
        );
        setTrainerSEC(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrainerCometence();
  }, []);

  return (
    <>
      <div className="container">
        {frontendTrainer && (
          <div className="cardContainer">
            {trainerFE.map((t) => (
              <div className="trainerContainer">
                <h2 className="name">
                  Name: {t.firstName} {t.lastName}
                </h2>
                <h2 className="location">Location: {t.city}</h2>
                <h2 className="wheelChair">
                  Need Accessible: {t.needWheelchair === true ? "Yes" : "No"}
                </h2>
              </div>
            ))}
          </div>
        )}
        {backendTrainer && (
          <div className="cardContainer">
            {trainerBE.map((t) => (
              <div className="trainerContainer">
                <h2 className="name">
                  Name: {t.firstName} {t.lastName}
                </h2>
                <h2 className="location">Location: {t.city}</h2>
                <h2 className="wheelChair">
                  Need Accessible: {t.needWheelchair === true ? "Yes" : "No"}
                </h2>
              </div>
            ))}
          </div>
        )}
        {fullstackTrainer && (
          <div className="cardContainer">
            {trainerFS.map((t) => (
              <div className="trainerContainer">
                <h2 className="name">
                  Name: {t.firstName} {t.lastName}
                </h2>
                <h2 className="location">Location: {t.city}</h2>
                <h2 className="wheelChair">
                  Need Accessible: {t.needWheelchair === true ? "Yes" : "No"}
                </h2>
              </div>
            ))}
          </div>
        )}
        {cloudTrainer && (
          <div className="cardContainer">
            {trainerCL.map((t) => (
              <div className="trainerContainer">
                <h2 className="name">
                  Name: {t.firstName} {t.lastName}
                </h2>
                <h2 className="location">Location: {t.city}</h2>
                <h2 className="wheelChair">
                  Need Accessible: {t.needWheelchair === true ? "Yes" : "No"}
                </h2>
              </div>
            ))}
          </div>
        )}
        {securityTrainer && (
          <div className="cardContainer">
            {trainerSEC.map((t) => (
              <div className="trainerContainer">
                <h2 className="name">
                  Name: {t.firstName} {t.lastName}
                </h2>
                <h2 className="location">Location: {t.city}</h2>
                <h2 className="wheelChair">
                  Need Accessible: {t.needWheelchair === true ? "Yes" : "No"}
                </h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TrainerInfo;
