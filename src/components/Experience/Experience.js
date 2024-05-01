import React from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Experience() {
  return (
    <>
      <p className="heading">Experience </p>
      <div className="mainContainer"> 
      {/* <svg className="line" height="100%" width="100%">
          <polyline
            fill="none"
            stroke="black"
            strokeWidth="2"
            points="
              50,0
              50,100
              50,100
              50,200
              50,200
              50,300
              50,500
              50%,880
            "
          />
        </svg> */}
        <div className="point">
          <FontAwesomeIcon icon={faArrowLeft} color='white' size='xl' />
          {/* <FontAwesomeIcon
            className="poin"
            icon={faCircle}
            color="black"
            size="lg"
          /> */}
        </div>

        {/* <div>
          <svg className='svg' height="500" width="800">
            <line
              x1="720"
              y1="0"
              x2="720"
              y2="500"
              // style={{stroke:'red',strokeWidth:2}}
            />
          </svg>
        </div> */}

        <div className="paraL">
          {/* <div className="flex"> */}
          <h2 className="companyHead">Cognizant Technology Solutions</h2>
          <div className="details">
            <span className="role">Programmer Analyst</span>
            <span className="date">Aug 2023 - Present</span>
          </div>
          {/* <h2 className='companyDate'>Aug 2023 - Present</h2> */}
          {/* </div> */}
          <p className="para">
            Built an application functionality to ensure a desirable user
            experience across all platforms while employing HTML, CSS and
            JavaScript and leveraging React and Node.
          </p>
        </div>

        <div className="point">
          {/* <FontAwesomeIcon
            className="poin"
            icon={faCircle}
            color="black"
            size="lg"
          /> */}
          <FontAwesomeIcon icon={faArrowRight} color='white' size='xl' />
        </div>

        <div className="paraR">
          <h2 className="companyHead">Cognizant Technology Solutions</h2>
          <div className="details">
            <span className="role">Programmer Analyst Trainee</span>
            <span className="date">Aug 2022 - Aug 2023</span>
          </div>
          <p className="para">
            Developed an interactive layout app, using HTML, CSS and JavaScript
            to ensure high quality design and cross-browser compatibility.
          </p>
        </div>

        <div className="point">
          {/* <FontAwesomeIcon
            className="poin"
            icon={faCircle}
            color="black"
            size="lg"
          /> */}
          <FontAwesomeIcon icon={faArrowLeft} color='white' size='xl' />

        </div>

        <div className="paraL">
          <h2 className="companyHead">Cognizant Technology Solutions</h2>
          <div className="details">
            <span className="role">Intern</span>
            <span className="date">Feb 2023 - Aug 2023</span>
          </div>
          <p className="para">
            Understood basic concepts of ReactJS and implemented fundamentals of
            Front-end development.
          </p>
        </div>

        <div className="point">
          {/* <FontAwesomeIcon
            className="poin"
            icon={faCircle}
            color="black"
            size="lg"
          /> */}
          <FontAwesomeIcon icon={faArrowRight} color='white' size='xl' />
        </div>

        <div className="paraR">
          <h2 className="companyHead">Chegg Inc.</h2>
          <div className="details">
            <span className="role">Expert Subject Advisor</span>
            <span className="date">Sept 2020 - Aug 2022</span>
          </div>
          <p className="para">
            Provided solutions for various questions posted by people around the
            globe related to Electrical and Electronics.
          </p>
        </div>
      </div>
    </>
  );
}

export default Experience;
