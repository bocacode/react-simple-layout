import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<h4>no page here </h4>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

const Home = () => <h2>this is home</h2>
const Blogs = () => <h2>this is blogs</h2>
const Contact = () => <h2>this is contact</h2>
