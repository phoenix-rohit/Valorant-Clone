function FooterIcon({ children, link }) {
  return (
    <li className="p-2 rounded-xl bg-neutral-800">
      <a target="_blank" href={link}>
        {children}
      </a>
    </li>
  );
}

export default FooterIcon;
