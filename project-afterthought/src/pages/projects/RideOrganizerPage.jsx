// RideOrganizerPage.jsx
import { Link } from "react-router-dom"
import pageTitle from "../../components/pageTitleFunct"

const RideOrganizerPage = () => {
  pageTitle("Ride Organizer")

  return (
    <div className="page">
      <h1>Ride Organizer Application</h1>
      <p>
        <i>A first step into fullstack application development.</i>
      </p>
      <h2>What is this project?</h2>
      <p>
        The <b>Berean Community Church College Ride Organizer</b> was a programming project 
        for <abbr title="University of California, Irvine">UCI</abbr>'s CompSci 137 class (Internet Applications Engineering). 
        It was completed as a group alongside 3 other students during the UCI 2024 Spring Quarter. 
        The goal was to create a fullstack internet application 
        with the purpose of helping ride coordinators 
        assign a large amount of passengers to various drivers, 
        accounting for location and time.
      </p>
      <p>
        The application supported authentication, ride list creation, and ride list saving/loading.
      </p>
      <h2>What did I learn?</h2>
      <h3>General</h3>
      <ul>
        <li>principles of web development (frontend & backend)</li>
        <li>delegation of responsibilities and tasks</li>
      </ul>
      <h3>Specific Skills</h3>
      <ul>
        <li>Basics of fundamental website-related languages, libraries, and environments</li>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>NodeJS</li>
        </ul>
        <li>Auth0 (create authentication protocols)</li>
      </ul>
      <h2>Other Resources</h2>
      <h3>
        <Link to="https://ridesprojectfrontend.onrender.com">Project Site</Link>
      </h3>
    </div>    
  )
}

export default RideOrganizerPage