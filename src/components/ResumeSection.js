const ResumeSection = () => {
  return (
    <div className="section resume" id="section-history">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Experience</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box active">
                <div className="date">Jun 2022 - Present</div>
                <div className="name">Video Editor - SCAD Media</div>
                <div className="text">
                Create, edit, and manage visually compelling videos for various platforms, 
                collaborate with team members and clients, stay updated with industry trends, 
                and actively participate on website development.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">Jun 2022 - Dec 2022</div>
                <div className="name">Wordpress Developer - Janhost</div>
                <div className="text">
                Design, create, host, and maintain custom WordPress websites, 
                collaborate with clients to gather requirements and refine product design, 
                implement new features and modify existing ones, and provide technical 
                support for website functionality, hosting, and security.
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Education</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box">
                <div className="date">2022</div>
                <div className="name">Universidad Metropolitana - Caracas</div>
                <div className="text">
                  Bachelor of Science in Electrical Engineering
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2022</div>
                <div className="name">Universidad Metropolitana- Caracas</div>
                <div className="text">
                  Bachelor of Science in Systems Engineering
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeSection;
