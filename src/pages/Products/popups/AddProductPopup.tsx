import React, { FC, Fragment, useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { FaProductHunt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { ImParagraphCenter } from "react-icons/im";
import { useForm } from "react-hook-form";
import { useProducts } from "../../../providers/products/products-provider";

type AddProductProps = {
  showAdd: boolean;
  handleCloseAdd: any;
};

export const AddProductPopup: FC<AddProductProps> = ({
  showAdd,
  handleCloseAdd,
}) => {
  let { addProduct, getAllProducts } = useProducts();

  const showSuccessAlert = () => {
    Swal.fire({
      text: "Added successfully",
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: "Agree",
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const postProduct = async (formvalues: any) => {
      await addProduct(formvalues);
      handleCloseAdd();
      getAllProducts();
      showSuccessAlert();
      reset();
  };
  return (
    <Fragment>
      <div className="modal-dialog ">
        <Modal centered show={showAdd} onHide={handleCloseAdd} size="lg">
          <Modal.Header closeButton>
            <Modal.Title> Add new Product </Modal.Title>
          </Modal.Header>

          <form onSubmit={handleSubmit(postProduct)}>
            <Modal.Body>
              <Row className="mb-4 d-flex align-items-center">
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
              <Row className="mb-4 d-flex align-items-center">
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
                        onClick={handleCloseAdd}
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        className="  btn btn-success me-5 w-100 "
                      >
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </Fragment>
  );
};

export default AddProductPopup;
