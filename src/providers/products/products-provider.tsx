import { FC, ReactNode, createContext, useContext, useState } from "react";
import { ProductModel } from "../../models/Products/product-model";
import Swal from "sweetalert2";
import axios from "axios";
import { ResponseModel } from "../../shared/response-model";
import { productUrl } from "../../url/url";

export type contextProbType = {
  products: ProductModel[];
  getAllProducts: () => Promise<string>;
  addProduct: (value: ProductModel) => Promise<string>;
  editProduct: (id: number, value: ProductModel) => Promise<string>;
  deleteProduct: (id: number) => Promise<string>;
};
const contextProb: contextProbType = {
  products: [new ProductModel(0, "","")],
  getAllProducts: () => Promise.resolve(""),
  addProduct: (value: ProductModel) => {
    return Promise.resolve("");
  },
  editProduct: (id: number, value: ProductModel) => {
    return Promise.resolve("");
  },
  deleteProduct: (id: number) => {
    return Promise.resolve("");
  },
};

export const ProductsContext = createContext<contextProbType>(contextProb);
export const useProducts = () => useContext(ProductsContext);

const ProductsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<ProductModel[]>([
    new ProductModel(0, "",""),
  ]);

  const getAllProducts = async (): Promise<string> => {
    try {
      const { data } = await axios.get<ResponseModel>(productUrl +"GetProducts");
      setProducts(data.result as ProductModel[]);
      return data.message;
    } catch (err: any) {
      let errorAlert = () => {
        Swal.fire({
          title: err?.message,
          text: "Alert successful",
          icon: "error",
          confirmButtonText: "OK",
        });
      };
      errorAlert();
      return "anErrorOccurredPleaseContactSystemAdministrator";
    }
  };

  const addProduct = async (value: ProductModel): Promise<string> => {
    try {
      const { data } = await axios.post<ResponseModel>(productUrl+`PostProduct`, value);
      return data.message;
    } catch (err: any) {
      let errorAlert = () => {
        Swal.fire({
          title: err?.message,
          text: "Alert successful",
          icon: "error",
          confirmButtonText: "OK",
        });
      };
      errorAlert();
      return "anErrorOccurredPleaseContactSystemAdministrator";
    }
  };

  const editProduct = async (
    id: number,
    value: ProductModel
  ): Promise<string> => {
    try {
      const { data } = await axios.put<ResponseModel>(productUrl+
        `PutProduct/${id}`,
        value
      );
      getAllProducts();
      return data.message;
    } catch (err: any) {
      let errorAlert = () => {
        Swal.fire({
          title: err?.message,
          text: "Alert successful",
          icon: "error",
          confirmButtonText: "OK",
        });
      };
      errorAlert();
      return "anErrorOccurredPleaseContactSystemAdministrator";
    }
  };
  const deleteProduct = async (id: number): Promise<string> => {
    try {
      const { data } = await axios.delete<ResponseModel>(productUrl+`DeleteProduct/${id}`);
      getAllProducts();
      return data.message;
    } catch (err: any) {
      let errorAlert = () => {
        Swal.fire({
          title: err?.message,
          text: "Alert successful",
          icon: "error",
          confirmButtonText: "OK",
        });
      };
      errorAlert();
      return "anErrorOccurredPleaseContactSystemAdministrator";
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        getAllProducts,
        addProduct,
        editProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
