// FireDetectorPage.jsx
import PageTitle from "../../components/PageTitle"
import DroneFinalImg from "../../assets/firedetectordronefinal.png"
import SystemDiagramImg from "../../assets/firedetectordronediagram.jpg"

const FireDetectorPage = () => {
  return (
    <div className="page">
      <PageTitle title="Fire Detector - Aaron Gee Portfolio" />
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
      <img
        className="gallery-img"
        src={DroneFinalImg}
        alt="The final fire detection drone"
        title="The final fire detection drone"
      />
      <img
        className="gallery-img"
        src={SystemDiagramImg}
        alt="System diagram of the final fire detection drone"
        title="System diagram of the final fire detection drone"
      />
      <h2>Resources Used</h2>
      <ul>
        <li>Python</li>
        <ul>
          <li>OpenCV</li>
          <li>NumPy</li>
          <li>DJITello</li>
        </ul>
      </ul>
      <h2>What did I learn?</h2>
    </div>    
  )
}

export default FireDetectorPage