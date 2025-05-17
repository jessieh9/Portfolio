import { Box } from "@chakra-ui/react";

export default function Passion() {
  return (
    <Box id="passion" className="text-center">
      <Box className="container">
        <Box className="row">
          {/* <h2>What I Do</h2> */}
          <Box className="col-md-12">
            <h2>What I Do</h2>
            <div className="spacer-12"></div>
            <Box className="col-md-4 wp2 animated fadeIn">
              <div className="icon">
                <i className="fa fa-laptop"></i>
              </div>
              <h3>Design & Development</h3>
              <p>
                With a strong foundation in computer science, I'm passionate
                about web design and development, and interested in mobile app
                development. I strive to create software that encompasses a
                positive user experience and efficient functionality of the
                system. I'm also interested in learning and using different
                technologies; I recently had a chance to play with deployments
                and horizontal scaling using Docker and Kubernetes, and creating
                CI/CD pipelines, automation, and testing.
              </p>
            </Box>
            <Box className="col-md-4 wp2 delay-025s animated fadeIn">
              <div className="icon">
                <i className="fa fa-code"></i>
              </div>
              <h3>Involvement</h3>
              <p>
                {" "}
                To further my knowledge in my field, I've tutored Python, C++,
                and Data Structures courses to name some. I've also participated
                in multiple hackathons, two of which I had won with my team. I'm
                currently a Technical Lead for{" "}
                <a href="https://ctc-uci.com/">Commit the Change </a>
                and a Project Manager for{" "}
                <a href="https://github.com/ChrastilLab/Concord">
                  Concord
                </a> and{" "}
                <a href="https://sqlrewriter.ics.uci.edu/">SqlRewriter</a>{" "}
                projects. I'm also doing research with SQLRewriter
                (query optimization) and NLP Models (small SIRI replica). I
                recently participated in the ECTF 2025 competition working in
                embedded systems and cybersecurity.
              </p>
            </Box>
            <Box className="col-md-4 wp2 delay-05s animated fadeIn">
              <div className="icon">
                <i className="fa fa-lightbulb-o"></i>
              </div>
              <h3>Leadership</h3>
              <p>
                {" "}
                I'm currently a global ambassador for the{" "}
                <a href="https://www.sowcoders.org/">
                  Society of Women Coders.{" "}
                </a>
                I've also been involved in organizations with emphasis on mentorship
                and building community. Because of these spaces, I have
                developed skills that allow me to consider others' perspectives
                and establish skills in public speaking and communication. As as
                result, I enjoy participating in organizations that give back,
                including
                <a href="https://www.instagram.com/explore/locations/1021508751/camp-kesem-at-uc-irvine/?hl=en">
                  {" "}
                  Kesem@UCI
                </a>
                ,<a href="https://asuci.uci.edu/academicvp/amp/"> AMP</a>,
                <a href="https://admissions.uci.edu/admitted/orientation.php#:~:text=To%20help%20you%20transition%20to,Student%20Parent%20Orientation%20(TSPOP).">
                  {" "}
                  SPOP{" "}
                </a>
                , and{" "}
                <a href="https://isep.due.uci.edu/about-ipg-scholars-program/">
                  {" "}
                  International Peer Scholars
                </a>
                .
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
