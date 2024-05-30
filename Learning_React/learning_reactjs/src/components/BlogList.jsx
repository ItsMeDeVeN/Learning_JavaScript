import React from 'react'

const BlogList = ({blogs, title, handledelete}) => {
    // const blogs = props.blogs
    // const title = props.title
  return (
    <div className="blog-list">
        <h1>{ title }</h1>
        {blogs.map((blog) => (
                <div className="block-preview" key={blog.id}>
                <h2 className="blog-title">{blog.Name}</h2>
                <p className="blog-age">{blog.Age}</p>
                <p className="blog-job">{blog.Job}</p>
                <button onClick={(id) => handledelete(blog.id)}>Delete</button>
                </div>
                ))}
    </div>
  )
}

export default BlogList
