import React from 'react'
import Header from '../Component/Header'
import PasswordGenerator from '../Component/PasswordGenerator '

const Home = () => {
  return (
    <div
    style={{
        backgroundColor:'black',
      backgroundSize: "cover",
    }}
  >
    <Header />
    <PasswordGenerator/>
  </div>


  )
}

export default Home