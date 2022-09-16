import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { formDataAC } from "../../components/store/actionCreators";
import CardComponent from "../../components/CardComponent";

import TitleComponent from "../../components/TitleComponent";

import { TITLE, CONTACT_US_DATA } from "./constants";

import "./styles.scss";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("Пользователь не найден");
  const [nameDirty, setNameDirty] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        if (e.target.value.toLowerCase() === "admin") {
          setNameError("");
        } else if (e.target.value.toLowerCase() === "user") {
          setNameError("");
        } else {
          setNameError("Пользователь не найден");
        }
        setNameDirty(true);
        break;
      default:
        setNameError();
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const numberHandler = (e) => {
    setNumber(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const showFormData = () => {
    const formData = {
      name,
      number,
      email,
      message,
    };

    dispatch(formDataAC(formData));
    localStorage.setItem("FormDataKey", JSON.stringify(formData));
    if (formData.name.toLowerCase() === "admin") {
      navigate("/data-from-store");
    } else if (formData.name.toLowerCase() === "user") {
      navigate("/data-from-store");
    } else setNameError("Пользователь не найден");
  };

  return (
    <div className="contacts">
      <div className="contacts__title">
        <TitleComponent title={TITLE.title} subtitle={TITLE.subtitle} />;
      </div>
      <div className="row d-flex justify-content: space-around">
        {CONTACT_US_DATA.map(({ id, image, title, subtitle }) => (
          <div key={id} className="col-4">
            <CardComponent image={image} title={title} subtitle={subtitle} />
          </div>
        ))}
      </div>
      <Form>
        {nameDirty && nameError && (
          <div style={{ color: "red" }}>{nameError}</div>
        )}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            onBlur={(e) => blurHandler(e)}
            name="name"
            defaultValue={name}
            onChange={(e) => nameHandler(e)}
            type="text"
            placeholder="YOUR NAME"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            defaultValue={email}
            onChange={(e) => emailHandler(e)}
            type="email"
            placeholder="YOUR EMAIL"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Control
            defaultValue={number}
            onChange={(e) => numberHandler(e)}
            type="number"
            placeholder="Phone Number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Control
            defaultValue={message}
            onChange={(e) => messageHandler(e)}
            type="text"
            placeholder="Write Message"
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button
            onClick={() => showFormData()}
            className="button__form mb-4"
            variant="primary"
            type="SEND"
          >
            SEND
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactUs;
