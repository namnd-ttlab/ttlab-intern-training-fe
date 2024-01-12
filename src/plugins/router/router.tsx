import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "@features/error/pages/NotFoundPage/NotFoundPage";
import ForbiddenPage from "@features/error/pages/ForbiddenPage/ForbiddenPage";
import { PageRouter } from "@common/constants";
import { ProductList } from "@features/product/pages/ProductList/ProductList";
import { MainLayout } from "@layouts/MainLayout/MainLayout";
import { LoginPage } from "@features/auth/pages/login/LoginPage";

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={PageRouter.LOGIN} replace />} />
        <Route path="" element={<MainLayout />}>
          <Route path={PageRouter.PRODUCT} element={<ProductList />} />
        </Route>
        <Route path={PageRouter.LOGIN} element={<LoginPage />} />

        <Route path={PageRouter.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={PageRouter.FORBIDDEN} element={<ForbiddenPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
