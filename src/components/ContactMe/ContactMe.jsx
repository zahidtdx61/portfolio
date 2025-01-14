import { EmailOutlined, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
import { BsMessenger } from "react-icons/bs";
import Heading from "../Heading/Heading";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const ContactMe = () => {
  return (
    <div id="contact" className="max-w-screen-xl mx-auto p-4 overflow-hidden">
      <Heading headingText={"CONTACT ME"} />
      <div className="mt-8 flex flex-col md:flex-row gap-6 items-center md:items-start md:justify-between">
        <div className="flex gap-2 flex-col">
          <ContactCard
            icon={<EmailOutlined fontSize="large" />}
            text={"Email"}
            href={"mailto:zahidur.tdx61@gmail.com"}
            msg={"Send a message"}
          />
          <ContactCard
            icon={<GitHub fontSize="large" />}
            text={"GitHub"}
            href={"https://www.github.com/zahidtdx61"}
            msg={"Visit profile"}
          />
          <ContactCard
            icon={<LinkedIn fontSize="large" />}
            text={"LinkedIn"}
            href={"https://www.linkedin.com/in/m-zahidur-rahman/"}
            msg={"Send a message"}
          />
          <ContactCard
            icon={<BsMessenger size={35} />}
            text={"Messenger"}
            href={"https://m.me/zahidtdx61"}
            msg={"Send a message"}
          />
          <ContactCard
            icon={<WhatsApp fontSize="large" />}
            text={"WhatsApp"}
            href={
              "https://api.whatsapp.com/send/?phone=8801762382975&text&type=phone_number&app_absent=0"
            }
            msg={"Send a message"}
          />
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
