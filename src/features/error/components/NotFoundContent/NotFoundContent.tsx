import { Button } from "antd";
import { useTranslation } from "react-i18next";
import "./NotFoundContent.scss";

function NotFoundContent() {
  const { t } = useTranslation();

  return (
    <div className="not-found-wrapper">
      <p className="not-found-title">{t("error.notFound.title")}</p>
      <p>{t("error.notFound.content")}</p>
      <Button className="not-found-btn">
        {t("error.notFound.backToHome")}
      </Button>
    </div>
  );
}

export default NotFoundContent;
