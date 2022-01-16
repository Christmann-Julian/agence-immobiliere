import React from "react";
import { MDBCard, MDBCardFooter, MDBCol, MDBRow, MDBView } from "mdbreact";
import { priceFormatted } from "./helpers";
import Link from "next/link";

export const CardRelated = ({properties}) => {
    return(
        <MDBRow>
        {
            properties && properties.map(property => (
                <MDBCol className="mb-3" md="4" lg="4" key={property._id}>
                    <MDBCard>
                        <Link href="/property/[slug]" as={`/property/${property.slug}`}>
                            <a>
                                <MDBView zoom hover waves>
                                    <img src={property.pictures[0]} alt={property.title} className="globalImg"/>
                                </MDBView>
                            </a>
                        </Link>
                        <MDBCardFooter>
                            <h3>{property.title}</h3>
                            <div color="indigo">
                                {priceFormatted(property.price)}
                            </div>
                            <p><small>{property.city}, Monde</small></p>
                        </MDBCardFooter>
                        <p>{JSON.stringify(property.slug)}</p>
                    </MDBCard>
                </MDBCol>
            ))
        }
    </MDBRow>
    )
}