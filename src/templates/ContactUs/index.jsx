import React from "react";

import TitleComponent from "../../components/TitleComponent";
import { TITLE } from "./constants";

const ContactUs = () => {
  return <TitleComponent title={TITLE.title} subtitle={TITLE.subtitle} />;
};

export default ContactUs;
