import { Box } from "@chakra-ui/react";

export default function Resume() {
  return (
    <Box id="resume" className="text-center">
      <Box className="overlay">
        <Box className="container">
          <Box className="row">
            <Box className="col-md-12">
              <h2>Check out my resume!</h2>
              <Box id="resume-button">
                <a
                  className="resume-btn wp4 animated bounceIn"
                  href="https://drive.google.com/file/d/1CRGPxbKWjzQRuhIuo8wLAyFjAlRWwpOY/view?usp=sharing"
                >
                  Grab A Copy
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
