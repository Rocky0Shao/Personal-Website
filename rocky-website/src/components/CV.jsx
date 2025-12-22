import resume from '../assets/resume.pdf';
const CV = () => {
  return (
    <div className="cv-container">
      <h1>Curriculum Vitae</h1>
      
      {/* The Embedded PDF */}
      <iframe 
        src={resume} 
        width="100%" 
        height="600px" 
        style={{ border: 'none', marginBottom: '20px' }}
        title="My CV"
      />

      {/* Fallback/Action Link */}
      <div style={{ textAlign: 'center' }}>
        <a href={resume} download="RockyShao_Resume.pdf">
          <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Download PDF
          </button>
        </a>
      </div>
    </div>
  );
};

export default CV;