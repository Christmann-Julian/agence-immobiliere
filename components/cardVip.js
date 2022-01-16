import React from "react";
import { MDBCard, MDBCardImage } from "mdbreact";
import { priceFormatted } from "./helpers";
import Link from "next/link";

export const CardVip = ({properties}) => {
    return(
        <>
        {
            properties && properties.map(property => (
                <MDBCard key={property._id}>
                    <Link href="/property/[slug]" as={`/property/${property.slug}`}>
                        <a>
                            <MDBCardImage
                            src={property.pictures[0]}
                            zoom
                            hover
                            waves
                            className="d-block w-100"
                            />
                        </a>
                    </Link>
                    <div className="imgTop-vip">
                        <button className="d-inline-flex vedette-vip">En vedette</button>
                        <button className="d-inline-flex exclu-vip">Exclusivité</button>
                    </div>
                    <div className="prix-vip">
                        {priceFormatted(property.price)}
                    </div>
                </MDBCard>
            ))
        }
    </>
    )
}