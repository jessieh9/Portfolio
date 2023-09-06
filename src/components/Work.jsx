import Projects from "./Projects"
import { ArrowDownIcon } from "@chakra-ui/icons"
import { Box } from "@chakra-ui/react"

export default function Work() {
    return (
        <Box id="projects">
            <Box className="container">
                <Box className="col-lg-12 text-center">
                    <h2 className="project-heading">What I've Done</h2>
                    <h5 className="subtitle">Visit my github to follow my progress!
                        <a href="#contact-footer" className="to-github page-scroll"><ArrowDownIcon boxSize={6} /></a>
                    </h5>
                </Box>
                <Box className="row projects-row">
                    <Projects />
                </Box>
            </Box>
        </Box>

    )
}

