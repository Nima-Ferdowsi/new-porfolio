import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Admin from "../../Assets/Projects/admin.png";
import Ecom from "../../Assets/Projects/ecommerce.png";
import Crypto from "../../Assets/Projects/crypto.png";
import Coffe from "../../Assets/Projects/coffee.png";
import Tesla from "../../Assets/Projects/tesla.png";
import Food from "../../Assets/Projects/food.png";
import Whatsapp from "../../Assets/Projects/whatsapp_image.jpg";
import Acorn from "../../Assets/Projects/acorn.png";
import Dentist from "../../Assets/Projects/Dentist.png";

function Projects() {
  const ecommdesc="its personal fullstack project created with react and node js that you can post your product have a login system and ect "
  const chatDesc="its a whats app clone project that have front end and backend created with node js and react its a real time chat system it means it works like a real chat system you can upload avatar and etc...."
  const teslaDesc="its a clone of tesla landing page created with react" 
  const cryptoDesc="its a personal frontend project that you can see current price of coins and see the charts in diffrent time frames and diffrent currencies you can add them to your watch list created with react js" 
 const  coffeShopDesc="Its a personal coffeshop static landing page created with plain html , css ,js "
 const  Admindesc="its admin panel of my eccomece project created by reactjs and bootstrap"
 const  Acrondesc="it was my freelance project that I had in my agency early stages that I did with react js and node js you can search properties and have price calculator etc.... "
 const  dentistdesc="it was my freelance project that I had in my agency early stages that I did with react js and node js you can set Appoinments and see avaible times"
 
 
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecom}
              isBlog={false}
              title="Ecommerce"
              description={ecommdesc}
              ghLink="https://github.com/Nima-Ferdowsi/Ecommerce-"
              demoLink="https://rise-ecommerce.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Whatsapp}
              isBlog={false}
              title="Whatsapp clone"
              description={chatDesc}
              ghLink="https://github.com/Nima-Ferdowsi/Whatsup-clone"
              demoLink="https://whatsappclon.netlify.app/login"
            />
          </Col>

          <Col md={4} className="Crypto Tracker">
            <ProjectCard
              imgPath={Crypto}
              isBlog={false}
              title="Crypto Tracker"
              description={cryptoDesc}
              ghLink="https://github.com/Nima-Ferdowsi/crypto_tracker"
              demoLink="https://rise-crypto-tracker.netlify.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Acorn}
              isBlog={false}
              title="Acorn Real estate"
              description={Acrondesc}
              demoLink="https://www.acorngroup.co.uk/              "
             />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dentist} 
              isBlog={false}
              title="Smile Grovecity"
              description={dentistdesc}
              demoLink="https://www.smilegrovecity.com/"
             />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Coffe}
              isBlog={false}
              title="Coffeshop landing"
              description={coffeShopDesc}
              ghLink="https://github.com/Nima-Ferdowsi/coffee_landing_page"
              demoLink="https://rise-coffee.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Admin}
              isBlog={false}
              title="Admin(Ecommerce)"
              description={Admindesc}
              ghLink="https://github.com/Nima-Ferdowsi/Ecommerce-"
              demoLink="https://rise-ecommerce.netlify.app/"
            />
          </Col>

        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tesla}
              isBlog={false}
              title="Tesla Clone"
              description={teslaDesc}
              ghLink="https://github.com/Nima-Ferdowsi/tesla_landing_page"
              demoLink="https://rise-tesla-clone.netlify.app/"
            />
          </Col>
   
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
