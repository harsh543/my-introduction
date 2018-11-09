import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>I'm Harsh Bajaj.</p>
    <p>I'm a Cybersecurity researcher at University of Illinois </p>
    <p>I keep coding here as well </p>
    <p> THe last hackathon I am proud of was : </p>
  <p>ANd I contribute to Open Source as well  :  </p>  
  <Link to="/page-2/">Myself</Link>
  </div>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
