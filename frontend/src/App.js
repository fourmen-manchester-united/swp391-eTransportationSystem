import { BrowserRouter, Switch } from "react-router-dom";
import { mainRouter, adminRouter } from "./configs/router";
import RouterMainTemplate from "./templates/main";
import RouterAdminTemplate from "./templates/admin";
import "react-notifications/lib/notifications.css";

function App() {
  const renderMainRouter = () => {
    return mainRouter.map(({ path, exact, Component }) => {
      return (
        <RouterMainTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterMainTemplate>
      );
    });
  };
  const renderAdminRouter = () => {
    return adminRouter.map(({ path, exact, Component }) => {
      return (
        <RouterAdminTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterAdminTemplate>
      );
    });
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {renderAdminRouter()}
          {renderMainRouter()}
        </Switch>
        {/* <ModalContainer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
