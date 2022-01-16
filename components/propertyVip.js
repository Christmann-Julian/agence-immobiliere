import React from "react";
import { MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBView } from "mdbreact";
import { priceFormatted } from "./helpers";
import Link from "next/link";

export const PropertyVip = ({properties}) =>{
    return (
        <>
            <h2 className="h2-responsive font-weight-bold text-center my-4">Biens sponsorisés</h2>
            <MDBRow>
                {
                    // Condition pour savoir si les données des propriétés vip existent
                    properties && properties.map((property) => (
                        <MDBCol md="4" lg="4" key={property._id}>
                            <Link href="/property/[slug]" as={`/property/${property.slug}`}>
                                <a>
                                    <MDBView zoom hover waves>
                                        <img src={property.pictures[0]} alt={property.title} className="globalImg"/>
                                    </MDBView>
                                </a>
                            </Link>
                            <MDBCardBody>
                                <MDBCardTitle>{property.title}</MDBCardTitle>
                                <MDBCardText>
                                    <strong>{priceFormatted(property.price)}</strong>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    ))
                }
            </MDBRow>
        </>
    )
}