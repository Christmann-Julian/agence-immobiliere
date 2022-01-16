import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from 'mdbreact';

export const Carousel = () => {
  return (
    <MDBCarousel interval={4000} activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1 carousel-main">
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100 carouselItem"
              src="https://res.cloudinary.com/beloved/image/upload/v1593635578/Agency/z23ok1wvc3sdkenitunx.jpg"
              alt="First slide"
            />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100 carouselItem"
              src="https://res.cloudinary.com/beloved/image/upload/v1594004282/Assets/asset_eocidz.jpg"
              alt="Second slide"
            />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100 carouselItem"
              src="https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_960_720.jpg"
              alt="Third slide"
            />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}