"use client";

import React, { useEffect } from 'react'
import "./blog.scss"
import Image from 'next/image';
import Link from 'next/link';
import Aos from 'aos';

const Blog = () => {

  const blogsObj = [
    {
      date: 'UI Design  |   22 May  2023',
      title: `What is UI Design in Front End Design?`,
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
      link: 'READ MORE',
      img: '/assests/image 16.svg'
    },
    {
      date: 'UI Design  |   22 May  2023',
      title: 'What is UI Design in Front End Design?',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
      link: 'READ MORE',
      img: '/assests/image 16.svg'
    },
    {
      date: 'UI Design  |   22 May  2023',
      title: 'What is UI Design in Front End Design?',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
      link: 'READ MORE',
      img: '/assests/image 16.svg'
    },
    {
      date: 'UI Design  |   22 May  2023',
      title: 'What is UI Design in Front End Design?',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
      link: 'READ MORE',
      img: '/assests/image 16.svg'
    },
    {
      date: 'UI Design  |   22 May  2023',
      title: 'What is UI Design in Front End Design?',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
      link: 'READ MORE',
      img: '/assests/image 16.svg'
    },
    {
      date: 'UI Design  |   22 May  2023',
      title: 'What is UI Design in Front End Design?',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
      link: 'READ MORE',
      img: '/assests/image 16.svg'
    }
  ]

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className='blog' id='blog'>
      <div className="container">
        <div className="blog-content">
          <div className="blog-top">
            <div className="blog-top-left">
              <span>
                LATEST BLOG
              </span>
              <h3>
                Check Some of Latest <br />
                News & Articles
              </h3>
            </div>
            <div className="blog-top-right">
              <button>
                Load More
              </button>
            </div>
          </div>
            <div className="blogs">
              {
                blogsObj.map((blog) => 
                  <>
                    <div className="blog-item" data-aos="fade-up">
                      <div className="blog-img-content">
                        <Image src={blog?.img} alt="blog" width={611} height={392}/>
                      </div>
                      <div className="blog-all-info">
                        <span>
                          {blog?.date}
                        </span>
                        <h3>
                          {blog?.title}
                        </h3>
                        <p>
                          {blog?.desc}
                        </p>
                        <div className="link">
                          <Link href='/'>
                            {blog?.link}
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M11.8935 3.40821L3.4082 11.8935" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.06272 3.42261C5.06272 3.42261 10.3298 1.84492 11.8922 3.40734C13.4558 4.97089 11.8787 10.2386 11.8787 10.2386" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog