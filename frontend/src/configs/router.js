import Err from "../pages/main/err";
import Home from "../pages/main/home";
// import ForgotPassword from "../pages/main/forgotPassword";
import Login from "../pages/main/login";
// import Profile from "../pages/main/profile";
// import ResetPassword from "../pages/main/resetPassword";
// import SearchPage from "../pages/main/search";
// import SettingProfile from "../pages/main/settingProfile";
import Dashboard from "../pages/admin/Dashboard";
import Register from "../pages/main/register";

export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/login",
    exact: false,
    Component: Login,
  },
  {
    path: "/register",
    exact: false,
    Component: Register,
  },
  //   {
  //     path: "/profile/:username",
  //     exact: true,
  //     Component: Profile,
  //   },
  //   {
  //     path: "/search",
  //     exact: true,
  //     Component: SearchPage,
  //   },
  //   {
  //     path: "/setting",
  //     exact: true,
  //     Component: SettingProfile,
  //   },
  {
    Component: Err,
  },
];
export const adminRouter = [
  {
    path: "/admin",
    exact: true,
    Component: Dashboard,
  },
];
