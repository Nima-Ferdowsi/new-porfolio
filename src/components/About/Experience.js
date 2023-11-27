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
                SinanSoft
            </h5>
            <h5 class="resume_item_pos">
            Frontend developer | USA
           </h5>
  

        </div>
        <div class="resume_body">
        <p>I was a frontend developer in this company and coordinated in in diereprojects Like:</p>
        <ul>
          <li>
          <h3>.Sinansoft:</h3>Recreated the <a href="https://sinansoft.com/" target="_blank">website</a> of company with nextjs
          </li>
          <li>
          <h3>.Loanthem:</h3>Developed an app and website that revolutionized the borrowing and lending experience. Users can easily navigate, make agreements, and sup contracts for hassle-free financial transactions(APP:Loanthem)
          </li>
          <li>
          <h3>.Rally:</h3>Contributed significantly to an app that simplifies the process of bookinsports courts, hosting events, and connecting with players. Added user-friendfeatures to enhance the overall experience.
          </li>
          <li>
          <h3>.Univoip:</h3>Contributed in creating a user-friendly website for UniVoIP, a telecocompany. The site enables users to effortlessly utilize and create VoIP numberimproving communication options for individuals and businesses. <a href="https://univoip.com/" target="_blank">Website</a>
          </li>
        </ul>
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
        Frontend developer in this company that was a food delivery companyturkey I help in map sections real time process and app and payment section and etc <a href="https://www.yemeksepeti.com/" target="_blank">Website</a>
        </div>
    </div>
   </li>
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
        This was the first company that I worked with and I was added first as intern then  full time I help them in their website and projects and added to a game project that was created with html Css and javascript Game :wordmastermind
        <a href="https://cloudthree.com.au/" target="_blank">Company website</a>
        </div>
    </div>
   </li>
                    </ul>
   
    </Row>
  );
}

export default Experience;
