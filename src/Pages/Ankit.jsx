import React from 'react'

function Ankit() {
  return (
    <>
 

 <div className="patient_ui">
    <div className='rectangle'>
       
       {/* Inner Rectangle */}
        <div className='inner_rectangle'>
        </div>

        {/* Inner text */}
        <div className='inner_text'>
          <div className="name"><b>Name:</b> Ankit</div>
          <div className="age"><b>Age:</b> 20</div>
          <div className="address"><b>Address:</b> Bangalore</div>
          <div className="gender"><b>Gender:</b> Male</div>
          <div className="contact"><b>Contact:</b> 987654321</div>
        </div>

        {/* Temperature */}
       
    </div>

    <div className='temp'>
          <div className="temperature"><b>Temperature:</b> </div>
          <div
  style={{
    fontSize: "60px",
    color: "black",
    textShadow: "2px 2px 0 white, -2px -2px 0 white, -2px 2px 0 white, 2px -2px 0 white"
  }}
>
  98°F
</div>

        </div>

        {/* Air */}
        <div className="air">
          <div className="air_quality"><b>Air Quality:</b> </div>
          <div style={{
    fontSize: "60px",
    color: "black",
    textShadow: "2px 2px 0 white, -2px -2px 0 white, -2px 2px 0 white, 2px -2px 0 white"
  }}>50 AQI</div>
        </div>



        </div>   
    </>
  )
}

export default Ankit;

