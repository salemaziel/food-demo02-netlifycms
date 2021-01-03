import React from "react";
import Section2 from "./Section2";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import FeaturedFoodCards2 from "./FeaturedFoodCards2";

import Fade from 'react-reveal/Fade'


function FeaturedFoodCardSection2(props) {
  return (
    <Section2
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container fluid>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Fade>
        <FeaturedFoodCards2 />
        </Fade>
      </Container>
    </Section2>
  );
}

export default FeaturedFoodCardSection2;
