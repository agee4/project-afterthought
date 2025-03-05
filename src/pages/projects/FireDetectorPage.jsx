// FireDetectorPage.jsx
import Page from "../../components/Page"
import ModalImage from "../../components/Modal/ModalImage"
import IconItem from "../../components/IconItem"
import DroneFinalImg from "../../assets/firedetectordronefinal.png"
import SystemDiagramImg from "../../assets/firedetectordronediagram.jpg"
import PresentationImg from "../../assets/firedetectorpresentation.jpg"

const FireDetectorPage = () => (
  <Page title="Fire Detector">
    <h1 className="m-5 text-5xl font-bold">Fire Detector Drone</h1>
    <p className="italic">
      The culmination of my undergraduate CSE skills.
      <br />
    </p>
    <h2 className="m-3 text-3xl font-bold">What is this project?</h2>
    <p className="px-5">
      The <span className="font-bold">Fire Detecting Drone</span> was a CSE
      undergraduate Capstone project that begun Spring of 2023 and was completed
      Winter of 2024. The final product was a semiautonomous aerial drone
      equipped with various sensors that it could use to identify fires.
      Undergraduate capstone project
      <br />
    </p>
    <ul className="gallery m-0 flex list-none flex-row justify-evenly p-0 text-center">
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
    <h2 className="m-3 text-3xl font-bold">What did I learn?</h2>
    <ul>
      <li>How to work on an engineering project with a limited budget</li>
      <li>How to create a classical object detection algorithm</li>
      <li>
        How to present an engineering project succinctly and understandably to
        others via presentation
      </li>
    </ul>
    <h2 className="m-3 text-3xl font-bold">Resources Used</h2>
    <div className="flex flex-row flex-wrap place-content-center">
      <IconItem name="Python" />
      <IconItem name="OpenCV" />
      <IconItem name="NumPy" />
      <IconItem name="DJITelloPy" />
      <IconItem name="DJI Tello (Drone)" />
    </div>
    <br />
  </Page>
)

export default FireDetectorPage
