import React from "react";
import "./Info.scss";
import {
  faGithub,
  faLinkedin,
  faGoogle,
  faInstagramSquare,
  faTwitter,
  faSpotify,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileImage from "./../../assets/avatar.png";

const Info = (props) => {


  return (
    <div className="container h-100">
      <div className="row h-100">
        <div className="col h-100 hero-holder">
          <h1 className="hero-heading">
            Hello, I'm <br/>
            {props.intro ? props.intro.heading : "Loading"}
          </h1>
          <p className="hero-desc">
            {props.intro ? props.intro.desc : "Loading"}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="nav-ul">
            <li>01 Projects</li>
            <li>02 Skills</li>
            <li>03 Resumes</li>
          </ul>
        </div>
      </div>
      <div className="hero-social">
        <div className="content-holder">
          <img src={ProfileImage} alt="ProfilePic" className="social-avatar" />
          <span className="social-span">
            <ul className="social-ul">
              <li className="social-li">
                <a
                  className="social-a"
                  target="_blank"
                  href={props.social ? props.social.github : "#"}
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="social-li">
                <a
                  className="social-a"
                  target="_blank"
                  href={props.social ? props.social.linkedIn : "#"}
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="social-li">
                <a
                  className="social-a"
                  target="_blank"
                  href={
                    props.social
                      ? props.social.email
                        ? props.social.email
                        : "#"
                      : "#"
                  }
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
              </li>
              <li className="social-li">
                <a
                  className="social-a"
                  target="_blank"
                  href={props.social ? props.social.instagram : "#"}
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
              </li>
              <li className="social-li">
                <a
                  className="social-a"
                  target="_blank"
                  href={props.social ? props.social.twitter : "#"}
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="social-li">
                <a
                  className="social-a"
                  target="_blank"
                  href={props.social ? props.social.spotify : "#"}
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faSpotify} />
                </a>
              </li>
              <li className="social-li">
                <a
                  className="social-a"
                  target="_blank"
                  href={props.social ? props.social.soundcloud : "#"}
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faSoundcloud} />
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
