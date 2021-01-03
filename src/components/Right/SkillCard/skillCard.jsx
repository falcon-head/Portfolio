import React from "react";
import "./skillCard.scss";
import { Card } from "antd";

const SkillCard = (prop) => {
  return (
    <div className="col-md-6">
      <div className="s-card-div" style={{ transform: prop.skill.card_style }}>
        <a
          href={prop.skill.link}
          className="skill-a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card bordered={false} className="s-card-body">
            <div className="s-icon">
              <i className={prop.skill.logo}></i>
            </div>
            <div className="card-content-holder">
              <h3 className="s-heading">{prop.skill.skill_name}</h3>
              <p className="s-desc">{prop.skill.desc}</p>
            </div>
            <p className="ss-tag">
              <span className="badge badge-pill badge-skill">
                Web Development
              </span>
            </p>
          </Card>
        </a>
      </div>
    </div>
  );
};

export default SkillCard;
