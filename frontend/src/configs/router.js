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
import Profile from "../pages/main/home/profile";
import CarRegisterMode from "../pages/main/carRegisterMode";

export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/profile/:id",
    exact: true,
    Component: Profile,
  },
  {
    path: "/carRegisterMode",
    exact: true,
    Component: CarRegisterMode,
  },
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
export const signRouter = [
  {
    path: "/zxc",
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
];
export const adminRouter = [
  {
    path: "/admin",
    exact: true,
    Component: Dashboard,
  },
];
