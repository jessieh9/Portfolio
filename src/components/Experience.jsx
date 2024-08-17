import sow from "../images/sowcoder.jpeg";
import uci from "../images/UCI.png";
import ic from "../images/uci-ic.jpeg";
import ctc from "../images/ctc.png";
import tech from "../tech"
import { Box, Stack } from "@chakra-ui/react";

export default function Experience() {
    return (
        <Box id="experience">
            <Box className="container">
                <Box className="row">
                    <Box className="col-md-12">
                        <Box className="col-md-10 col-md-offset-1 text-center wp3 animated fadeIn">
                            <h2>Experience</h2>
                            <p>I have been working with software development technologies for a little over 2 years now, and I am
                                always eager to learn more.
                            </p>
                        </Box>

                        <Box className="col-sm-offset-1 col-xs-12 col-sm-6 col-md-6 skills-section wp3 animated fadeIn">
                            <h3>Some technologies I've worked with:</h3>
                            <Box className="row">
                                {tech.map((technology, index) => {
                                    return (
                                        <div key={index} className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={`../images/skills/${technology.image}`} id={technology.name} alt={technology.name} /></div>
                                    )
                                })}
                            </Box>
                        </Box>
                        <Box className="col-xs-12 col-sm-offset-1 col-sm-4 col-md-offset-1 col-md-3 employment wp3 animated fadeIn">
                            <Box className="text-center">
                                <h3>Where I've Worked:</h3>
                                <Stack flexDirection={"row"} justifyContent={"space-between"}>
                                    <Stack paddingRight={"5px"}>
                                        <a href="https://www.sowcoders.org/" >
                                            <img id="sow-logo" src={sow} alt="SOWCoders" />
                                        </a>
                                        <a href="https://www.ics.uci.edu/">
                                            <img id="ics-logo" src={uci} alt="UCI-ICS" width={"150px"} height={"150px"}/>
                                        </a>
                                    </Stack>
                                    <Stack>
                                        <a href="https://ic.uci.edu/">
                                            <img id="ic-logo" src={ic} alt="UCI-IC" width={"150px"} height={"150px"}/>
                                        </a>
                                        <a href="https://ctc-uci.com/">
                                            <img id="ctc-logo" src={ctc} alt="UCI-CTC" width={"150px"} height={"150px"}/>
                                        </a>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
