import React from "react";

import SectionSchedule from "./section1Schedule";
import { graphql, StaticQuery } from "gatsby";

import HeroBannerHoriz from "../../heroBannerHoriz";
//import SectionTilez from '../../SectionTilez/section2Tiles'
import FeaturedFoodCardSection2 from "../../FeaturedFoodCardSection2";

const HomePage = ({ data }) => {
  console.log('data', data)
  return (
    <>
      <HeroBannerHoriz />
      <SectionSchedule />
      {/*<HoursLocations />*/}
      <div id="specials" />
      <FeaturedFoodCardSection2
        bg="white"
        textColor="dark"
        size="lg"
        title="Featured Specials"
      />
    </>
  );
};
let indexQuery = graphql`
  query {
    siteYaml {
      logo_image
      background_photo
      site_title
      site_subtitle
      facebook_link
      instagram_link
      twitter_link
      yelp_link
      sunday_hours
      monday_hours
      tuesday_hours
      wednesday_hours
      thursday_hours
      friday_hours
      saturday_hours
    }
  }
`;
export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => <HomePage data={data} />}
  ></StaticQuery>
);
