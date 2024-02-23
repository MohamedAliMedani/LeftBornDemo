import React, { Fragment, useEffect, useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import ProductsProvider, {
  useProducts,
} from "../../providers/products/products-provider";
import ProductActions from "./ProductActions";
import AddProductPopup from "./popups/AddProductPopup";
import { ProductModel } from "../../models/Products/product-model";

interface Iprop {}

const Products: React.FC<Iprop> = () => {
  let [showAdd, setShowAdd] = useState<boolean>(false);
  let { products, getAllProducts } = useProducts();
  
  useEffect(() => {
    (async () => {
      await getAllProducts();
    })();
  }, []);

  return (
    <Fragment>
      {/* <ErrorBoundary FallbackComponent={MyFallbackComponent}> */}
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              {Object.keys(products[0])?.map((item, index) => {
                if (item == "rating") {
                  return;
                }
                return (
                  <Fragment key={index}>
                    <td
                      style={{ maxWidth: "150px" }}
                      className="bg-primary fs-4 text-center text-white"
                    >
                      {item}
                    </td>
                  </Fragment>
                );
              })}
              <td
                style={{ width: "50px" }}
                className="bg-primary fs-4 text-center text-white w-200px"
              >
                actions
              </td>
            </tr>
          </thead>
          <tbody>
            {products?.map((item: ProductModel) => {
              return (
                <Fragment key={item?.id}>
                  <tr>
                    <td className="text-center">{item?.id}</td>
                    <td className="text-center">{item?.name}</td>
                    <td className="text-center">{item?.description}</td>
                    <td className="text-center">
                    </td>
                    <td className="text-center">
                      <ProductActions id={item?.id} />
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </Table>
        <Row className="d-flex align-items-center justify-content-center my-3">
          {" "}
          <Button
            className="btn-lg btn-success w-25"
            onClick={() => {
              setShowAdd(true);
            }}
          >
            Add new Product
          </Button>
        </Row>
        <div className="modal fade" aria-hidden="true">
          <AddProductPopup
            showAdd={showAdd}
            handleCloseAdd={() => {
              setShowAdd(false);
            }}
          />
        </div>
      {/* </ErrorBoundary> */}
    </Fragment>
  );
};

export default () => {
  return (
    <ProductsProvider>
      <Products />
    </ProductsProvider>
  );
};
