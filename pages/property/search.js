import React, {useState, useEffect} from "react";
import {Layout } from "../../components/layout";
import { useRouter } from "next/router";
import api from "../../auth/axios";
import { Card } from "../../components/card";
import { SearchFilter } from "../../components/searchFilter";
import { MDBContainer } from "mdbreact";

const Search = () => {
    const router = useRouter();
    const [properties, setProperties] = useState("");

    useEffect(() => {
        async function getProperty(){
            const {data} = await api.post('/api/property/list/search', {
                filters: {
                    title: router.query.title,
                    category: router.query.category,
                }
            })
            setProperties(data);
        }
        getProperty();
    }, [router.query.title, router.query.categrory])

    return(
        <Layout>
            <MDBContainer>
                <SearchFilter/>
                {
                    router.query.title || router.query.category ? (
                        <div>
                            <div className="mb-4 text-center font-weight-bolder">
                                {properties.size} Bien(s) trouvé(s)
                            </div>
                            <Card properties={properties.data}></Card>
                        </div>
                    ) : null
                }
            </MDBContainer>
        </Layout>
    )
}

export default Search;