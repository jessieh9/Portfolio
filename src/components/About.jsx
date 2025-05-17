import profile from "../images/jessie-square.jpg";
import { Box } from "@chakra-ui/react";

export default function About() {
    return (
        <Box id="about" className="text-center">
            <Box className="overlay">
                <Box className="container">
                    <Box className="row">
                        <Box className="col-md-8 col-md-offset-2 wp1 animated fadeIn">
                            <h2>A Little Bit About Me</h2>
                            <img src={profile} id="prof-pic" alt="profile" />
                            <p>
                                Hi! My name is Jessie and I'm a self-taught full-stack developer with a passion for front end development
                                and data. I'm currently a senior at the <a href="https://uci.edu/">University of California, Irvine </a>
                                pursuing a degree in <a href="https://www.cs.uci.edu/">Computer Science</a> with a specialization in
                                Information. I aspire to be in a career that will allow me to develop my skills in creating and building
                                software while giving back to my community and inspiring positive change with technology.
                                <br />
                                <br /> When I'm not on the computer, I enjoy being a skincare junkie, playing the guitar, and basketball.
                            </p>
                        </Box>
                    </Box>
                    <Box className="row text-center">
                        <Box id="tldr">
                            <h3>TLDR?&nbsp;&nbsp;Self Proclamations:</h3>
                            <Box className="tldr-skill">
                                <div className="tldr-icon" id="tldr-keyboard"><i className="fa fa-keyboard-o"></i></div>
                                <h5>Web Developer</h5>
                            </Box>
                            <Box className="tldr-skill">
                                <div className="tldr-icon"><i className="fa-solid fa-database"></i></div>
                                <h5>Data Organizer</h5>
                            </Box>
                            <Box className="tldr-skill">
                                <div className="tldr-icon"><i className="fa-solid fa-basketball"></i></div>
                                <h5>Basketball</h5>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
