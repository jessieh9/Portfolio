import projects from "../projects";
import { useState } from "react";

import {
    Modal,
    Box,
    Button,
} from '@chakra-ui/react'
import Popup from "./Popup";
import { InfoIcon } from "@chakra-ui/icons";

export default function Projects() {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(undefined);
    const handleShow = (id) => setShowModal(id);

    const projectsList = projects.map((project, index) => {
        return (
            <Box key={index} className="projects-item-wrapper wp5 animated fadeIn">
                <Box className="projects-item" data-toggle="modal" href="#courseSourceModal">
                    <Box className="projects-overlay"></Box>
                    <Box className="links">
                        <Button backgroundColor={"transparent"} _hover={{ bg: "transparent" }} onClick={() => handleShow(project.id)}><InfoIcon color={"white"} boxSize={8} /></Button>
                    </Box>
                    <img src={`../images/projects/${project.image}`} alt={`${project.image}-proj`} />
                    <Box className="projects-info">
                        <h3>{project.title}</h3>
                    </Box>
                </Box>
                <Modal isOpen={showModal === project.id} onClose={() => handleClose} >
                    <Popup
                        close={handleClose}
                        image={`../images/projects/${project.image}`}
                        title={project.title}
                        projType={project.projType}
                        description={project.description}
                        source={project.source}
                        site={project.site}
                    />
                </Modal>
            </Box>
        )
    })


    return (
        <div>
            {projectsList}
        </div>
    )
}