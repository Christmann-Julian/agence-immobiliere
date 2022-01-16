import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import { Layout } from "../components/layout";

const Contact = () => {
  return (
    <Layout>
        <MDBContainer>
            <section className="my-5">
              <h2 className="h1-responsive font-weight-bold text-center my-5">
                Nous contacter
              </h2>
              <p className="text-center w-responsive mx-auto pb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi, veritatis
                totam voluptas nostrum quisquam eum porro a pariatur veniam.
              </p>
              <MDBRow>
                <MDBCol lg="5" className="lg-0 mb-4">
                  <MDBCard>
                    <MDBCardBody>
                      <div className="form-header accent-1">
                        <h3 className="mt-2">
                          <MDBIcon icon="envelope" /> Ecrivez-nous:
                        </h3>
                      </div>
                      <p className="dark-grey-text">
                        Une question ? Nos équipes sauront vous répondre.
                      </p>
                      <div className="md-form">
                        <MDBInput
                          icon="user"
                          label="Nom"
                          iconClass="grey-text"
                          type="text"
                          id="form-name"
                        />
                      </div>
                      <div className="md-form">
                        <MDBInput
                          icon="envelope"
                          label="Email"
                          iconClass="grey-text"
                          type="text"
                          id="form-email"
                        />
                      </div>
                      <div className="md-form">
                        <MDBInput
                          icon="tag"
                          label="Sujet du message"
                          iconClass="grey-text"
                          type="text"
                          id="form-subject"
                        />
                      </div>
                      <div className="md-form">
                        <MDBInput
                          icon="pencil-alt"
                          label="Votre message"
                          iconClass="grey-text"
                          type="textarea"
                          id="form-text"
                        />
                      </div>
                      <div className="text-center">
                        <MDBBtn color="light-blue">Envoyer</MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="7">
                  <div
                    id="map-container"
                    className="rounded z-depth-1-half map-container"
                    style={{ height: "400px" }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                      title="This is a unique title"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: 0 }}
                    />
                  </div>
                  <br />
                  <MDBRow className="text-center">
                    <MDBCol md="4">
                      <MDBBtn tag="a" color="blue" className="accent-1">
                        <MDBIcon icon="map-marker-alt" />
                      </MDBBtn>
                      <p>Paris, 75000</p>
                      <p className="mb-md-0">France</p>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBBtn tag="a" color="blue" className="accent-1">
                        <MDBIcon icon="phone" />
                      </MDBBtn>
                      <p>+ 01 234 567 89</p>
                      <p className="mb-md-0">Lun - Ven, 8:00-19:00</p>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBBtn tag="a" color="blue" className="accent-1">
                        <MDBIcon icon="envelope" />
                      </MDBBtn>
                      <p>info@gmail.com</p>
                      <p className="mb-md-0">sale@gmail.com</p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </section>
        </MDBContainer>
    </Layout>
  );
}

export default Contact;