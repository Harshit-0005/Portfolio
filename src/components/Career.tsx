import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Electronics and Communication Engineering</h4>
                <h5>Pranveer Singh Institute of Technology, Kanpur</h5>
              </div>
              <h3>Aug 2023 - May 2027</h3>
            </div>
            <p>
              Pursuing B.Tech with an aggregate of 73%. Actively learning data science and software development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Visualization Intern</h4>
                <h5>Infosys Springboard</h5>
              </div>
              <h3>Mar 2026 - May 2026</h3>
            </div>
            <p>
              Completed virtual internship in data visualization. Worked with MS Excel and Python libraries (Matplotlib, Pandas, NumPy). Performed data cleaning and preprocessing before visualization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Developer</h4>
                <h5>Fiverr</h5>
              </div>
              <h3>Jul 2025 - Jan 2026</h3>
            </div>
            <p>
              Developed websites and web applications for clients using React, JavaScript, Firebase, and CSS. Worked with clients to gather requirements and deliver projects on time while improving website functionality and performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
