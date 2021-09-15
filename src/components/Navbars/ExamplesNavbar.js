import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Route, IndexRoute } from "react-router";
import LandingPage from "views/examples/LandingPage";
import Events from "views/examples/Events";
import logo from "../../assets/img/Logo/log2.png"
import {
  Card,
  CardImg,
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";

export default function ExamplesNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[]);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);


  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
     
        <div className="navbar-translate">
          
          <NavbarBrand to="/" id="navbar-brand" tag={Link}>
            {/* <Col md="1">
                <Card style={{height:40, width:40}} >
                    <CardImg style={{height:40, width:40}} top width="100%" src={logo} />
                </Card>
                
              </Col> */}
            <Col md="1">            
              <span>RGIT• </span>
              Codecell
            </Col>
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by RGIT-Codecell
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col md="3">
                <Card style={{height:70, width:70}} >
                    <CardImg style={{height:70, width:70}} top width="100%" src={logo} />
                </Card>
                
              </Col>
              <Col className="collapse-brand" xs="3">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  RGIT•Codecell
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/CreativeTim"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim"
                rel="noopener noreferrer"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fab fa-facebook-square" />
                <p className="d-lg-none d-xl-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                target="_blank"
                href="/"
              >
                <i className="tim-icons icon-spaceship" /> JOIN
              </Button>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Events">
                Events
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Gallery">
                Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Internship">
                Internships
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink tag={Link} to="/Gallery">
                Teams
              </NavLink>
            </NavItem> */}
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
                Teams
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>
                  
                    <NavLink tag={Link} to="/Team21_22" style={{color:'grey',fontWeight:'bold'}}>
                      2021-2022
                    </NavLink>
                  
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>
                  <NavLink tag={Link} to="/Team20_21" style={{color:'grey',fontWeight:'bold'}}>
                    2020-2021
                  </NavLink>
                </DropdownItem>
                {/* <DropdownItem divider /> */}
              </DropdownMenu>
            </Dropdown>

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
