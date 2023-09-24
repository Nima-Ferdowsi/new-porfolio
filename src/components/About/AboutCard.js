import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
          Hi there! I'm an experienced  <i>
                <b className="purple"> web and mobile developer  </b>
              </i> with nearly <b className="purple">five years</b>  of hands-on experience in different companies . I've also had the incredible journey of founding and running my own web agency. It's been an amazing ride where I've honed my skills and learned the ropes of entrepreneurship.

I'm truly passionate about what I do. I love crafting websites and mobile apps that not only work flawlessly but also engage and excite users. My mission is to make the digital world more user-friendly and visually appealing, while also delivering tangible results for businesses.

I'm excited to bring my skills and enthusiasm to your team, where I can contribute to creating exceptional web and mobile experiences that leave a lasting impression.
             
          </p>
 
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nima</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
