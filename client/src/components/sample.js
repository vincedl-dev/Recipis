import React from 'react'
import {
    BrowserRouter ,
    Routes,
    Route,
  } from "react-router-dom";
import Noted from './noted'
import Layout from './Layout';
export default function Sample() {
  return (
    <BrowserRouter>
        <Layout>
        <Routes>
            <Route path="/noted" element={<Noted />} />
                
         
        </Routes>
        </Layout>
    </BrowserRouter>
  )
}
