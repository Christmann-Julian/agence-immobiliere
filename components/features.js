import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

export const Features = () => {
    return(
        <section className="my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">Qui sommes nous ?</h2>
            <p className="lead grey-text w-responsive text-center mx-auto mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, esse inventore facere maiores consequuntur nobis soluta vero quam officia blanditiis in eligendi odio dolores sit voluptatibus molestiae deleniti ex voluptate!</p>
            <MDBRow>
                <MDBCol lg="5" className="text-center text-mg-left">
                    <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt="" />
                </MDBCol>
                <MDBCol lg="7">
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text"></MDBIcon>
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Sécurisé</h5>
                            <p className="grey-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quibusdam voluptates minima, exercitationem dolorum unde dolor molestiae neque aliquam? Veniam atque, enim adipisci delectus a temporibus fugiat dicta similique libero odit ipsa nihil asperiores distinctio vero consequatur optio. Molestias earum quis voluptatibus totam illum nisi tenetur, necessitatibus consequuntur eaque ab.</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text"></MDBIcon>
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Nos agences</h5>
                            <p className="grey-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quibusdam voluptates minima, exercitationem dolorum unde dolor molestiae neque aliquam? Veniam atque, enim adipisci delectus a temporibus fugiat dicta similique libero odit ipsa nihil asperiores distinctio vero consequatur optio. Molestias earum quis voluptatibus totam illum nisi tenetur, necessitatibus consequuntur eaque ab.</p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </section>
    );
}