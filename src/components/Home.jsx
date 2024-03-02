import React from 'react'
import Button from '../layouts/Button'
function Home() {
  return (
    <div className="h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('./assets/img/home3.jpg')] bg-no-repeat bg-cover opacity-90 ">
      <div className=" w-full lg:w-4/5 mt-10 py-5">
          <h1 className="text-5xl font-bold leading--tight py-5">
            Empowering Health Choices for a vibrand life Your Trusted..
            </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam magnam
           omnis natus accusantium quos.Reprehenderit incidunt expedita
           molestiac impetit at sequi dolorem iste sit culpa, optio volutatates
           fugiat vero consequatur? 
          </p>

          <Button title="see services" />
      </div>
    </div>
  )
}

export default Home
