const ContactCard = ({ icon, text, href, msg }) => {
  return (
    <div className="w-[250px] bg-zinc-200 hover:bg-slate-100 py-3 rounded-md">
      <div className="flex items-center justify-center">{icon}</div>
      <div>
        <h1 className="text-center text-lg font-semibold mt-2">{text}</h1>
      </div>
      <div>
        <a
          target={"_blank"}
          href={href}
          rel="noreferrer"
          className="text-center block mt-2 text-lg font-semibold text-blue-500 hover:text-blue-700"
        >
          {msg}
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
