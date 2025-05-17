import React from "react";
import jessieLogo from "../images/jessie-logo.png";
import { HamburgerIcon } from "@chakra-ui/icons";
import {Box, UnorderedList, ListItem} from "@chakra-ui/react";

export default function Navbar() {

    // useEffect for when scroll event occurs for each navigation
    // currentPage to keep track of the nav
    const [currentPage, setCurrentPage] = React.useState("top");

    const [scrollPassion, setScrollPassion] = React.useState(false);
    const [scrollAbout, setScrollAbout] = React.useState(false);
    const [scrollExperience, setScrollExperience] = React.useState(false);
    const [scrollProject, setScrollProject] = React.useState(false);
    const [scrollContact, setScrollContact] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            // top section
            if (window.scrollY < 700) {
                setCurrentPage("top");
            }

            // about section
            if (window.scrollY > 700) {
                setScrollAbout(true);
                setCurrentPage("about");
            } else {
                setScrollAbout(false);
            }

            // passion section
            if (window.scrollY > 1500) {
                setScrollPassion(true);
                setCurrentPage("passion");
            } else {
                setScrollPassion(false);
            }

            // experience section
            if (window.scrollY > 2400) {
                setScrollExperience(true);
                setCurrentPage("experience");
            } else {
                setScrollExperience(false);
            }

            // projs section
            if (window.scrollY > 3500) {
                setScrollProject(true);
                setCurrentPage("projects");
            } else {
                setScrollProject(false);
            }

            // contact section
            if (window.scrollY > 5450) {
                setScrollContact(true);
                setCurrentPage("contact");
            } else {
                setScrollContact(false);
            }

        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // console.log(currentPage);

    return (
      <nav
        className={
          currentPage === "top"
            ? "navbar navbar-custom navbar-fixed-top "
            : "navbar navbar-custom navbar-fixed-top top-nav-collapse"
        }
        role="navigation"
      >
        <Box className="container">
          <Box className="navbar-header page-scroll">
            {/* for when the screen is resized to small */}
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-main-collapse"
            >
              <HamburgerIcon color={"white"} boxSize={8} />
            </button>
            <a
              className="navbar-brand page-scroll"
              href="https://jessie-he.netlify.app"
            >
              <img src={jessieLogo} alt="logo" />
              Jessie He
            </a>
          </Box>
          <Box className="collapse navbar-collapse navbar-main-collapse">
            <UnorderedList className="nav navbar-nav navbar-right">
              <ListItem
                className={currentPage === "top" ? "hidden active" : "hidden"}
              >
                <a className="page-scroll" href="#page-top">
                  {" "}
                </a>
              </ListItem>
              {/* {console.log(scrollAbout)}
                        {console.log(currentPage)} */}
              <ListItem
                className={
                  scrollAbout && currentPage === "about" ? "active" : ""
                }
              >
                <a className="page-scroll" href="#about">
                  About
                </a>
              </ListItem>
              <ListItem
                className={
                  scrollPassion && currentPage === "passion" ? "active" : ""
                }
              >
                <a className="page-scroll" href="#passion">
                  Passion
                </a>
              </ListItem>
              <ListItem
                className={
                  scrollExperience && currentPage === "experience"
                    ? "active"
                    : ""
                }
              >
                <a className="page-scroll" href="#experience">
                  Experience
                </a>
              </ListItem>
              <ListItem
                className={
                  scrollProject && currentPage === "projects" ? "active" : ""
                }
              >
                <a className="page-scroll" href="#projects">
                  Projects
                </a>
              </ListItem>
              <ListItem
                className={
                  scrollContact && currentPage === "contact" ? "active" : ""
                }
              >
                <a className="page-scroll" href="#contact">
                  Contact
                </a>
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </nav>
    );
}
