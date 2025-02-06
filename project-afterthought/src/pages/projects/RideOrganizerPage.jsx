// RideOrganizerPage.jsx
import { Link } from "react-router-dom"
import PageTitle from "../../components/PageTitle"

const RideOrganizerPage = () => {
  return (
    <div className="page">
      <PageTitle title="Ride Organizer - Aaron Gee Portfolio" />
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
      <ul>
        <li>principles of web development (frontend & backend)</li>
        <li>delegate responsibilities and tasks with others</li>
        <br />
        <li>basics of HTML, CSS, JS, React, NodeJS</li>
        <li>create authentication protocols</li>
      </ul>
      <h2>Other Resources</h2>
      <h3>
        <Link to="https://ridesprojectfrontend.onrender.com">Project Site</Link>
      </h3>
    </div>    
  )
}

export default RideOrganizerPage