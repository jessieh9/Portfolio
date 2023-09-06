import {Box} from "@chakra-ui/react"

export default function Intro() {
    return (
        <Box id="intro" className="intro text-center">
            <Box className="overlay">
                <Box className="intro-content">
                    <h1 className="animated fadeInDown delay-05s">Hi, I'm Jessie
                    </h1>
                    <p className="position animated fadeInUp delay-05s">Full-stack Web Developer</p>
                    <a className="fa fa-angle-down page-scroll" href="#about"> </a>
                </Box>
            </Box>
        </Box>
    )
}