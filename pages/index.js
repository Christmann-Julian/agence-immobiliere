import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '../components/layout';
import api from '../auth/axios';
import { PropertyVip } from '../components/propertyVip';
import { MDBContainer } from 'mdbreact';
import { Carousel } from '../components/carousel';
import { PropertySection } from '../components/propertySection';
import { Features } from '../components/features';

export default function Home({propertiesVip, properties}) {
  return (
    <Layout>
      <Carousel/>
      <MDBContainer>
        <PropertyVip properties={propertiesVip}></PropertyVip>
        <PropertySection properties={properties}></PropertySection>
        <Features/>
      </MDBContainer>
    </Layout>
  )
}

export const getStaticProps = async() => {
  const {data: propertiesVip} = await api.get("/api/properties/vip");
  const {data} = await api.get("/api/properties?limit=6");
  const properties = data.data

  return {
    props: {
      propertiesVip,
      properties,
    }
  }
}
