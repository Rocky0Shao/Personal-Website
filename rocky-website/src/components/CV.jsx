import './CV.css'; // Import the CSS file
import resume from '../assets/resume.pdf';

const CV = () => {
  return (
    <div className="cv-container">      
      <iframe 
        src={resume} 
        className="cv-iframe"
        title="RockyShao_Resume"
      />

      <div className="cv-action-area">
        <a href={resume} download="RockyShao_Resume.pdf">
          <button className="cv-download-btn">
            Download PDF
          </button>
        </a>
      </div>
    </div>
  );
};

export default CV;