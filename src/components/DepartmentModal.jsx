import React from "react";
import chief from "../assets/img/chief.jpg";
import female from "../assets/img/female-doctor.jpg";
import male from "../assets/img/male-doctor.jpg";

const DepartmentModal = (props) => {
  const { departMentChief, doctors } = props;
  console.log(departMentChief, doctors);
  return (
    <div className="department-modal">
      <img src={chief} alt="" />
      <p>{departMentChief}</p>
      {doctors.map((doctor) => (
        <div>
          <img src={male} alt="" />
          <p>{doctor.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DepartmentModal;
