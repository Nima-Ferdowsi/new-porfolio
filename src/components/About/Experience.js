import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Experience() {
  return (
    <Row >
        {/* <h4 class="resume_title">Experience</h4> */}
      <ul class="resume_list" id="experience_list">
      <li>
    <div class="resume_item">
        <div class="resume_head">
            <div class="el_icon">
            </div>
            <h5 class="resume_item_title">
              CloudTree/Cloud4Agri
            </h5>
            <h5 class="resume_item_pos">
            Frontend developer | Ireland
           </h5>
  

        </div>
        <div class="resume_body">
        $hello
        </div>
    </div>
   </li>
   <li>
    <div class="resume_item">
        <div class="resume_head">
            <div class="el_icon">
            </div>
            <h5 class="resume_item_title">
                Yemek sepeti
            </h5>
            <h5 class="resume_item_pos">
            Frontend developer | Turkey
           </h5>
  

        </div>
        <div class="resume_body">
        $hello
        </div>
    </div>
   </li>
   <li>
    <div class="resume_item">
        <div class="resume_head">
            <div class="el_icon">
            </div>
            <h5 class="resume_item_title">
                SinanSoft
            </h5>
            <h5 class="resume_item_pos">
            Frontend developer | USA
           </h5>
  

        </div>
        <div class="resume_body">
        $hello
        </div>
    </div>
   </li>
                    </ul>
   
    </Row>
  );
}

export default Experience;
