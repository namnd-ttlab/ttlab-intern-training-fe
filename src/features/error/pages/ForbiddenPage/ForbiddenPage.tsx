import { Layout } from "antd";
import ForbiddenContent from "../../components/ForbiddenContent/ForbiddenContent";
import ForbiddenImage from "../../components/ForbiddenImage/ForbiddenImage";
import "./ForbiddenPage.scss";

function ForbiddenPage() {
  return (
    <Layout className="forbidden-page">
      <Layout.Content>
        <div className="forbidden-page-wrapper">
          <div className="forbidden-page-content">
            <ForbiddenImage />
            <ForbiddenContent />
          </div>
        </div>
      </Layout.Content>
    </Layout>
  );
}

export default ForbiddenPage;
