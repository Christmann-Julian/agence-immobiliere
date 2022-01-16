import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from 'mdbreact';

export const CardCarousel = ({property}) => {
  return (
      <div className='myCarousel'>
          <MDBCarousel interval={4000} activeItem={1} length={2} showControls={true} showIndicators={true} className="z-depth-1">
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                { property && property.pictures[0] ? (
                    <MDBView>
                    <img
                      className="d-block w-100 carousel-img"
                      src={property.pictures[0]}
                      alt="First slide"
                    />
                  </MDBView>
                ) : null}
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                  { property && property.pictures[1] ? (
                      <MDBView>
                      <img
                        className="d-block w-100 carousel-img"
                        src={property.pictures[1]}
                        alt="First slide"
                      />
                    </MDBView>
                  ) : null}
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
          <style jsx>
              {
                `
                @media (min-width: 768px){
                    .myCarousel{
                        width: 100%;
                    }
                    .carousel-img{
                        width: 100%;
                        height: 400px;
                        display: block;
                    }
                }

                @media (max-width: 768px){
                    .myCarousel{
                        width: 100%;
                    }
                    .carousel-img{
                        width: 100%;
                        height: 300px;
                        display: block;
                    }
                }
                `
              }
          </style>
      </div>
    
  );
}