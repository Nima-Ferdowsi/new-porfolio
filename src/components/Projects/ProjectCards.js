import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
  const cardLabelBg=props.cardLabelBg||'bg-info '
  return (
    <Card className="project-card-view position-relative">
      {/* Label for the card */}
      {props.cardLabel && (
        <span style={{width:'30%'}} className={`badge ${cardLabelBg} end-0 m-2`}>
          {props.cardLabel}
        </span>
      )}
      
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="text-justify">
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            className="ms-2"
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;