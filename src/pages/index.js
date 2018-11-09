import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>I'm Harsh Bajaj.</p>
    <p>I'm a Cybersecurity researcher at University of Illinois </p>
    <p>I'm a Cybersecurity researcher at University of Illinois </p>
    <p>I keep coding here as well: <a href="https://www.hackerrank.com/harshpbajaj"> HackerRank  </a> </p>
    <p> THe last hackathon I am proud of was : <a href="https://hackuiowa.hackerearth.com/sprints/hackuiowa-1/dashboard/fbab7af/submission/"> HackUIowa IoT project </a></p>
  <p>ANd I contribute to Open Source as well :<a href=" https://www.owasp.org/index.php/OWASP_Serverless_Top_10_Project"> OWASP</a> . 
and <a href="http://w3af.org/">w3af (going to contribute)<a/> </p>  
  <Link to="/page-2/">Myself</Link>
  </div>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
