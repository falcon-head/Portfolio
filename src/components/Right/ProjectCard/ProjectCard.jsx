import React from "react";
import "./ProjectCard.scss";
import { Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = (prop) => {
  return (
    <Card className="p-card-body">
      <a href={prop.project.link} target="_blank" rel="noopener noreferrer">
        <p className="p-top-tag">{prop.project.tool}</p>
        <h2 className="p-tag-heading">{prop.project.name}</h2>
        <p className="p-desc">{prop.project.desc}</p>
        <div className="p-stars">
          <FontAwesomeIcon className="p-star-icon" icon={faStar} />
          <span className="p-star-number">{prop.project.stars}</span>
        </div>
      </a>
    </Card>
  );
};

export default ProjectCard;
