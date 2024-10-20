import { EmailJSResponseStatus } from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    EmailJSResponseStatus.sendForm(
      "service_xywro9u",
      "template_ikkh90j",
      form.current,
      "STFhy9QWD0qbYdulw"
    ).then(
      (result) => {
        if (result) {
          toast.success("Your Message send Successfully!");
          e.target.reset();
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label className="block text-sm text-gray-500">Full Name</label>

          <input
            type="text"
            placeholder="John Doe"
            className="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm text-gray-500">Email Address</label>

          <input
            type="email"
            placeholder="john@example.com"
            className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          />

          <p className="mt-3 text-xs text-gray-400">
            We'll never share your email with anyone else.
          </p>
        </div>
        <div className="mt-4">
          <label className="block text-sm text-gray-500">Your Message</label>

          <textarea
            placeholder="Write your message here..."
            className="block  mt-2 w-full  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          ></textarea>
        </div>
        <button type="submit" className="px-5 py-1 bg-blue-600 mt-4 text-white rounded-md">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
