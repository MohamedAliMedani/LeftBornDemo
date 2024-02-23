import { FC } from "react";
import { Row } from "react-bootstrap";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import { useProducts } from "../../../providers/products/products-provider";

type DeletePopupProps = {
  id: number;
  showDelete: boolean;
  handleCloseDelete?: any;
};

export const DeleteProductPopup: FC<DeletePopupProps> = ({
  showDelete,
  handleCloseDelete,
  id,
}) => {
  const showSuccessAlert = () => {
    Swal.fire({
      text: "DeletedSuccessfully",
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: "Agree",
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };
  let { deleteProduct } = useProducts();
  return (
    <div className="modal-dialog modal-dialog-centered mw-650px">
      <Modal centered show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-center my-5 pb-4">
            <div className="text-center">
              <h3>Confirm Deletion</h3>
            </div>
          </Row>

          <Row className="justify-content-center mb-5">
            <div className="text-center">
              <h5>AreYouSureToDeleteThisItem</h5>
            </div>
          </Row>
        </Modal.Body>

        <Modal.Footer className="justify-content-center py-2">
          <div className="row">
            <div className="col-12 col-lg-7 mx-auto my-2 pb-2">
              <div className="outputCard card-diff-toolbar w-100 d-flex justify-content-center">
                <div className="d-flex justify-content-center align-items-center w-100">
                  <button
                    type="reset"
                    className="btn btn-secondary me-3 w-100"
                    onClick={handleCloseDelete}
                  >
                    Cancel
                  </button>
                  <div
                    onClick={async () => {
                      let result = await deleteProduct(id);
                      if (result == "product deleted successfully") {
                        handleCloseDelete();
                        showSuccessAlert();
                      }
                    }}
                    className="btn btn-danger me-5 w-100 "
                  >
                    <span className="indicator-label">Delete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
