import { useRef } from "react";
import React from "react";
import { getUser, removeUserSession } from "../Utils/Common";
import trauma from "../assets/img/trauma.png";
import respiratory from "../assets/img/respiratory.png";
import cardiology from "../assets/img/cardiology.png";
import { Link } from "react-router-dom";
import DepartmentModal from "./DepartmentModal";

function Admin(props) {
  // const user = getUser();

  const FAKE_DATA = [
    {
      id: "trauma",
      chief: "Minh",
      gender: "Male",
      doctors: [
        { name: "Vu", gender: "Female" },
        { name: "Vu", gender: "Male" },
        { name: "Vu", gender: "Female" },
      ],
    },
    {
      id: "respiratory",
      chief: "Minh",
      gender: "Male",
      doctors: [
        { name: "Vu", gender: "Female" },
        { name: "Vu", gender: "Male" },
        { name: "Vu", gender: "Female" },
      ],
    },
    {
      id: "cardiology",
      chief: "Minh",
      gender: "Male",
      doctors: [
        { name: "Vu", gender: "Female" },
        { name: "Vu", gender: "Male" },
        { name: "Vu", gender: "Female" },
      ],
    },
  ];

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  setTimeout(() => {
    handleLogout();
  }, 60 * 30 * 1000);

  const menuRight = useRef(null);
  const menuToggle = () => {
    menuRight.current.classList.toggle("active");
  };

  return (
    <div className="admin-page">
      <div className="header-bar">
        <button className="btn btn-primary">Bác sĩ</button>
        <button className="btn btn-primary">Tiếp tân</button>
        <button className="btn btn-primary">Phòng bệnh</button>
        <button onClick={menuToggle} className="btn btn-primary">
          <i className="bx bx-menu"></i>
        </button>
        <ul className="admin-page__toggle-menu" ref={menuRight}>
          <li>
            <button className="btn btn-primary" onClick={handleLogout}>
              Đăng xuất
            </button>
          </li>
          <li>
            <button className="btn btn-primary">
              <Link to="/">Tạo tài khoản</Link>
            </button>
          </li>
        </ul>
      </div>

      <div className="admin-page__container">
        <p className="signup-form__box__profile-picture">AD</p>
        <h2 className="admin-page__container__title">Giám đốc</h2>
        <div className="admin-page__container__hospital-department">
          <div className="admin-page__container__hospital-department__child">
            <img src={trauma} alt="" />
            <p>Khoa chấn thương</p>
          </div>
          <div className="admin-page__container__hospital-department__child">
            <img src={respiratory} alt="" />
            <p>Khoa hô hấp</p>
          </div>
          <div className="admin-page__container__hospital-department__child">
            <img src={cardiology} alt="" />
            <p>Khoa tim mạch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
