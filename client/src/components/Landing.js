import React from 'react'
import { Container, Button } from '@material-ui/core'
import Buddha from '../art/cartoon_buddha_burned.png'

const Landing = () => {
  return (
    <div>
      <Container maxWidth='xs'>
        <div className="landingQuote" style={{padding: "20px", marginTop: "50px"}}>
          Buddha was asked, “What have you gained from meditation?” He replied, “Nothing!” Then he continued, “However, let me tell you what I have lost: anger, anxiety, 
          depression, insecurity, and fear of old age and death.”
        </div>
        <div className="center" >
          <img style={{width: "50%", height: "auto", marginTop: "15px"}} src={Buddha}></img>  
        </div>
        <div className="center" style={{marginTop: "20px", fontStyle: "bold"}}>
          Please login to begin a journey into your mind.
          <Button href="/auth/google"variant="contained" style={{marginTop: "20px"}}>Login</Button>
        </div>
      </Container>
    </div>
  )
}

export default Landing