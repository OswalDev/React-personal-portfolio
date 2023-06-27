import { Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icons/globe.svg';
import navIcon2 from '../assets/img/nav-icons/nav-icon7.svg';

export const ProjectCard = ({ title, description, imgUrl, links }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx object-fit">
        <img src={imgUrl} alt="ProjectImg" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="relative social-icon">
              {links.demo !== "" && (<a href={links.demo} target="_blank"><img src={navIcon1} alt="" /></a>)}
              {links.repository !== "" && (<a href={links.repository} target="_blank"><img src={navIcon2} alt="" /></a>)}
              </div>
        </div>
      </div>
    </Col>
  )
}
