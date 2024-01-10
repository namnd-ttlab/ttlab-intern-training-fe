import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "@features/error/pages/NotFoundPage/NotFoundPage";
import ForbiddenPage from "@features/error/pages/ForbiddenPage/ForbiddenPage";
import { PageRouter } from "@common/constants";
import { ProductList } from "@features/product/pages/ProductList/ProductList";

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={PageRouter.PRODUCT} replace />}
        />
        <Route path={PageRouter.PRODUCT} element={<ProductList />} />

        <Route path={PageRouter.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={PageRouter.FORBIDDEN} element={<ForbiddenPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
