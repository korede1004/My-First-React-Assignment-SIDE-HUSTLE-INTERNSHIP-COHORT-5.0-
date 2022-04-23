import React from "react"
import "./Geninfo.css"

function Geninfo() {
  return (
    <div className="mydetails">
      {/*myname name div start */}
      <div className="myname">
         <h1>ADERIBIGBE ADEKOREDE</h1>
      </div>
      {/*myname div ends */}


      {/* contact-details starts */}
      <div className="contact-details">
        <div>
          <h3>E-mail:</h3>
          <p>adekoredeaderibigbe@gmail.com</p>
        </div>
      <div>
          <h3>Phone Number:</h3>
          <p>+234(0)9038202610</p>
      </div>
        <div>
          <h3>Twitter:</h3>
          <p>www.twitter.com/hardecorede</p>
        </div>
    
      </div>

      
    </div>
  );
}

export default Geninfo