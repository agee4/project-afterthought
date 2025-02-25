// FireDetectorPage.jsx
import pageTitle from "../../components/pageTitleFunct"
import ModalImage from "../../components/Modal/ModalImage"
import DroneFinalImg from "../../assets/firedetectordronefinal.png"
import SystemDiagramImg from "../../assets/firedetectordronediagram.jpg"
import PresentationImg from "../../assets/firedetectorpresentation.jpg"

const FireDetectorPage = () => {
  const PythonIcon = "https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg"
  pageTitle("Fire Detector")
  
  return (
    <>
      <h1 className="font-bold text-5xl m-5">Fire Detector Drone</h1>
      <p>
        <i>The culmination of my undergraduate CSE skills.</i><br />
      </p>
      <h2 className="font-bold text-3xl m-3">What is this project?</h2>
      <p>
        The <b>Fire Detecting Drone</b> was a CSE undergraduate Capstone project 
        that begun Spring of 2023 and was completed Winter of 2024. 
        The final product was a semiautonomous aerial drone equipped with various sensors 
        that it could use to identify fires.
        Undergraduate capstone project<br/>
      </p>
      <ul className="gallery flex flex-row justify-evenly p-0 m-0 list-none text-center">
        <ModalImage
          className="mx-auto max-w-[20%]"
          src={DroneFinalImg}
          alt="The final fire detection drone"
        />
        <ModalImage
          className="mx-auto max-w-[20%]"
          src={SystemDiagramImg}
          alt="System diagram of the final fire detection drone"
        />
        <ModalImage
          className="mx-auto max-w-[20%]"
          src={PresentationImg}
          alt="Me in front of a poster detailing the original project"
        />
      </ul>
      <h2 className="font-bold text-3xl m-3">What did I learn?</h2>
      <ul>
        <li>Python <img className="emoji h-[0.75rem] inline-block align-baseline" src={PythonIcon} /></li>
        <ul>
          <li>OpenCV</li>
          <li>NumPy</li>
          <li>DJITello</li>
        </ul>
        <li>How to work on an engineering project with a limited budget</li>
        <li>How to create a classical object detection algorithm</li>
        <li>How to present an engineering project succinctly and understandably to others via presentation</li>
      </ul>
      <h2 className="font-bold text-3xl m-3">Resources Used</h2>
      <ul>
        <li>Python <img className="emoji h-[0.75rem] inline-block align-baseline" src={PythonIcon} /></li>
        <ul>
          <li>OpenCV</li>
          <li>NumPy</li>
          <li>DJITelloPy</li>
        </ul>
        <li>DJI Tello (RC Drone)</li>
      </ul>
    </>
  )
}

export default FireDetectorPage