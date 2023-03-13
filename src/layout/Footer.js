const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>simongmesber@gmail.com</p>
        {/*<p>T: +1 (234) 567 80 98</p>*/}
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/simon-mesber">
            <span className="icon fab fa-linkedin" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/simongeronimo">
            <span className="icon fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/simongeronimo">
            <span className="icon fab fa-github" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
