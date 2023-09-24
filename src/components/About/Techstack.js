import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiSass,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiRedux,
  SiExpress,
  SiReact,
  SiTypescript,
  SiMaterialdesign,
  SiCss3,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h2 className="tech-label">Html</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <h2 className="tech-label">Css</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons"> 
        <DiJavascript1 />
        <h2 className="tech-label">Javascript</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h2 className="tech-label">Typescript</h2>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h2 className="tech-label">React & React-native</h2>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h2 className="tech-label">Next js</h2>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h2 className="tech-label">Redux</h2>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h2 className="tech-label">Nodejs</h2>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h2 className="tech-label">Express</h2>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h2 className="tech-label">Mongo db</h2>

      </Col>
 
 
     
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <h2 className="tech-label">Bootstrap</h2>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialdesign />
        <h2 className="tech-label">Material Ui</h2>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
        <h2 className="tech-label">Sass/Scss</h2>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h2 className="tech-label">Git</h2>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h2 className="tech-label">Firebase</h2>

      </Col>
   
    </Row>
  );
}

export default Techstack;
