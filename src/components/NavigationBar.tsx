// NavigationBar.js
import { useState } from "react"
import { Link } from "react-router"
import bobLogo from "../assets/logo/logo.svg"
import bobLogoClick from "../assets/logo/logo_oh.svg"
import ResumeButton from "./ResumeButton"
import useModal from "./Modal/useModal"

const NavigationBar = () => {
  const [Modal, setModal] = useModal(null)
  const [logo, setLogo] = useState<string>(bobLogo)
  const logoClick = () => {
    setLogo(bobLogoClick)
    setTimeout(() => {
      setLogo(bobLogo)
    }, 500)
  }

  const NavModal = () => (
    <menu className="bg-white p-3 shadow-md dark:bg-black overflow-scroll whitespace-nowrap">
      <li className="animate-shadowpulse font-bold text-indigo-500 shadow-indigo-500 hover:text-indigo-500 hover:text-shadow-portfolio hover:animate-none">
        <Link
          className="hover:text-indigo-500"
          to="../overview"
          title="Overview"
        >
          Overview
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-indigo-500"
          to="../about-site"
          title="About the Site"
        >
          About the Site
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-indigo-500"
          to="../about-me"
          title="About Me"
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-indigo-500"
          to="../changelog"
          title="Change Log"
        >
          Change Log
        </Link>
      </li>
      <li>
        <br />
      </li>
      <li className="font-bold underline">
        <Link
          className="hover:text-indigo-500"
          to="../projects"
          title="Projects Home"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-indigo-500"
          to="../projects/ride-organizer"
          title="Ride Organizer App"
        >
          Ride Organizer App
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-indigo-500"
          to="../projects/fire-detector"
          title="Fire Detection Model"
        >
          Fire Detection Model
        </Link>
      </li>
      <li>
        <hr />
      </li>
      <li>
        <Link
          className="hover:text-indigo-500"
          to="../projects/portfolio-site"
          title="Portfolio Website"
        >
          Portfolio Website
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-indigo-500"
          to="../projects/ride-organizer-v2a"
          title="Ride Organizer v.2A"
        >
          Ride Organizer v.2A
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-indigo-500"
          to="../projects/pvz-bb"
          title="Plants vs. Zombies Fangame"
        >
          PvZ Fangame
        </Link>
      </li>
      <li>
        <br />
      </li>
      <li className="font-bold underline">
        <Link className="hover:text-indigo-500" to="../contact" title="Contact">
          Contact Me
        </Link>
      </li>
      <li>
        <ResumeButton className="hover:text-indigo-500 cursor-pointer" />
      </li>
    </menu>
  )

  return (
    <>
      {Modal}
      <header className="navbar top-0 gap-8 bg-neutral-100 pr-5 text-neutral-700 shadow-md dark:bg-neutral-900 dark:text-neutral-300 sticky z-1 flex items-stretch justify-between">
        <Link
          to="../"
          title="Return Home"
          className="logo m-3 h-8 flex items-center"
        >
          <img
            src={logo}
            className="logo/image h-8 border-0"
            id="logo"
            onClick={logoClick}
          />
          <h1 className="logo/text text-2xl font-semibold xl:block hidden truncate">
            Aaron Gee's Portfolio
          </h1>
        </Link>
        <menu className="navbar/desktop gap-4 xl:flex hidden items-center">
          <li className="animate-shadowpulse font-bold text-indigo-500 shadow-indigo-500 hover:text-indigo-500 hover:text-shadow-portfolio relative inline-block hover:animate-none">
            <Link to="../overview" title="Overview">
              Overview
            </Link>
          </li>
          <li className="group/dropdown relative inline-block">
            About
            <menu className="right-0 bg-white p-3 shadow-md dark:bg-black absolute hidden text-right whitespace-nowrap group-hover/dropdown:block">
              <li>
                <Link
                  className="hover:text-indigo-500"
                  to="../about-site"
                  title="About the Site"
                >
                  About the Site
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-indigo-500"
                  to="../about-me"
                  title="About Me"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-indigo-500"
                  to="../changelog"
                  title="Change Log"
                >
                  Change Log
                </Link>
              </li>
            </menu>
          </li>
          <li className="group/dropdown relative inline-block">
            <Link
              className="hover:text-indigo-500"
              to="../projects"
              title="Projects Home"
            >
              Projects
            </Link>
            <menu className="right-0 bg-white p-3 shadow-md dark:bg-black absolute hidden text-right whitespace-nowrap group-hover/dropdown:block">
              <li>
                <Link
                  className="hover:text-indigo-500"
                  to="../projects/ride-organizer"
                  title="Ride Organizer App"
                >
                  Ride Organizer App
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-indigo-500"
                  to="../projects/fire-detector"
                  title="Fire Detection Model"
                >
                  Fire Detection Model
                </Link>
              </li>
              <li>
                <hr />
              </li>
              <li>
                <Link
                  className="hover:text-indigo-500"
                  to="../projects/portfolio-site"
                  title="Portfolio Website"
                >
                  Portfolio Website
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-indigo-500"
                  to="../projects/ride-organizer-v2a"
                  title="Ride Organizer v.2A"
                >
                  Ride Organizer v.2A
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-indigo-500"
                  to="../projects/pvz-bb"
                  title="Plants vs. Zombies Fangame"
                >
                  PvZ Fangame
                </Link>
              </li>
            </menu>
          </li>
          <li className="group/dropdown relative inline-block">
            <Link
              className="hover:text-indigo-500"
              to="../contact"
              title="Contact"
            >
              Contact
            </Link>
            <menu className="right-0 bg-white p-3 shadow-md dark:bg-black absolute hidden group-hover/dropdown:block">
              <li>
                <ResumeButton className="hover:text-indigo-500 cursor-pointer" />
              </li>
            </menu>
          </li>
        </menu>
        <div className="navbar/mobile gap-4 xl:hidden flex items-center">
          <button
            className="text-3xl hover:text-indigo-500"
            onClick={() => setModal(<NavModal />)}
          >
            ≡
          </button>
        </div>
      </header>
    </>
  )
}

export default NavigationBar
