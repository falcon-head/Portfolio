import React from "react";
import "./ProjectCard.scss";
import { Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = (prop) => {
  return (
    <Card className="card-body">
      <a
        href={prop.project.link}
        className="card-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="card-top-tag">{prop.project.tool}</p>
        <h3 className="card-tag-heading">{prop.project.name}</h3>
        <p className="card-desc">{prop.project.desc}</p>
        <div className="card-stars">
          <FontAwesomeIcon className="card-star-icon" icon={faStar} />
          <span className="card-star-number">{prop.project.stars}</span>
        </div>
      </a>
    </Card>
  );
};

export default ProjectCard;
