import { useSelector } from "react-redux";

export function useIsLogin() {
  const { user } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.common);

  return {
    user,
    loading,
  };
}
