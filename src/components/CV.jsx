import './CV.css';

const CV = () => {
  const resumePath = '/resume.pdf';

  return (
    <div className="cv-container">
      <iframe
        src={resumePath}
        className="cv-iframe"
        title="RockyShao_Resume"
      />

      <div className="cv-action-area">
        <a href={resumePath} download="RockyShao_Resume.pdf">
          <button className="cv-download-btn">
            Download PDF
          </button>
        </a>
      </div>
    </div>
  );
};

export default CV;
