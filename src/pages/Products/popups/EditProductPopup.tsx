import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import { ImParagraphCenter } from "react-icons/im";
import { useForm } from "react-hook-form";
import { FaProductHunt } from "react-icons/fa";
import { useProducts } from "../../../providers/products/products-provider";

type EditProductProps = {
  showEdit?: any;
  handleCloseEdit?: any;
  id: number;
};

const EditProductPopup: FC<EditProductProps> = ({
  showEdit,
  handleCloseEdit,
  id,
}) => {

  let { editProduct, getAllProducts} = useProducts();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm();

  const showSuccessAlert = () => {
    Swal.fire({
      text: "ModifiedSuccessfully",
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: "Agree",
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };
  const modifyProduct = async (formvalues: any) => {
    var result = await editProduct(id, formvalues);
    if (result == "productUpdatedSeccussfully") {
      handleCloseEdit();
      getAllProducts();
      showSuccessAlert();
      reset();
    }
  };

  return (
    <>
      <Modal centered show={showEdit} onHide={handleCloseEdit} size="lg">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>

        <form onSubmit={handleSubmit(modifyProduct)}>
          <Modal.Body>
            <Row className="mb-4 d-flex align-items-center ">
              <Col xs={4}>
                <div className="mb-2 pt-2 pb-3 ">
                  <label
                    className="form-label px-2  fs-6 text-gray-700 "
                    htmlFor="Product name"
                  >
                    Product name
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend h-100">
                      <span className="input-group-text h-100">
                        <FaProductHunt />
                      </span>
                    </div>
                    <input
                      type="text"
                      id="Product name"
                      className="form-control form-control-solid"
                      placeholder="Product name"
                      {...register("name")}
                    />
                  </div>
                </div>
              </Col>
        
              <Col xs={4}>
                <div className="mb-2 pt-2 pb-3 ">
                  <label
                    className="form-label px-2  fs-6 text-gray-700 required"
                    htmlFor="Product description"
                  >
                    Product description
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend h-100">
                      <span className="input-group-text h-100">
                        <ImParagraphCenter />
                      </span>
                    </div>
                    <input
                      type="text"
                      id="Product description"
                      className="form-control form-control-solid"
                      placeholder="Product description"
                      {...register("description")}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="justify-content-center py-2">
            <div className="row">
              <div className="col-12 col-lg-7 mx-auto mb-10 mt-5">
                <div className=" w-100 mt-3 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center w-100">
                    <button
                      type="reset"
                      className="btn btn-secondary me-3 w-100"
                      onClick={handleCloseEdit}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="  btn btn-success me-5 w-100 "
                    >
                      <span>Edit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
export default EditProductPopup;
