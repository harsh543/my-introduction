import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>More about me</h1>
    <p>I enjoy creating ideas 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
