import React, {useEffect, useRef} from "react";
import Lottie from "lottie-web";
import { Line } from "react-chartjs-2";
import '../../Team.css';

import abhishek from '../../assets/img/team21/abhishek.jpg'
import devansh from '../../assets/img/team21/devansh.jpg'
import manasi from '../../assets/img/team21/manasi.jpg'
import omkar from '../../assets/img/team21/omkar.jpeg'
import jitesh from '../../assets/img/team21/jitesh.jpeg'
import keshav from '../../assets/img/team21/keshav.jpeg'
import rohit from '../../assets/img/team21/rohit.jpeg'
import Sanchita from '../../assets/img/team21/san.jpeg'
import adrain from '../../assets/img/team21/adrian.jpg'
import atif from '../../assets/img/team21/atif.jpg'
import aakansha from '../../assets/img/team21/aakansha.jpg'
import sejal from '../../assets/img/team21/sejal.jpg'
import anagha from '../../assets/img/team21/anagha.jpg'
import fletcher from '../../assets/img/team21/fletcher.jpeg'

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


export default function Team20_21() {

  return (
    <>
      <ExamplesNavbar />
      <Container style={{marginTop:80}}>
         
                    
                <h1>Team  20-21</h1>
                <div class="wrapper">
    <div>
      <h1 style={{marginTop: 70,textAlign: "center", color:'#ffffff'}}>• Meet Our Team •</h1>
    </div>
    <section class="section-team">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src={abhishek} alt="" />
              </div>
              <div class="person-info">
                <h4 class="full-name">Abhishek Rathod</h4>
                <h5 class="speciality">Lead</h5>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src={devansh} alt=""/>
              </div>
              <div class="person-info">
                <h4 class="full-name">Devansh Nanani</h4>
                <h5 class="speciality">Lead</h5>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src={manasi} alt=""/>
              </div>
              <div class="person-info">
                <h4 class="full-name">Manasi Hodavekar</h4>
                <h5 class="speciality">Lead</h5>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src={omkar} alt="" />
              </div>
              <div class="person-info">
                <h4 class="full-name">Omkar Chorghe</h4>
                <h5 class="speciality">Lead</h5>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ------------------------------Row 2---------------------------------------> */}

        <div class="row">
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src={jitesh} alt=""/>
              </div>
              <div class="person-info">
                <h4 class="full-name">Jitesh Gawas</h4>
                <h5 class="speciality">Lead</h5>
              </div>
            </div>
          </div>

          {/* <!-- 2 Keshav --> */}
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src={keshav} alt=""/>
              </div>
              <div class="person-info">
                <h4 class="full-name">Keshav Sharma</h4>
                <h5 class="speciality">Operations Head</h5>
              </div>
            </div>
          </div>


          {/* <!-- 3 Rohit --> */}
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src={rohit} alt=""/>
              </div>
              <div class="person-info">
                <h4 class="full-name">Rohit Singh</h4>
                <h5 class="speciality">Marketing Head</h5>
              </div>
            </div>
          </div>

          {/* <!-- 4 Sanchita --> */}
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src={Sanchita} alt=""/>
              </div>
              <div class="person-info">
                <h4 class="full-name">Sanchita Shirur</h4>
                <h5 class="speciality">Web-Dev Head</h5>
              </div>
            </div>
          </div>

        </div>
        {/* <!-- ------------------------------Row 3---------------------------------------> */}
        <div class="row">

          {/* <!-- 1 Adrian --> */}
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src={adrain} alt="" />
              </div>
              <div class="person-info">
                <h4 class="full-name">Adrian Dsouza</h4>
                <h5 class="speciality">Technical Head</h5>
              </div>
            </div>
          </div>


          {/* <!-- 2 Atif --> */}
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src={atif} alt=""/>
              </div>
              <div class="person-info">
                <h4 class="full-name">Atif Hingwala</h4>
                <h5 class="speciality">Technical Head</h5>
              </div>
            </div>
          </div>


          {/* <!-- CA Aakansha --> */}
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src={aakansha} alt=""/>
              </div>
              <div class="person-info">
                <h4 class="full-name">CA Aakansha</h4>
                <h5 class="speciality">Logistics Head</h5>
              </div>
            </div>
          </div>

          {/* <!-- 3 Sejal --> */}
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src={sejal} alt=""/>
              </div>
              <div class="person-info">
                <h4 class="full-name">Sejal Kore</h4>
                <h5 class="speciality">Logistics Head</h5>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ------------------------------Row 4---------------------------------------> */}
        <div class="row ">
          {/* <!-- 1 Anagha --> */}
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src={anagha} alt=""/>
              </div>
              <div class="person-info">
                <h4 class="full-name">Anagha Patil</h4>
                <h5 class="speciality">DC Head</h5>
              </div>
            </div>
          </div>

          {/* <!-- fletcher --> */}
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src={fletcher} alt=""/>
              </div>
              <div class="person-info">
                <h4 class="full-name">Fletcher Fernandes</h4>
                <h5 class="speciality">DC Head</h5>
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
