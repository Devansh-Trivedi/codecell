import React, {useEffect, useRef} from "react";
import Lottie from "lottie-web";
import { Line } from "react-chartjs-2";

import PhotoGallery from 'react-photo-gallery';


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


export default function Gallery() {
 
  const photos = [
    {
      src:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
      width:4, 
      height: 3
    },
    {
      src:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
      width:8, 
      height: 5
    },
    {
      src:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
      width:4, 
      height: 6
    },
    {
      src:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
      width:5, 
      height: 6
    },
    {
      src:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
      width:4, 
      height: 3
    },
    {
      src:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
      width:8, 
      height: 5
    },
    {
      src:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
      width:4, 
      height: 6
    },
    {
      src:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
      width:5, 
      height: 6
    },
    {
      src:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
      width:4, 
      height: 3
    },
    {
      src:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
      width:8, 
      height: 5
    },
    {
      src:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
      width:4, 
      height: 6
    },
    {
      src:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
      width:5, 
      height: 6
    },
    {
      src:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
      width:4, 
      height: 3
    },
    {
      src:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
      width:8, 
      height: 5
    },
    {
      src:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
      width:4, 
      height: 6
    },
    {
      src:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
      width:5, 
      height: 6
    },
  ]

  return (
    <>
      <ExamplesNavbar />
      <div style={{marginTop:80}}></div>
      <PhotoGallery photos={photos} direction={"column"} />;
    </>
  );
}
