import RootRouter from "@plugins/router/router";
import { ConfigProvider } from "antd";
import "./App.css";
import theme from "./plugins/ant/themeConfig";
import { Provider } from "react-redux";
import store from "@plugins/redux-toolkit/store";
import './plugins/i18next/i18n';

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={theme} autoInsertSpaceInButton={false}>
        <RootRouter />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
