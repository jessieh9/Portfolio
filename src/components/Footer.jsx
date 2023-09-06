import { Box, UnorderedList, ListItem } from '@chakra-ui/react';

export default function Footer() {
    // let scroll = document.getElementById("top");
    // window.addEventListener("scroll", function () {
    //     scroll.transform = "rotate(" + this.window.scrollY + "deg)";
    // })

    return (
        <Box className="footer" id="contact-footer">
            <Box className="container">
                <Box className="row">
                    <Box className="col-md-12 text-center">
                        <UnorderedList className="list-inline social-buttons animated fadeIn">
                            <ListItem><a id="codesandbox" href="https://codesandbox.io/u/jessieh9" ><i className="fa fa-codepen"></i></a></ListItem>
                            <ListItem><a id="github" href="https://github.com/jessieh9"><i className="fa fa-github"></i></a></ListItem>
                            <ListItem><a id="linkedin" href="https://www.linkedin.com/in/hejessie/"><i className="fa fa-linkedin"></i></a></ListItem>
                            <ListItem><a id="gitlab" href="https://gitlab-ics46-w23.ics.uci.edu/jessieh9"><i class="fa-brands fa-gitlab" style={{ color: "#c9c5c5" }}></i></a></ListItem>
                        </UnorderedList>
                        <Box className="page-scroll">
                            <a id="to-intro" className="page-scroll" href="#intro">
                                <i className="fa-solid fa-plane-up fa-2xl" color={"#f5f5f5"} ></i>
                            </a>
                        </Box>
                        <Box className="copyright">
                            <p className="copyright--text"><i className="fa fa-copyright"></i>Jessie He 2023</p>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}