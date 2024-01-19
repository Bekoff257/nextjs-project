import React from 'react'
import Image from 'next/image'
import Girl from "../../public/assests/unsplash_Vlbc1ScnRng.svg"
import "./Main.scss"

const Main = () => {
  return (
    <div className='main'>
        <div className="container">
            <div className="main-content">
                <div className="main-left">
                    <h1>
                        Miami
                    </h1>
                    <h2>
                        Walke <span>R</span>
                    </h2>
                    <p>
                    Award Wining product designer based in Georgia. We <br />
                    create user-friendly interfaces for fast-growing startups.
                    </p>
                    <div className="main-btn">
                    <button>
                        Book A Call
                    </button>
                    </div>
                </div>
                <div className="main-right">
                    <Image src={Girl} alt="girl"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main