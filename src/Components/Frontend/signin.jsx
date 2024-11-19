// eslint-disable-next-line no-unused-vars
import React from 'react'

function Signin() {

    const handleToggle = () => {
        if (type==='password'){
           setIcon(eye);
           setType('text')
        } else {
           setIcon(eyeOff)
           setType('password')
        }
     }

  return (
    <>
    <section className="Home-section">
        <div className="hero">
        <div className="container">
          <div className="box">
          <div>
        <div>
           <div className="mb-4 flex">
              <input
                  type={type}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
             />
             <span className="flex justify-around items-center" onClick={handleToggle}>
                  <Icon className="absolute mr-10" icon={icon} size={25}/>
              </span>
            </div>
         </div>
      </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Signin
