import React from "react";
import Lottie from "lottie-web";
import { Line } from "react-chartjs-2";
import PhotoGallery from 'react-photo-gallery';

// import hack1 from '../../assets/img/recursion/Hackathon-2-min.jpg'
// import hack3 from '../../assets/img/recursion/Hackathon-3-min.jpg'
// import hack4 from '../../assets/img/recursion/Hackathon-4-min.jpg'
// import hack5 from '../../assets/img/recursion/Hackathon-5-min.jpg'
// import hack6 from '../../assets/img/recursion/Hackathon-6-min.jpg'
// import hack7 from '../../assets/img/recursion/Hackathon-7-min.jpg'
// import hack8 from '../../assets/img/recursion/Hackathon-8-min.jpg'
// import hack9 from '../../assets/img/recursion/Hackathon-9-min.JPG'
// import hack10 from '../../assets/img/recursion/Hackathon-10-min.JPG'
// import hack from '../../assets/img/recursion/Hackathon-min.jpg'
// import py1 from '../../assets/img/pythonws/Python Workshop-min.jpg'
// import py2 from '../../assets/img/pythonws/Python Workshop-2-min.jpg'
// import py3 from '../../assets/img/pythonws/Python Workshop-3-min.jpg'
// import py4 from '../../assets/img/pythonws/Python Workshop-4-min.jpg'
// import py5 from '../../assets/img/pythonws/Python Workshop-5-min.jpg'
// import py6 from '../../assets/img/pythonws/Python Workshop-6-min.jpg'
// import py7 from '../../assets/img/pythonws/Python Workshop-7-min.jpg'
// import cc1 from '../../assets/img/inaugration/CodeCell inauguration-min.jpg'
// import cc2 from '../../assets/img/inaugration/CodeCell inauguration-2-min.jpg'
// import cc3 from '../../assets/img/inaugration/CodeCell inauguration-3-min.jpg'
// import cc4 from '../../assets/img/inaugration/CodeCell inauguration-4-min.jpg'
// import cc5 from '../../assets/img/inaugration/CodeCell inauguration-5-min.jpg'
// import cc6 from '../../assets/img/inaugration/CodeCell inauguration-6-min.jpg'
// import cc7 from '../../assets/img/inaugration/CodeCell inauguration-7-min.JPG'


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

// import bigChartData from "variables/charts.js";


export default function Gallery() {
 
  const photos = [
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819700/codecell%20website%20gallery%20images/Hackathon-3-min_cyx5st.jpg", 
      width:4, 
      height: 3
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819700/codecell%20website%20gallery%20images/Hackathon-min_kgicko.jpg", 
      width:4, 
      height: 6
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819700/codecell%20website%20gallery%20images/Hackathon-2-min_n5w6bo.jpg", 
      width:4, 
      height: 4
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819700/codecell%20website%20gallery%20images/Hackathon-4-min_gatc4g.jpg", 
      width:5, 
      height: 5
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819700/codecell%20website%20gallery%20images/Hackathon-10-min_dw4xkx.jpg", 
      width:4, 
      height: 3
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819700/codecell%20website%20gallery%20images/Hackathon-5-min_pssvrx.jpg", 
      width:8, 
      height: 5
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819700/codecell%20website%20gallery%20images/Hackathon-9-min_fmn2mf.jpg", 
      width:4, 
      height: 4
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819700/codecell%20website%20gallery%20images/Hackathon-6-min_c4s6we.jpg", 
      width:5, 
      height: 5
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819690/codecell%20website%20gallery%20images/Python_Workshop-4-min_wtcme9.jpg", 
      width:8, 
      height: 8
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819691/codecell%20website%20gallery%20images/Python_Workshop-min_cbfkdo.jpg", 
      width:4, 
      height: 4
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819690/codecell%20website%20gallery%20images/Python_Workshop-3-min_porlno.jpg", 
      width:5, 
      height: 6
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819690/codecell%20website%20gallery%20images/Python_Workshop-4-min_wtcme9.jpg", 
      width:4, 
      height: 3
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819690/codecell%20website%20gallery%20images/Python_Workshop-2-min_hltxlo.jpg", 
      width:12, 
      height: 8
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819690/codecell%20website%20gallery%20images/Python_Workshop-5-min_xfb2pk.jpg", 
      width:6, 
      height: 6
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819690/codecell%20website%20gallery%20images/Python_Workshop-6-min_ohs5l8.jpg", 
      width:5, 
      height: 6
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819690/codecell%20website%20gallery%20images/Python_Workshop-7-min_skcbgq.jpg", 
      width:8, 
      height: 6
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819680/codecell%20website%20gallery%20images/CodeCell_inauguration-min_x8chkk.jpg", 
      width:8, 
      height: 6
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819680/codecell%20website%20gallery%20images/CodeCell_inauguration-3-min_c0xkdz.jpg", 
      width:5, 
      height: 6
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819680/codecell%20website%20gallery%20images/CodeCell_inauguration-7-min_q5tzz1.jpg", 
      width:6, 
      height: 6
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819680/codecell%20website%20gallery%20images/CodeCell_inauguration-4-min_htdr6h.jpg", 
      width:5, 
      height: 6
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819680/codecell%20website%20gallery%20images/CodeCell_inauguration-2-min_ziar24.jpg", 
      width:5, 
      height: 5
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819680/codecell%20website%20gallery%20images/CodeCell_inauguration-6-min_bw3ila.jpg", 
      width:5, 
      height: 5
    },
    {
      src:"https://res.cloudinary.com/devdemo/image/upload/v1631819680/codecell%20website%20gallery%20images/CodeCell_inauguration-5-min_etgbx1.jpg", 
      width:5, 
      height: 5
    },
  ]

  return (
    <>
      <ExamplesNavbar />
      <div style={{marginTop:80}}></div>
      <PhotoGallery photos={photos} direction={"column"} />;
      <Footer/>
    </>
  );
}
