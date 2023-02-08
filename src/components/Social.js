import { useRef } from "react";

const data = [
  { id: 1, title: "Facebook", url: "https://www.facebook.com/sadrilamin1999/" },
  { id: 2, title: "GitHub", url: "https://github.com/SadrilAmin1999" },
  {
    id: 3,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/saadrilamin1999/",
  },
];

const Social = () => {
  const socialRef = useRef(null);
  return (
    <div
      className="socials flex gap-5 uppercase text-sm fixed left-10 top-[75%] -rotate-90 origin-left text-white/30 bg-black/30 p-5 backdrop-blur-xl z-50"
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noreferrer"
          key={social.id}
          className="hover:text-cyan-400 duration-500"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Social;
