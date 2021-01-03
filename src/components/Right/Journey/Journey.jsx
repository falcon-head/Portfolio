import React from "react";
import { Card } from "antd";
import "./Journey.scss";

const Journey = (prop) => {
  return (
    <Card className="journey-card-body">
      <div className="timeline">
        <ul className="timeline-ul">
          <li className="timeline-li">
            <div className="timeline-content">
              <span className="badge badge-pill timeline-badge">{prop.resume.dateRange}</span>
              <h4 className="timeline-heading">{prop.resume.company}</h4>
              <h6 className="timeline-subheading">{prop.resume.role}</h6>
              <p className="timeline-desc">
                {prop.resume.desc}
              </p>
              <div className="timeline-points">
                <ul className="timeline-points-ul">
                  <li className="timeline-points-li">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa fuga laborum
                  </li>
                  <li className="timeline-points-li">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa fuga laborum
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="timeline-li">
            <div className="timeline-content">
              <span className="badge badge-pill timeline-badge">2016-2019</span>
              <h4 className="timeline-heading">Testing</h4>
              <h6 className="timeline-subheading">Business Analyst</h6>
              <p className="timeline-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                laboriosam voluptatum sapiente harum ad fuga tenetur eaque.
                Error in officia explicabo dicta, quia expedita culpa autem
                cupiditate iure sit iste!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Journey;
