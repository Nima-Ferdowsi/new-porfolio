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
                 with  <b className="purple">+6 years</b> experience in different companies and I'
also had the incredible journey of founding and running my own web
agency for a while(not doing it anymore) and been in participate in
variety of projects in that journey I also learned tho how manage a
project
my main stacks are: javascript ,react, next js ,react native,node js ,typescript etc...
              </i> 
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
