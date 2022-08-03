import React from 'react'

const MyPhoto = ({myphoto}) => {
    console.log(myphoto)
  return (
    <>
   
    <img
      src={myphoto}
          alt='myphotop'
      style={{ maxWidth: '30rem' }}
    />
    
    </>
   
  )
}

export default MyPhoto