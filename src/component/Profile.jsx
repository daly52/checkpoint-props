import React from 'react'

import Typed from 'react-typed';


const Profile = ({ myprofil1 }) => {
  console.log(myprofil1);
  return (
    <div className='myname'>
      {
        myprofil1.map((aa) =>
        (
          <>
        
            <Typed className='typed-text'

              strings={[aa.name]}
              typeSpeed={40}
              backSpeed={80}
              loop

            />
          </>
        )

        )


      }

    </div>
  )
}

export default Profile