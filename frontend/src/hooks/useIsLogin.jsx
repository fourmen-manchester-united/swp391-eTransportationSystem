import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin } from "../store/actions/user.action";

export function useIsLogin() {
  const dispatch = useDispatch();
  const userLogin = localStorage.getItem("userLogin");
  const id = userLogin ? JSON.parse(userLogin).id : "";
  useEffect(
    () => {
      userLogin && dispatch(getAdmin(id));
    },
    // eslint-disable-next-line
    [id]
  );
  const { user } = useSelector((state) => state.user);
  const { admin } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.common);
  const role =
    admin == null
      ? 2
      : admin.roles.find((role) => {
          return `${role}`;
        });
  const adminRole = admin == null ? 2 : role.id;
  return {
    user,
    isLogin: user,
    loading,
    isLoginToAdmin: adminRole,
  };
}
