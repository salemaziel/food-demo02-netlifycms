import React, { useState, useEffect } from "react";
import { Link, navigateTo } from "gatsby";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";
import SideNav from "react-simple-sidenav";

import navStyles from "./navbar.module.css";

import { FaHome } from "react-icons/fa";
import { graphql, StaticQuery } from "gatsby";


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
