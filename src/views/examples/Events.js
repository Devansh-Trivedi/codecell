import React, {useEffect, useRef} from "react";
import Lottie from "lottie-web";
import { Line } from "react-chartjs-2";
// import Footer from "components/Footer/Footer.js";


import {
  Button,
  Card,
  CardImg,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";


export default function Events() {
 
  const data = [
    {id:1,title:"Codertine 2020", paragraph:"RGIT Codecell along with CESS conducted an online inter-college coding competition - CODERTINE on Codechef, where students were provided with problem statements that will revolve around the concepts of Competitive Programming on 31st of October 2020. The event was conducted on CodeChef for a duration of 1.5hrs.  ", img:"https://res.cloudinary.com/devdemo/image/upload/v1631820570/codecell%20website%20gallery%20images/codertine_i3og4p.jpg"},
    {id:2,title:"Career Counselling - Webinar", paragraph:"RGIT Codecell in collaboration with CESS successfully organized a Career Counselling program with the leading Education Consultants of the Learning Edge. There were 2 professional speakers from learning edge, Mr.Pankaj Mehta and Mr.Manoj Kansara. The students gained knowledge about the Career opportunities after studies and All the doubts regarding the further studies were cleared by excellent consultants of Learning Edge. The session was an Hour long and was divided into 2 sub-sessions, the first 20-30 min was given to Admission, Exams, Visa process and the remaining was the QnA Session where any individual can get their doubts cleared. ", img:"https://res.cloudinary.com/devdemo/image/upload/v1631820570/codecell%20website%20gallery%20images/careercounselling_xt8rf3.jpg"},
    {id:3,title:"Google Cloud Platform(GCP) - Webinar", paragraph:"CodeCell in collaboration with Cess organised a webinar on Google Cloud Platform. This webinar helped students understand how to use and deploy infrastructure components such as networks,virtual machines, containers and application services on Google Cloud. The webinar was conducted on 4 October through google meet and was also streamed on youtube by code for cause. There were more than 80 students that participated in this session. The speakers for this were Mr. Anuj Garg and Mr. Akhil Joshi . Anuj is a Google Summer of Code Mentor under the JBoss community of Red Hat Middleware for Servers and IoT monitoring. They elaborated on many other components of GCP like setting and using Virtual Machines.  ", img:" https://res.cloudinary.com/devdemo/image/upload/v1631820570/codecell%20website%20gallery%20images/GCP_zupvux.jpg"},
    {id:4,title:"Introduction to Deep Learning - Reach & Teach", paragraph:"A workshop on Introduction to Deep learning, under the Reach and Teach program. It helped all the students to get familiar with what exactly deep learning is all about , covering from basics to the concepts required to start deep learning. The workshop took place on 29th September, 2020. From the importance of deep learning to the reason behind it to gaining importance in today's world , everything was covered in this session. Various problems were taken and explained in detail by them covering the logic and implementation.  ", img:"https://res.cloudinary.com/devdemo/image/upload/v1631820570/codecell%20website%20gallery%20images/deeplearning_jsnjrw.jpg"},
    {id:5,title:"Hackathon: RECURSION 2020", paragraph:" Recursion 2020 marked the first ever hackathon to be held in Rajiv Gandhi Institute of Technology. It was a 30 hour Hackathon held on the 13th and 14th of March, 2020 .The domains included- Web development, App development, Machine Learning, IoT and Blockchain. More than 80 teams registered for the event out of which 50 teams were shortlisted to participate. The judges for the event were Ms.Priyanka Pacheria, Mr. Harsh Vitra, Dr. Gautam Borkar and Dr. Dhananjay Dakhane. The hackathon saw many participants enthusiastically finding solutions to the problem statements presented to them. The event was a great learning experience for everyone. ", img:"https://res.cloudinary.com/devdemo/image/upload/v1631819700/codecell%20website%20gallery%20images/Hackathon-8-min_un6fql.jpg"},
    {id:6,title:"Python Workshop - Reach & Teach", paragraph:"This workshop covered the basics of python followed by topics such as data types, data sets, lists, tuples, and dictionaries. Participants got to learn about automation, web scraping and also got to test using python. The workshop helped the partipants get a good understanding of the topic.  ", img:"https://res.cloudinary.com/devdemo/image/upload/v1631819690/codecell%20website%20gallery%20images/Python_Workshop-7-min_skcbgq.jpg"},
    {id:7,title:"Django Workshop - Reach & Teach", paragraph:"The workshop emphasises on Django's utility in the real world. After the brief introduction about its origin, they helped the students create a virtual environment and proceeded to show various implementations of it. The workshop helped the students understand the reason behind Django being preferred for making a web application.", img:"https://res.cloudinary.com/devdemo/image/upload/v1631819690/codecell%20website%20gallery%20images/Python_Workshop-3-min_porlno.jpg"},
    {id:8,title:"Inauguration Rgit-Codecell", paragraph:"The inauguration of RGIT Codecell and CSI Chapter was done by our Principal Dr.Sanjay Bokade and Head of Department Dr.Satish Ket Sir on 12th February 2020. The Computer Engineering and IT department started the CSI Student Chapter with a total of 100 students. RGIT CodeCell is an initiative by the final year students of the Computer Engineering department (2019-20), a platform where students share their love for coding.", img:"https://res.cloudinary.com/devdemo/image/upload/v1631819680/codecell%20website%20gallery%20images/CodeCell_inauguration-6-min_bw3ila.jpg"},
  ]

  const renderList = data.map((item)=>{
    return(      
      <Row className="row-grid justify-content-between" key={item.id} >
                    <Col md="6">
                      <div className="pl-md-5">
                        <h1 style={{fontSize:"35px"}}>
                          {item.title}
                        </h1>
                        <p style={{fontSize:"15px", textAlign: 'justify', textJustify: 'inter-word'}}>
                          {item.paragraph}
                        </p>
                      
                        <br />
                        <a
                          className="font-weight-bold text-info mt-5"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          style={{fontSize:"18px"}}
                        >
                          Show all{" "}
                          <i className="tim-icons icon-minimal-right text-info" />
                        </a>
                      </div>
                    </Col>
                    
                    <Col lg="6" md="6">
                      <Card>
                        <CardImg top width="10%" src={item.img}/>
                      </Card>
                    </Col>
      </Row>
    )
  })   

  return (
    <>
      <ExamplesNavbar />

      <Container style={{marginTop:80}}>
      <h1 className="text-center" style={{fontSize:"35px", marginBottom:"40px", paddingTop:"30px"}}> Events conducted by us</h1>

                    
                {renderList}

        
      </Container>
      <Footer />
    </>
  );
}
