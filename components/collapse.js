import React, { useState } from "react";
import { MDBCollapse, MDBIcon } from "mdbreact";

const Collapse = ({title, children}) => {
    
    const [collapseID, setCollapseID ] = useState("");
    
    const toggleCollapse = collapseID => () => {
      setCollapseID(prevState => (
          collapseID = prevState !== collapseID ? collapseID : ""
      ))
    }
    
    return (
        <div className="mb-4">
              <div className="colapse" onClick={toggleCollapse("basicCollapse")}>
                  {title}
                  {
                      collapseID && <MDBIcon icon="angle-down" className="float-right colapse-icon"></MDBIcon>
                  }
                  {
                      !collapseID && <MDBIcon icon="angle-up" className="float-right colapse-icon"></MDBIcon>
                  }
                </div>
              <MDBCollapse id="basicCollapse" isOpen={collapseID}>
                {children}
              </MDBCollapse>
        </div>
    );
    
}

export default Collapse;