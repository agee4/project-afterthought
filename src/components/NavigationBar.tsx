// NavigationBar.js
import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router"
import bobLogo from "../assets/logo/logo.svg"
import bobLogoClick from "../assets/logo/logo_oh.svg"
import ResumeButton from "./ResumeButton"
import useModal from "./Modal/useModal"

const NavigationBar = () => {
  const [Modal, setModal, closeModal] = useModal(null)
  const [logo, setLogo] = useState<string>(bobLogo)
  const logoClick = () => {
    setLogo(bobLogoClick)
    setTimeout(() => {
      setLogo(bobLogo)
    }, 500)
  }

  const location = useLocation()
  useEffect(() => {
    closeModal()
  }, [location.pathname])

  const NavModal = () => (
    <menu className="overflow-scroll bg-white p-3 whitespace-nowrap shadow-md dark:bg-black">
      <li>
        <NavLink
          to="../"
          title="Return Home"
          className="logo m-3 flex h-8 place-content-center"
        >
          {({ isActive }) => (
            <img
              src={isActive ? bobLogo : bobLogoClick}
              className="logo/image h-8 border-0"
              id="logo"
            />
          )}
        </NavLink>
      </li>
      <li className="animate-shadowpulse font-bold text-indigo-500 shadow-indigo-500 hover:animate-none hover:text-indigo-500 hover:text-shadow-portfolio">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "pointer-events-none cursor-default text-neutral-500"
              : "hover:text-indigo-500"
          }
          to="../overview"
          title="Overview"
        >
          Overview
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "pointer-events-none cursor-default text-neutral-500"
              : "hover:text-indigo-500"
          }
          to="../about-site"
          title="About the Site"
        >
          About the Site
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "pointer-events-none cursor-default text-neutral-500"
              : "hover:text-indigo-500"
          }
          to="../about-me"
          title="About Me"
        >
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "pointer-events-none cursor-default text-neutral-500"
              : "hover:text-indigo-500"
          }
          to="../changelog"
          title="Change Log"
        >
          Change Log
        </NavLink>
      </li>
      <li>
        <br />
      </li>
      <li className="font-bold underline">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "pointer-events-none cursor-default text-neutral-500"
              : "hover:text-indigo-500"
          }
          to="../projects"
          title="Projects Home"
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "pointer-events-none cursor-default text-neutral-500"
              : "hover:text-indigo-500"
          }
          to="../projects/ride-organizer"
          title="Ride Organizer App"
        >
          Ride Organizer App
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "pointer-events-none cursor-default text-neutral-500"
              : "hover:text-indigo-500"
          }
          to="../projects/fire-detector"
          title="Fire Detection Model"
        >
          Fire Detection Model
        </NavLink>
      </li>
      <li>
        <hr />
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "pointer-events-none cursor-default text-neutral-500"
              : "hover:text-indigo-500"
          }
          to="../projects/portfolio-site"
          title="Portfolio Website"
        >
          Portfolio Website
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "pointer-events-none cursor-default text-neutral-500"
              : "hover:text-indigo-500"
          }
          to="../projects/ride-organizer-v2a"
          title="Ride Organizer v.2A"
        >
          Ride Organizer v.2A
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "pointer-events-none cursor-default text-neutral-500"
              : "hover:text-indigo-500"
          }
          to="../projects/groupu-organizer"
          title="GroupU Organizer"
        >
          GroupU Organizer
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "pointer-events-none cursor-default text-neutral-500"
              : "hover:text-indigo-500"
          }
          to="../projects/pvz-bb"
          title="Plants vs. Zombies Fangame"
        >
          PvZ Fangame
        </NavLink>
      </li>
      <li>
        <br />
      </li>
      <li className="font-bold underline">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "pointer-events-none cursor-default text-neutral-500"
              : "hover:text-indigo-500"
          }
          to="../contact"
          title="Contact"
        >
          Contact Me
        </NavLink>
      </li>
      <li>
        <ResumeButton className="cursor-pointer hover:text-indigo-500" />
      </li>
    </menu>
  )

  return (
    <>
      {Modal}
      <header className="navbar sticky top-0 z-1 flex items-stretch justify-between gap-8 bg-neutral-100 pr-5 text-neutral-700 shadow-md dark:bg-neutral-900 dark:text-neutral-300">
        <NavLink
          to="../"
          title="Return Home"
          className="logo m-3 flex h-8 items-center"
        >
          <img
            src={logo}
            className="logo/image h-8 border-0"
            id="logo"
            onClick={logoClick}
          />
          <h1 className="logo/text hidden truncate text-2xl font-semibold xl:block">
            Aaron Gee's Portfolio
          </h1>
        </NavLink>
        <menu className="navbar/desktop hidden items-center gap-4 xl:flex">
          <li className="relative inline-block animate-shadowpulse font-bold text-indigo-500 shadow-indigo-500 hover:animate-none hover:text-indigo-500 hover:text-shadow-portfolio">
            <NavLink to="../overview" title="Overview">
              Overview
            </NavLink>
          </li>
          <li className="group/dropdown relative inline-block">
            About
            <menu className="absolute right-0 hidden bg-white p-3 text-right whitespace-nowrap shadow-md group-hover/dropdown:block dark:bg-black">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "pointer-events-none cursor-default text-neutral-500"
                      : "hover:text-indigo-500"
                  }
                  to="../about-site"
                  title="About the Site"
                >
                  About the Site
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "pointer-events-none cursor-default text-neutral-500"
                      : "hover:text-indigo-500"
                  }
                  to="../about-me"
                  title="About Me"
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "pointer-events-none cursor-default text-neutral-500"
                      : "hover:text-indigo-500"
                  }
                  to="../changelog"
                  title="Change Log"
                >
                  Change Log
                </NavLink>
              </li>
            </menu>
          </li>
          <li className="group/dropdown relative inline-block">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "pointer-events-none cursor-default text-neutral-500"
                  : "hover:text-indigo-500"
              }
              to="../projects"
              title="Projects Home"
            >
              Projects
            </NavLink>
            <menu className="absolute right-0 hidden bg-white p-3 text-right whitespace-nowrap shadow-md group-hover/dropdown:block dark:bg-black">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "pointer-events-none cursor-default text-neutral-500"
                      : "hover:text-indigo-500"
                  }
                  to="../projects/ride-organizer"
                  title="Ride Organizer App"
                >
                  Ride Organizer App
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "pointer-events-none cursor-default text-neutral-500"
                      : "hover:text-indigo-500"
                  }
                  to="../projects/fire-detector"
                  title="Fire Detection Model"
                >
                  Fire Detection Model
                </NavLink>
              </li>
              <li>
                <hr />
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "pointer-events-none cursor-default text-neutral-500"
                      : "hover:text-indigo-500"
                  }
                  to="../projects/portfolio-site"
                  title="Portfolio Website"
                >
                  Portfolio Website
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "pointer-events-none cursor-default text-neutral-500"
                      : "hover:text-indigo-500"
                  }
                  to="../projects/ride-organizer-v2a"
                  title="Ride Organizer v.2A"
                >
                  Ride Organizer v.2A
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "pointer-events-none cursor-default text-neutral-500"
                      : "hover:text-indigo-500"
                  }
                  to="../projects/groupu-organizer"
                  title="GroupU Organizer"
                >
                  GroupU Organizer
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "pointer-events-none cursor-default text-neutral-500"
                      : "hover:text-indigo-500"
                  }
                  to="../projects/pvz-bb"
                  title="Plants vs. Zombies Fangame"
                >
                  PvZ Fangame
                </NavLink>
              </li>
            </menu>
          </li>
          <li className="group/dropdown relative inline-block">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "pointer-events-none cursor-default text-neutral-500"
                  : "hover:text-indigo-500"
              }
              to="../contact"
              title="Contact"
            >
              Contact
            </NavLink>
            <menu className="absolute right-0 hidden bg-white p-3 shadow-md group-hover/dropdown:block dark:bg-black">
              <li>
                <ResumeButton className="cursor-pointer hover:text-indigo-500" />
              </li>
            </menu>
          </li>
        </menu>
        <div className="navbar/mobile flex items-center gap-4 xl:hidden">
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
