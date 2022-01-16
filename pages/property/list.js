import React from "react";
import { MDBDataTableV5, MDBIcon, MDBContainer } from "mdbreact";
import { AdminRoute } from "../../auth/adminRoutes";
import { Layout } from "../../components/layout";
import api from "../../auth/axios";
import useSWR from "swr";
import Moment from "react-moment";
import { priceFormatted } from "../../components/helpers";

const fetcher = url => api.get(url).then(res => res.data)

const PropertyList = () => {
    const {data} = useSWR("/api/properties?limit=50", fetcher);
    const properties = data && data.data;

    const datatable = {
        columns: [
            {
                label: "Titre" ,
                field: "title",
                sort: "asc"
            },
            {
                label: "Description" ,
                field: "description",
                sort: "asc"
            },
            {
                label: "Adresse" ,
                field: "address",
                sort: "asc"
            },
            {
                label: "Prix" ,
                field: "price",
                sort: "asc"
            },
            {
                label: "Date de création" ,
                field: "time",
                sort: "asc"
            },
        ],
        rows: properties && properties.map(property => {
            return{
                title: property.title,
                description: property.description.slice(0,380),
                address: property.address,
                price: priceFormatted(property.price),
                time: <Moment format="DD/MM/YYYY à hh:mm:ss">{property.createdAt}</Moment>,
            }
        })
    }

    return(
        <Layout>
            <MDBContainer>
                <MDBDataTableV5 data={datatable} entries={5} pagesAmount={4} searchTop searchBottom={false}/>
            </MDBContainer>
        </Layout>
    )
}

export default AdminRoute(PropertyList);