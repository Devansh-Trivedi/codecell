
import React from "react";
import { Link } from "react-router-dom";
import MctLogo from "../../assets/img/Logo/mctlogo.jpg"
import logo from "../../assets/img/Logo/log2.png"
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Card,
  CardImg
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="1">
           
              <Card style={{height:80, width:80}} >
                <CardImg style={{height:80, width:80}} top width="100%" src={logo} />
              </Card>
            
              
          </Col>
          <Col md="3">
            <h1 className="title">RGIT• Codecell</h1>
          </Col>
          <Col md="2">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link} style={{fontSize:"16px"}}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Events" tag={Link} style={{fontSize:"16px"}}>
                  Events
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Gallery" tag={Link} style={{fontSize:"16px"}}>
                  Gallery
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Internship" tag={Link} style={{fontSize:"16px"}}>
                  Internship
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/register-page" tag={Link} style={{fontSize:"16px"}}>
                  Register
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={Link} style={{fontSize:"16px"}}>
                  Recursion 3.0
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="https://creative-tim.com/blog?ref=blkdsr-footer" tag={Link}>
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://opensource.org/licenses/MIT" tag={Link}>
                  In
                </NavLink>
              </NavItem> */}
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.linkedin.com/company/rgit-codecell/"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.instagram.com/rgitcodecell"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Button>
            
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6">
            <Card>
              <CardImg top width="100%" src={MctLogo} />
           </Card>
          </Col>        
        </Row>
      </Container>
    </footer>
  );
}
