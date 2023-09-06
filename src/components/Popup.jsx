import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

export default function Popup(props) {
    return (
        <>
            <ModalOverlay boxShadow={"0 5px 15px rgba(0, 0, 0, .5)"} />
            <ModalContent maxW={"700px"} fontFamily={"Lato, sans-serif"}>
                <ModalHeader
                    backgroundColor={"#F0F0F0"}
                    borderBottom={"1px solid #e5e5e5"}
                >
                    <h4 className="modal-title">{props.title}</h4>
                    <h6 className="modal-subtitle">{props.projType}</h6>
                </ModalHeader>
                <ModalCloseButton size={"xl"} margin={"10px"} onClick={props.close} />
                <ModalBody>
                    <p>
                        <img className="img-responsive img--modal" src={props.image} alt="" />
                    </p>
                    <p className="modal-description">
                        {props.description}
                    </p>
                    {props.site !== "" ? <p className="visit"><a href={props.site} id="visit-btn">Visit Site </a>
                        or <a href={props.source} id="visit-btn">View Source</a></p> : <p className='visit'><a href={props.source} id="visit-btn">View Source</a></p>}
                    {/* <p className="visit"><a href={props.site} id="visit-btn">Visit Site </a>
                        or <a href={props.source} id="visit-btn">View Source</a></p> */}
                </ModalBody>

                <ModalFooter backgroundColor={"#F0F0F0"} padding={"20px"}>
                    <button mr={3} onClick={props.close} className='close-btn'>
                        Close
                    </button>
                </ModalFooter>
            </ModalContent>
        </>
    );
};
