import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { priceFormatted } from "./helpers";
import Link from "next/link";

export const Card = ({properties}) => {
  return (
    <>
    {
        properties && properties.map(property => (
          <MDBCard className="my-5 px-5 pb-3" key={property._id}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol lg="5">
                <Link href="/property/[slug]" as={`/property/${property.slug}`}>
                  <a>
                    <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                      <img
                        className="globalImg"
                        src={property.pictures[0]}
                        alt=""
                      />
                    </MDBView>
                  </a>
                </Link>
              </MDBCol>
              <MDBCol lg="7">
                <span className="indigo-text">
                  <h6 className="font-weight-bold mb-3">
                    <MDBIcon icon="university" className="pr-2" />
                    {property.category.name}
                  </h6>
                </span>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>{property.title}</strong>
                </h3>
                <p>{property.description.slice(0,220)}</p>
                <p><strong>{priceFormatted(property.price)}</strong></p>
                <p className="indigo-text">
                    <strong>
                        <MDBIcon icon="city" className="mr-1"/>
                        {property.city}
                    </strong>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
          </MDBCard>
        ))} 
    </>
  );
}