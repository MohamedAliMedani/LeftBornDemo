import React, { FC,useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { ButtonGroup } from "react-bootstrap";
import EditProductPopup from "./popups/EditProductPopup";
import { DeleteProductPopup } from "./popups/DeleteProductPopup";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

interface IAction {
  id: number;
}

const ProductActions: FC<IAction> = ({ id }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  console.log("actions", id);
  return (
    <>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle
          split
          variant="none"
          className=" p-0 text-center"
          id="dropdown-custom-2"
        >
          <i className="bi bi-three-dots fs-2" style={{ color: "#7e8299" }}></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as="button">
            <a
              className="menu-link px-3 text-primary d-flex align-items-center"
              onClick={() => {
                setShowEditModal(true);
              }}
              style={{ textDecoration: "none" }}
            >
              <MdEdit className="mx-2"/>
              Edit
            </a>
          </Dropdown.Item>

          <Dropdown.Item as="button">
            <a
              onClick={() => setShowDelete(true)}
              className="menu-link px-3 text-danger d-flex align-items-center"
              style={{ textDecoration: "none" }}
            >
              <FaRegTrashAlt className="mx-2" />
              Delete
            </a>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {showDelete ? (
        <>
          {" "}
          <DeleteProductPopup
            showDelete={showDelete}
            id={id}
            handleCloseDelete={() => setShowDelete(false)}
          />
        </>
      ) : (
        <></>
      )}
      {showEditModal ? (
        <>
          {" "}
          <EditProductPopup
            showEdit={showEditModal}
            handleCloseEdit={() => {
              setShowEditModal(false);
            }}
            id={+id}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default ProductActions;
