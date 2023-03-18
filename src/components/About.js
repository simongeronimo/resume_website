const About = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="images/simon-mesber-resume-picture.jpg" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
            Hello! My name is Simon Geronimo Mesber. I am a skilled developer with a passion 
            for hardware and software innovation. My career goal is to use my expertise 
            to contribute to the development of new and groundbreaking technologies.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 23
              </li>
              <li>
                <strong>Residence:</strong> USA
              </li>
              <li>
                <strong>Freelance:</strong> Available
              </li>
              <li>
                <strong>Address:</strong> Gainesville, FL.
              </li>
              <li>
                <strong>E-mail:</strong> simongmesber@gmail.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="https://media.licdn.com/dms/document/C4E2DAQHe8VC26OkVUA/profile-treasury-document-pdf-analyzed/0/1678589037393?e=1679529600&v=beta&t=BYvyjlu2rIEwLXe5OnCU45ai42SOtFAsfYSoFrn5arU"
            target="_blank" rel="noopener noreferrer" className="btn hover-animated">
              <span className="circle" />
              <span className="lnk">Download CV</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
