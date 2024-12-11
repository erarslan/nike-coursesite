const Link = ({ data }) => {
  const { title, href, index } = data;

  return (
    <div className="link">
      <a className="no-underline text-white font-light" href={href}>
        {title}
      </a>
    </div>
  );
};

export default Link;
