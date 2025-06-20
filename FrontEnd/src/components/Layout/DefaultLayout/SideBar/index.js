import styles from "./SideBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCartShopping,
  faShrimp,
  faFishFins,
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'

function SideBar() {
  const [types, setTypes] = useState([]);
  const navigate = useNavigate();

  const handleForward = (id) => {
    navigate(`/seafood/${id}`);
    window.scroll(0,0)
  };
  useEffect(() => {
    axios.get("http://localhost:8000/restaurant/typeSeafood")
    .then(res => {
      const types = res.data
      setTypes(types)
    })
    .catch(err => console.log(err))
  }, []); 
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarFixed}>
        <ul className={styles.menu}>
          <li>
            <h3 onClick={() => navigate("/")}>
              <FontAwesomeIcon className={styles.icon} icon={faHouse} />
              Trang chủ
            </h3>
          </li>
          <li>
            <h3 onClick={() => navigate("/cart")}>
              <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
              Giỏ hàng
            </h3>
          </li>
          <li>
            <FontAwesomeIcon />
          </li>
        </ul>
        <hr className={styles.hr} />
        <div className={styles.listseafood}>
          <p>Hải sản Việt Nam</p>
          <ul>
            {types.map((t) => {
              return (
                <li key={t?.seafoodType}>
                  <span onClick={() => handleForward(t?.seafoodType)}>
                    <FontAwesomeIcon
                      className={styles.seafoodicon}
                      icon={faShrimp}
                    />
                    Shop {t?.seafoodName}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className={styles.hr} />
        <div className={styles.contact}>
          <p>Contact</p>
          <ul>
            <li>
              <span>
                <FontAwesomeIcon
                  className={styles.iconcontact}
                  icon={faPhone}
                />
                +84 876 543 21
              </span>
            </li>
            <li>
              <a className={styles.address} href="#">
                <FontAwesomeIcon
                  className={styles.iconcontact}
                  icon={faLocationDot}
                />
               Việt Nam
              </a>
            </li>
            <li>
              <span>
                <FontAwesomeIcon
                  className={styles.iconcontact}
                  icon={faEnvelope}
                />
                Nam Nguyễn
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
