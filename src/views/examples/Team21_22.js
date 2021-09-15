import React, {useEffect, useRef} from "react";
import Lottie from "lottie-web";
import { Line } from "react-chartjs-2";
import '../../Team.css'

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


export default function Team21_22() {
 
  const data = [
    {id:1,title:"Title", paragraph:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ", img:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
    {id:2,title:"Title", paragraph:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ", img:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
    {id:3,title:"Title", paragraph:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ", img:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
    {id:4,title:"Title", paragraph:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ", img:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
    {id:5,title:"Title", paragraph:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ", img:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
    {id:6,title:"Title", paragraph:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ", img:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
  ]

  const renderList = data.map((item)=>{
    return(
      <Row className="row-grid justify-content-between" key={item.id}>
                    <Col md="6">
                      <div className="pl-md-5">
                        <h1>
                          {item.title}
                        </h1>
                        <p>
                          {item.paragraph}
                        </p>
                      
                        <br />
                        <a
                          className="font-weight-bold text-info mt-5"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
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
         
                    
        <h1>Team21_22</h1>
        <div class="wrapper">
        <div>
        <h1 style={{marginTop: 70,textAlign: "center", color:'#ffffff'}}>• Meet Our Team •</h1>
        </div>
        {/* <!-- Our team starts --> */}
        <section class="section-team">
        <div class="container">
            {/* <!-- ------------------------------Row 1---------------------------------------> */}
            <div class="row" style={{justifyContent: 'center'}}>
            
            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Adrain Dsouza</h4>
                    <h5 class="speciality">Lead</h5>
                </div>
                </div>
            </div>

            
            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80g" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Rohit Singh</h4>
                    <h5 class="speciality">Lead</h5>
                </div>
                </div>
            </div>

            
            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">C A Aakansha</h4>
                    <h5 class="speciality">Lead</h5>
                </div>
                </div>
            </div>

            
            </div>
            {/* <!-- ------------------------------Row 2---------------------------------------> */}

            <div class="row" style={{justifyContent: 'center'}}>
            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Ujjwal Dixit</h4>
                    <h5 class="speciality">Asst. Lead</h5>
                </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Rudra Tiwari</h4>
                    <h5 class="speciality">Asst. Lead</h5>
                </div>
                </div>
            </div>

            

            </div>
            <div class="row" style={{justifyContent: 'center'}}>

            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Kshitij Jatekar</h4>
                    <h5 class="speciality">Operations Head</h5>
                </div>
                </div>
            </div>


            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Anusha S.</h4>
                    <h5 class="speciality" style={{fontSize: 16}}>Asst. Operations Head</h5>
                </div>
                </div>
            </div>

            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Yogita Chaudhari</h4>
                    <h5 class="speciality" style={{fontSize: 16}}>Asst. Operations Head</h5>
                </div>
                </div>
            </div>
            </div>
            <div class="row" style={{justifyContent: 'center'}}>
            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Devansh Trivedi</h4>
                    <h5 class="speciality">Web Team Head</h5>
                </div>
                </div>
            </div>

            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Atharva Shinde</h4>
                    <h5 class="speciality">Asst. Web Head</h5>
                </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Asad Memon</h4>
                    <h5 class="speciality">Asst. Web Head</h5>
                </div>
                </div>
            </div>
            </div>
            
            <div class="row" style={{justifyContent: 'center'}}>
            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Tasneem S.</h4>
                    <h5 class="speciality">Technical Head</h5>
                </div>
                </div>
            </div>


            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Siddhi Pevekar</h4>
                    <h5 class="speciality" style={{fontSize: 16}}>Asst. Technical Head</h5>
                </div>
                </div>
            </div>
            </div>
            
            <div class="row" style={{justifyContent: 'center'}}>
            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Aditya Dhaware</h4>
                    <h5 class="speciality">Logistics Head</h5>
                </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Vanshita Lavange</h4>
                    <h5 class="speciality" style={{fontSize: 16}}>Asst. Logical head</h5>
                </div>
                </div>
            </div>
            
            </div>
            <div class="row" style={{justifyContent: 'center'}}>
            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Fletcher Fernandes </h4>
                    <h5 class="speciality" style={{fontSize: 16}}>Digital Creative Head </h5>
                </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Bandgar Mamta</h4>
                    <h5 class="speciality" style={{fontSize: 13}}>Asst. Digital Creative Head </h5>
                </div>
                </div>
            </div>
            
            </div>
            <div class="row" style={{justifyContent: 'center'}}>
            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Sakshi Pandey</h4>
                    <h5 class="speciality">Publicity Head</h5>
                </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                <div class="person-image">
                    <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
                <div class="person-info">
                    <h4 class="full-name">Bhagyasha Patil</h4>
                    <h5 class="speciality" style={{fontSize: 16}}>Asst. Publicity Head</h5>
                </div>
                </div>
            </div>
        </div>
        </div>
        </section>
  </div>


        
      </Container>
    </>
  );
}
