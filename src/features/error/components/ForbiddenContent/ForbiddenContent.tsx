import { Button } from "antd";
import { useTranslation } from "react-i18next";
import "./ForbiddenContent.scss";

function ForbiddenContent() {
  const { t } = useTranslation();

  return (
    <div className="forbidden-content-wrapper">
      <p className="forbidden-content-title">{t("error.forbidden.title")}</p>
      <p>{t("error.forbidden.content")}</p>
      <Button className="forbidden-content-btn">
        {t("error.forbidden.backToHome")}
      </Button>
    </div>
  );
}

export default ForbiddenContent;
