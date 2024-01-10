import NotFoundImage from "../../components/NotFoundImage/NotFoundImage";
import { Layout } from "antd";
import "./NotFoundPage.scss";
import NotFoundContent from "../../components/NotFoundContent/NotFoundContent";

function NotFoundPage() {
  return (
    <Layout className="not-found-page">
      <Layout.Content>
        <div className="not-found-page-wrapper">
          <div className="not-found-page-content">
            <NotFoundImage />
            <NotFoundContent />
          </div>
        </div>
      </Layout.Content>
    </Layout>
  );
}

export default NotFoundPage;
