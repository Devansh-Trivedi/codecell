import React, {useEffect, useRef} from "react";
import Lottie from "lottie-web";
import { Line } from "react-chartjs-2";
import '../../Team.css'

import aditya from '../../assets/img/team22/aditya.jpg'
import devansh from '../../assets/img/team22/devansh.jpg'
// import adrain from '../../assets/img/team22/adrain.jpeg'
import anusha from '../../assets/img/team22/anusha.jpg'
import asad from '../../assets/img/team22/asad.JPEG'
import atharva from '../../assets/img/team22/Atharva.jpg'
import rohit from '../../assets/img/team22/rohit.jpeg'
import Bhagyasha from '../../assets/img/team22/bhagyasha.jpg'
import adrain from '../../assets/img/team22/adrain.jpeg'
import Kshitij from '../../assets/img/team22/kishtij.jpg'
import aakansha from '../../assets/img/team22/caAkansha.jpg'
import mamta from '../../assets/img/team22/mamta.jpg'
import fletcher from '../../assets/img/team22/fletcher.jpeg'
import rudra from '../../assets/img/team22/rudra.jpg'
import sakshi from '../../assets/img/team22/sakshi.jpg'
import Siddhi from '../../assets/img/team22/siddhi.jpg'
import tasneem from '../../assets/img/team22/tasneem.jpg'
import Ujjwal from '../../assets/img/team22/ujjwal.png'
import Vanshita from '../../assets/img/team22/vanshita.jpg'
import Yogita from '../../assets/img/team22/yogita.jpg'

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


export default function team22_22() {
 

  return (
    <>
      <ExamplesNavbar />
      <Container style={{marginTop:80}}>
         
                    
        <h1>Team 21-22</h1>
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
                    <img src={adrain} alt="" />
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
                    <img src={rohit} alt="" />
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
                    <img src={aakansha} alt="" />
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
                    <img src={Ujjwal} alt="" />
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
                    <img src={rudra} alt="" />
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
                    <img src={Kshitij} alt="" />
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
                    <img src={anusha} alt="" />
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
                    <img src={Yogita} alt="" />
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
                    <img src={devansh} alt="" />
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
                    <img src={atharva} alt="" />
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
                    <img src={asad} alt="" />
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
                    <img src={tasneem} alt="" />
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
                    <img src={Siddhi} alt="" />
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
                    <img src={aditya} alt="" />
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
                    <img src={Vanshita} alt="" />
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
                    <img src={fletcher} alt="" />
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
                    <img src={mamta} alt="" />
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
                    <img src={sakshi} alt="" />
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
                    <img src={Bhagyasha} alt="" />
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
      <Footer/>
    </>
  );
}
