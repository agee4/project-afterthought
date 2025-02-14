// FireDetectorPage.jsx
import pageTitle from "../../components/pageTitleFunct"
import ModalImage from "../../components/Modal/ModalImage"
import DroneFinalImg from "../../assets/firedetectordronefinal.png"
import SystemDiagramImg from "../../assets/firedetectordronediagram.jpg"
import PresentationImg from "../../assets/firedetectorpresentation.jpg"

const FireDetectorPage = () => {
  pageTitle("Fire Detector")
  
  return (
    <div className="page">
      <h1>Fire Detector Drone</h1>
      <p>
        <i>The culmination of my undergraduate CSE skills.</i><br />
      </p>
      <h2>What is this project?</h2>
      <p>
        The <b>Fire Detecting Drone</b> was a CSE undergraduate Capstone project 
        that begun Spring of 2023 and was completed Winter of 2024. 
        The final product was a semiautonomous aerial drone equipped with various sensors 
        that it could use to identify fires.
        Undergraduate capstone project<br/>
      </p>
      <ul className="gallery">
        <ModalImage
          src={DroneFinalImg}
          alt="The final fire detection drone"
        />
        <ModalImage
          src={SystemDiagramImg}
          alt="System diagram of the final fire detection drone"
        />
        <ModalImage
          src={PresentationImg}
          alt="Me in front of a poster detailing the original project"
        />
      </ul>
      <h2>What did I learn?</h2>
      <ul>
        <li>Python</li>
        <ul>
          <li>OpenCV</li>
          <li>NumPy</li>
          <li>DJITello</li>
        </ul>
        <li>How to work on an engineering project with a limited budget</li>
        <li>How to create a classical object detection algorithm</li>
        <li>How to present an engineering project succinctly and understandably to others via presentation</li>
      </ul>
      <h2>Resources Used</h2>
      <ul>
        <li>Python</li>
        <ul>
          <li>OpenCV</li>
          <li>NumPy</li>
          <li>DJITelloPy</li>
        </ul>
        <li>DJI Tello (RC Drone)</li>
      </ul>
    </div>
  )
}

export default FireDetectorPage