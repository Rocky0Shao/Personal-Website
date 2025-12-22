import CV from "../components/CV";
const About = () => {
  return (
    <div className="content-container">
      <h1>About Me</h1>
      <p>My name is Rocky Shao, a first year computer engineering student at the Ohio State University.<br></br>
         I am a passionate developer and enjoy working on various projects.
      </p>
      <h2>My Story</h2>
      <p>I grew up in Ithaca, NY, moved to China for 10 years, and returned to Ithaca for High School.<br></br>
         My family is in China and I'm planning to visit them during my summer break.<br></br>
      </p>
      <h2>My Skills</h2>
      <ul>
        <li>React in JavaScript</li>
        <li>Computer Vision in Python</li>
        <li>ROS in Python</li>
      </ul>
      <CV />
    </div>
  );
};

export default About;