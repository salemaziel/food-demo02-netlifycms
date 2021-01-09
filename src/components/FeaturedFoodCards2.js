import React, { Component } from "react";

import Card from "react-bootstrap/Card";

import "./FeaturedFoodCards.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { StockTacoMd } from "../images/index";

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 4,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const FeaturedFoodCards2 = ({ data }) => {
  return (
    <div className="py-2 my-5">
      <Slider {...settings}>
        {data.map((card) => (
          <div>
            <Card>
              <Card.Img variant="top" src={card.image} />
              <Card.Body className="d-flex flex-column text-center align-items-center px-4 py-2 ">
                <h3 className="font-weight-bold mb-0 mt-4">
                  {card.title}
                </h3>
                <small>{card.price}</small>
                <Card.Text className="mt-4">
                  {card.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
        <div>
          <Card>
            <Card.Img variant="top" src={StockTacoMd} />
            <Card.Body className="d-flex flex-column text-center align-items-center px-4 py-2 ">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">
                1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum consequatur numquam aliquam tenetur ad amet inventore
                hic beatae, quas accusantium perferendis sapiente explicabo.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img variant="top" src={StockTacoMd} />
            <Card.Body className="d-flex flex-column text-center align-items-center px-4 py-2 ">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">
                2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum consequatur numquam aliquam tenetur ad amet inventore
                hic beatae, quas accusantium perferendis sapiente explicabo.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img variant="top" src={StockTacoMd} />
            <Card.Body className="d-flex flex-column text-center align-items-center px-4 py-2 ">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">
                3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum consequatur numquam aliquam tenetur ad amet inventore
                hic beatae, quas accusantium perferendis sapiente explicabo.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img variant="top" src={StockTacoMd} />
            <Card.Body className="d-flex flex-column text-center align-items-center px-4 py-2 ">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">
                4. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum consequatur numquam aliquam tenetur ad amet inventore
                hic beatae, quas accusantium perferendis sapiente explicabo.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img variant="top" src={StockTacoMd} />
            <Card.Body className="d-flex flex-column text-center align-items-center px-4 py-2 ">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">
                5. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum consequatur numquam aliquam tenetur ad amet inventore
                hic beatae, quas accusantium perferendis sapiente explicabo.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        {/*<div>
          <Card>
            <Card.Img variant="top" src={StockTacoMd} />
            <Card.Body className="d-flex flex-column text-center align-items-center px-4 py-2 ">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>*/}
        {/*<div>
          <Card>
            <Card.Img variant="top" src={StockTacoMd} />
            <Card.Body className="d-flex flex-column text-center align-items-center px-4 py-2 ">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>*/}
        {/*<div>
          <Card>
            <Card.Img variant="top" src={StockTacoMd} />
            <Card.Body className="d-flex flex-column text-center align-items-center px-4 py-2 ">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>*/}
        {/*<div>
          <Card>
            <Card.Img variant="top" src={StockTacoMd} />
            <Card.Body className="d-flex flex-column text-center align-items-center px-4 py-2 ">
              <h3 className="font-weight-bold mb-0 mt-4">Carne Asada Tacos</h3>
              <small>$4.99</small>
              <Card.Text className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.</Card.Text>
            </Card.Body>
          </Card>
          </div>*/}
      </Slider>
    </div>
  );
};

export default FeaturedFoodCards2;
