import {
    Box,
    Button,
} from '@chakra-ui/react';
import {ChatIcon} from "@chakra-ui/icons";

export default function Contact() {
    return (
        <Box id="contact">
            <Box>
                <Box className="row">
                    <Box className="col-md-10 col-md-offset-1 text-center">
                        {/* <div className="email-icon"><i className="fa fa-paper-plane-o wp6 animated bounceInDown"></i></div> */}
                        <div className="email-icon"><ChatIcon className="animated bounceInDown" /></div>
                        <h2>Get In Touch!</h2>
                        <p>Whether you have an idea to share or just want to connect, feel free to shoot me an email!</p>
                        <Button marginTop={"40px"}>
                            <a id="email-button" href="mailto:jessieh9@uci.edu">Say Hello</a>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}