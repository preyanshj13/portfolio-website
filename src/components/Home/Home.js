import React from 'react';
import './Home.css';
import myImage from '../../images/Self.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faHackerrank} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Home() {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  return (
    <div className="containers">
      <div className="col1">
        <img
          className="myImage mx-auto mt-5"
          src={myImage}
          alt="Hi, this is me!"
        />
      </div>
      <div className="col2">
        {/* <p className='hello'>HELLO WORLD! <br/> My name is Preyansh Jain <br/> and I'm a web developer</p> */}
        <h1 className="hello">HELLO WORLD!</h1>
        <h2 className="name">My name is Preyansh Jain</h2>
        <h2 className="web">and I'm a web developer</h2>

        <div className="socials">
          <a
            href="mailto:preyansh.jain13@gmail.com"
            target="_blank"
            rel="noreferrer"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            className="mailto"
          >
            <FontAwesomeIcon
              className="mail"
              icon={faEnvelope}
              size="3x"
              color="white"
            />
            {/* {isHovered && <span className="text">Mail</span>} */}
          </a>
          <a
            href="https://www.linkedin.com/in/preyansh-jain-a4b929a1/"
            target="_blank"
            rel="noreferrer"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon
              className="linkedin"
              icon={faLinkedin}
              size="3x"
              color="white"
            />
            {/* {isHovered && <span className="text">LinkedIn</span>} */}
          </a>
          <a
            href="https://github.com/preyanshj13"
            target="_blank"
            rel="noreferrer"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon
              className="github"
              icon={faGithub}
              size="3x"
              color="white"
            />
            {/* {isHovered && <span className="text">Github</span>} */}
          </a>
          <a
            href="https://www.hackerrank.com/profile/preyansh_jain13"
            target="_blank"
            rel="noreferrer"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon
              className="hackerrank"
              icon={faHackerrank}
              size="3x"
              color="white"
            />
            {/* {isHovered && <span className="text">Hackerrank</span>} */}
          </a>
          {/* <p className='hello'>hi</p> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
