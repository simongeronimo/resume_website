import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const DesignSkills = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Design Skills</div>
        </div>
        {/* skills items */}
        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">Web Design</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Illustrations</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Photoshop</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "95%" }}>
                  <span className="percent">95%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Graphic Design</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const LanguagesSkills = () => {
  useEffect(() => {
    dotResize();
    setTimeout(createSkillsDot, 1000);
  }, []);

  return (
    <div className="section skills" id="section-skills-lang">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Languages Skills</div>
        </div>
        {/* skills items */}
        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">English</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Spanish</div>
              <div className="progress">
                <div className="percentage" style={{ width: "100%" }}>
                  <span className="percent">100%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Italian</div>
              <div className="progress">
                <div className="percentage" style={{ width: "25%" }}>
                  <span className="percent">25%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CodingSkills = () => {
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Coding Skills</div>
        </div>
        {/* skills items */}
        <div className="skills circles content-box">
          <ul>
            <li>
              <div className="name">WordPress</div>
              <div className="progress p90">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage">
                  <span className="percent">90%</span>
                </div>
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Postgres / MYSQL</div>
              <div className="progress p80">
                {" "}
                {/* p75 = 75% circle fill color */}
                <div className="percentage">
                  <span className="percent">80%</span>
                </div>
                <span>80%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">React / JavaScript</div>
              <div className="progress p85">
                {" "}
                {/* p85 = 85% circle fill color */}
                <div className="percentage">
                  <span className="percent">85%</span>
                </div>
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">HTML / CSS</div>
              <div className="progress p95">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">95%</span>
                </div>
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Python</div>
              <div className="progress p70">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">70%</span>
                </div>
                <span>70%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Arduino</div>
              <div className="progress p95">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">95%</span>
                </div>
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">C/C++/C#</div>
              <div className="progress p95">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">95%</span>
                </div>
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Lua/Unity</div>
              <div className="progress p30">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">30%</span>
                </div>
                <span>30%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const KnowledgeSkills = () => {
  return (
    <div className="section skills" id="section-skills-know">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Knowledge</div>
        </div>
        {/* skills */}
        <div className="skills list content-box">
          <ul>
            <li>
              <div className="name">Website hosting</div>
            </li>
            <li>
              <div className="name">iOS and android apps</div>
            </li>
            <li>
              <div className="name">Github</div>
            </li>
            <li>
              <div className="name">Design for 3Dprint</div>
            </li>
            <li>
              <div className="name">PG Admin</div>
            </li>
            <li>
              <div className="name">NodeJS</div>
            </li>
            <li>
              <div className="name">Heroku</div>
            </li>
            <li>
              <div className="name">Search Engine Optimization</div>
            </li>
            <li>
              <div className="name">Firebase</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
