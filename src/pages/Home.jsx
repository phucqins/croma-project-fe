import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Select from "react-select";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: "",
        age: "",
        image: "",
        patientLevel: "",
        gender: null,
      },
      formErrors: {
        name: null,
        age: null,
        image: "",
        patientLevel: "",
        gender: null,
      },
    };
  }

  validateNumber = (evt) => {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === "paste") {
      var key = theEvent.clipboardData.getData("text/plain");
    } else {
      // Handle key press
      key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const { form, formErrors } = this.state;
    let formObj = {};

    formObj = {
      ...form,
      [name]: value,
    };

    console.log(formObj);

    this.setState({ form: formObj }, () => {
      if (!Object.keys(formErrors).includes(name)) return;
      let formErrorsObj = {};

      const errorMsg = this.validateField(name, value);
      formErrorsObj = { ...formErrors, [name]: errorMsg };
      console.log(formErrorsObj);
      this.setState({ formErrors: formErrorsObj });
    });
  };

  validateField = (name, value) => {
    let errorMsg = null;
    switch (name) {
      case "name":
        if (!value) errorMsg = "Hãy nhập tên của bạn";
        break;
      case "age":
        if (!value) errorMsg = "Đây là mục bắt buộc";
        console.log(errorMsg);
        break;
      case "patientLevel":
        if (!value) errorMsg = "Đây là mục bắt buộc";
        console.log(errorMsg);
        break;

      default:
        break;
    }
    return errorMsg;
  };

  validateForm = (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map((x) => {
      const msg = validateFunc(x, form[x]);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  };

  handleSubmit = () => {
    const { form, formErrors } = this.state;
    const errorObj = this.validateForm(form, formErrors, this.validateField);
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ formErrors: { ...formErrors, ...errorObj } });
      return false;
    }
    console.log("Data: ", form);
  };

  render() {
    const { form, formErrors } = this.state;
    return (
      <div className="signup-form">
        <div className="header-bar"></div>
        <div className="signup-form__box">
          <div className="container-box">
            <p className="signup-form__box__profile-picture">BN</p>
            <button className="btn btn-primary">
              <Link className="active" to="/login">
                Đăng nhập
              </Link>
            </button>
          </div>
          <h3 className="signup-form__box__title">Đăng ký</h3>
          <p>
            Sau khi đăng ký xong bạn sẽ được xếp vào hàng chờ tuỳ theo mức độ
            bệnh
          </p>
          <div className="row">
            <div className="col-md-6">
              <div className="signup-form__box__group">
                <input
                  placeholder="Tên"
                  className="signup-form__box__control"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={this.handleChange}
                  onBlur={this.handleChange}
                />
                {formErrors.name && (
                  <span className="err">{formErrors.name}</span>
                )}
              </div>
              <div className="signup-form__box__group">
                <input
                  placeholder="Tuổi"
                  className="signup-form__box__control"
                  type="number"
                  name="age"
                  value={form.age}
                  onChange={this.handleChange}
                  onBlur={this.handleChange}
                />
                {formErrors.age && (
                  <span className="err">{formErrors.age}</span>
                )}
              </div>

              <div className="signup-form__box__group">
                <select
                  placeholder="Mức độ nghiêm trọng"
                  type="select"
                  name="patientLevel"
                  value={form.patientLevel}
                  onChange={this.handleChange}
                  onBlur={this.handleChange}
                  className="signup-form__box__control"
                >
                  <option default value="" disabled hidden>
                    Mức độ nghiêm trọng
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                {formErrors.patientLevel && (
                  <span className="err">{formErrors.patientLevel}</span>
                )}  
              </div>

              <div>
                <input
                  id="picture"
                  placeholder="Hình ảnh"
                  type="file"
                  name="image"
                  value={form.image}
                  onChange={this.handleChange}
                  onBlur={this.handleChange}
                />
                <label htmlFor="picture">Thêm hình ảnh</label>
                {formErrors.password && (
                  <span className="err">{formErrors.image}</span>
                )}
              </div>
            </div>
          </div>

          <div className="signup-form__box__group">
            <input
              type="button"
              className="btn btn-primary"
              value="Đăng ký"
              onClick={this.handleSubmit}
            />
          </div>
          <div className="signup-form__box__info">
            <div className="signup-form__box__info__question-mark">?</div>
            <p>
              Sau khi đăng ký thành công và được chẩn đoán bạn có thể truy cập
              lại để xem tình trạng bệnh lý và thêm các thông tin khác như giới
              tính, tiền sử bệnh lý cũ, số điện thoại liên hệ, số thẻ BHYT.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
