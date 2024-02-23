import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Error404 from "../pages/Error/Error404";
import { ErrorBoundary } from "react-error-boundary";

const AppRoutes = () => {
  function MyFallbackComponent({ error, resetErrorBoundary }: any) {
    console.log("error", error);
    return (
      <div
        role="alert"
        className="d-flex align-items-center justify-content-center"
      >
        <h1>Something went wrong:</h1>
        <h1>{error.message}</h1>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/" element={<Home />} />

          <Route
            path="/products"
            element={
              <ErrorBoundary FallbackComponent={MyFallbackComponent}>
                <Products />
              </ErrorBoundary>
            }
          />
          <Route path="/error/404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/error/404" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
