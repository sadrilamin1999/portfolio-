import SectionTitle from "./SectionTitle";
import { useRef } from "react";
import { useFromControlReveal } from "../hooks/gsap";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formControle1Ref = useRef(null);
  const formControle2Ref = useRef(null);
  const formControle3Ref = useRef(null);
  const formControle4Ref = useRef(null);

  const formRefs = [
    formControle1Ref,
    formControle2Ref,
    formControle3Ref,
    formControle4Ref,
  ];

  useFromControlReveal(formRefs);

  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        () => {
          console.log("Message sent");
        },
        () => {
          console.log("Message not sent");
        }
      );

    // reset
    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };
  return (
    <div className="contact container mx-auto mt-40" id="contact">
      <SectionTitle title={"Contact"} />

      <form
        onSubmit={sendEmail}
        className="mt-40 grid grid-cols-2 gap-20 overflow-hidden"
        ref={formRef}
      >
        <div className="from-control overflow-hidden" ref={formControle1Ref}>
          <input
            type="text"
            placeholder="Write your name"
            name="fullname"
            required
            className="fullname bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className="from-control overflow-hidden" ref={formControle2Ref}>
          <input
            type="email"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className="from-control overflow-hidden" ref={formControle3Ref}>
          <textarea
            placeholder="Write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className="message bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full resize-none"
          />
        </div>
        <div className="from-control overflow-hidden" ref={formControle4Ref}>
          <input
            type="submit"
            value="Send message"
            className="uppercase border py-16 px-28 rounded-full border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500 w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
