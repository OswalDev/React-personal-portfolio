import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx object-fit">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <i class="bi bi-alarm-fill text-warning" style={{ fontSize: 50 }}></i>
          </div>
        </div>
      </div>
    </Col>
  )
}
