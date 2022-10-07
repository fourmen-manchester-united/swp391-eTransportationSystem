import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logos/logo-black-3.png";
import styles from "./headerAmin.module.css";
export default function HeaderAdmin({ user }) {
  const [state, setState] = useState({});
  useEffect(
    () => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/account/${user.id}`)
        .then((res) => {
          const persons = res.data;
          setState(persons);
        })
        .catch((error) => console.log(error));
    },
    // eslint-disable-next-line
    []
  );
  const src =
    state.profileImageUrl == null
      ? "https://wrld-se-prod.b-cdn.net/images/user-empty.svg"
      : state.profileImageUrl;
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <div>
            <Link to="/">
              <img alt="logo" src={logo} />
            </Link>
          </div>
        </div>
        <div className={styles.menu}></div>
        <div className={styles.profile}>
          <div className={styles.profileList}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link to={`/profile/${user.username}`}>
                <div className={styles.profileIcon}>
                  <img className="w_km" alt="profile" src={src} />
                </div>
                <div>
                  <span>{user.username}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
