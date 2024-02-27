import React from 'react'

const BlogCard = ({img , headlines}) => {
  return (
    <div className="w-full lg:w-1/4 p-2 shadow-[rgba(0,0,0,0.24) 0px 3px 8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration -300 ease-in-out">
        <img src={img} alt="img" />
        <h1>{headlines}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Distinctio
          dolor nobis pariatur provident aut rem deserunt architecto masiores,
          aliquam dignissimos.
        </p>
    </div>
  )
}

export default BlogCard
