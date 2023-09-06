import { useState } from "react";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const FileModal = ({open,onClose}) => {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => onClose();

  return (
    <MDBModal show={open} setShow={setBasicModal} tabIndex="-1" position="top-right">
      <MDBModalDialog position="top-right">
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Delete Media</MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={toggleShow}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
           

          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggleShow}>
              Close
            </MDBBtn>
            <MDBBtn>Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default FileModal;
