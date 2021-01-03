import React, { useState, useEffect } from "react";
import { Link, navigateTo } from "gatsby";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";
import SideNav from "react-simple-sidenav";

import navStyles from "./navbar.module.css";

import { FaHome } from "react-icons/fa";
import { graphql, StaticQuery } from "gatsby";

import { LogoWhite } from "../../images/index";

//then

const NavbarCustom = ({ data }) => {
  const [showNav, setShowNav] = useState();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <>
      <Navbar
        fixed
        bg={scroll ? "danger" : ""}
        variant="dark"
        expand="lg"
        className={navStyles.headerNavbar}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              className="d-inline-block align-top"
              src={data.siteYaml.logo_image}
              alt="Logo"
              height="60"
            ></img>
          </Navbar.Brand>
          {/*<Navbar.Brand /*as={Link} to="/"* />
            <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
                <img
                  className="d-inline-block align-top"
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1601552057/rbl-art-designs/mexico-flag-transparent-100x_zmifmm.png"
                  alt="Logo"
                  height="40"
                ></img>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/en/home">
                  {" "}
                  <img
                    className="d-inline-block align-top"
                    src="https://res.cloudinary.com/dexdumfqy/image/upload/v1601579192/rbl-art-designs/united-states-of-america-flag-3d-round-icon-256_gbffry.png"
                    alt="Logo"
                    height="40"
                  ></img> English
                </Dropdown.Item>
                {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>* /}
              </Dropdown.Menu>
            </Dropdown>
        </Navbar.Brand>*/}
          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="border-0"
            onClick={() => setShowNav(true)}
          ></Navbar.Toggle>
          <Navbar
            id="navbar-nav"
            className="justify-content-end NoMobile"
            style={{
              display: "flex",
              flexBasis: "auto",
              flexGrow: "1",
              alignItems: "center",
            }}
          >
            <Nav
              className="ml-auto d-flex"
              defaultActiveKey="/"
              onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
            >
              {/*<Nav.Item to="/#" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/#" active={false}>
                  Quienes Somos
                </Nav.Link>
              </Nav.Item>

              {/*<Nav.Item to="/faq" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/faq" active={false}>
                  FAQ
                </Nav.Link>
          </Nav.Item>* /}

              <Nav.Item to="/#" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/#" active={false}>
                  Servicios
                </Nav.Link>
              </Nav.Item>

              <Nav.Item to="/#" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/#" active={false}>
                  Contacto
                </Nav.Link>
              </Nav.Item>

              {/*<NavDropdown
                as={Link}
                href="/mas"
                to="/mas"
                eventKey="more"
                title="Más"
                id="nav-dropdown-about"
                className={navStyles.navItem}
              >
                <NavDropdown.Item eventKey="/#">
                  {" "}
                  Dropdown Item 1{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 2
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 3
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 4
                </NavDropdown.Item>
              </NavDropdown>*/}
            </Nav>
            <Nav
              className="mr-1"
              defaultActiveKey="/"
              onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
            >
              <Nav.Item to="/#hours" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/#hours" active={false}>
                  Hours
                </Nav.Link>
              </Nav.Item>

              {/*<Nav.Item to="/faq" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/faq" active={false}>
                  FAQ
                </Nav.Link>
          </Nav.Item>*/}

              <Nav.Item to="/#specials" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/#specials" active={false}>
                  Specials
                </Nav.Link>
              </Nav.Item>

              <Nav.Item to="/#contact" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/#contact" active={false}>
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
          <SideNav
            openFromRight={true}
            title={
              <div
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {/*
		<img 
		  src=""
		  alt=""
		  style={{
			margin: 'auto'	
		  }} />
		*/}
              </div>
            }
            titleStyle={{
              background: "inherit",
              backgroundColor: "transparent",
              color: "black",
              margin: "auto",
            }}
            items={[
              <Link rel="preload" className={navStyles.navItem} to="/">
                <FaHome />
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/#hours">
                Hours
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/#specials">
                Specials
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/#contact">
                Contact
              </Link>,
            ]}
            itemStyle={{
              background: "transparent!important",
              backgroundColor: "transparent!important",
              color: "#fff",
              fontSize: "1.5rem",
              fontWeight: "500",
              padding: "10px 0",
              textAlign: "center",
              margin: "1rem auto",
              listStyle: "none",
            }}
            navStyle={{
              width: "70%",
              background: "#dc3545",
              color: "white",
              maxHeight: "100vh",
              listStyle: "none",
            }}
            showNav={showNav}
            onHideNav={() => setShowNav(false)}
          />
        </Container>
      </Navbar>
    </>
  );
};

let navQuery = graphql`
  query {
    siteYaml {
      logo_image
    }
  }
`;

export default (props) => (
  <StaticQuery
    query={navQuery}
    render={(data) => <NavbarCustom data={data} />}
  ></StaticQuery>
);
