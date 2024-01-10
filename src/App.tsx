import RootRouter from "@plugins/router/router";
import { ConfigProvider } from "antd";
import "./App.css";
import theme from "./plugins/ant/themeConfig";

function App() {
  return (
    <ConfigProvider theme={theme} autoInsertSpaceInButton={false}>
      <RootRouter />
    </ConfigProvider>
  );
}

export default App;
