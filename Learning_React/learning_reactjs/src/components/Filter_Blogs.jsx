import React from 'react'
import { useState } from "react";
import BlogList from "./BlogList";

const Filter_Blogs = () => {
    const [blogs, setBlogs] = useState([        //For printing an entire list using the map function of JS
    {Name: "Deven", Age: 21, Job: "Software Engineer Intern", id:1 },
    {Name: "Harshil", Age: 21, Job: "Software Engineer Intern", id:2 },
    {Name: "Naman", Age: 24, Job: "Software Engineer", id:3 },
])

const handledelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
}

return(
    <div className="home">
        <BlogList blogs={blogs} title="My Blogs !!!!!!!!!!" handledelete={handledelete}/>
        <BlogList blogs={blogs.filter((blog) => blog.Name === "Deven")} title="Deven Blogs !!!!!!!!!!" handledelete={handledelete}/> {/*To filter all the entires that have author name == Deven */}
    </div>
)
}

export default Filter_Blogs
