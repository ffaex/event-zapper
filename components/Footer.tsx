const Footer = () => {
  return (
    <>
      <label className="flex flex-col absolute left-2 bottom-9 max-w-[33%] items-center text-white">
        <a
          href="https://github.com/owen1917/event-zapper#readme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>⚙️ Relays</button>
        </a>
      </label>
      <label className="flex flex-col absolute left-2 bottom-2 max-w-[33%] items-center text-white">
        <a
          href="https://github.com/owen1917/event-zapper#readme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>💡 Help</button>
        </a>
      </label>
    </>
  );
};

export default Footer;
