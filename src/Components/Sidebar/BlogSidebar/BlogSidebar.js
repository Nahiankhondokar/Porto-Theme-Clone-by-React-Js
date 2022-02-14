import React from 'react';
import "./BlogSidebar.css";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const BlogSidebar = () => {
    return (
        <>

        <div className="blogSidebar">
            <div className="sidebar-area">
                <div className="search-option">
                    <input type="text" placeholder='Search ...'/>
                    <button type='submit'><FontAwesomeIcon icon={ faSearch }></FontAwesomeIcon></button>
                </div>

                <div className="blog-categor">
                    <h5>CATEGORIES</h5>
                    <ul>
                        <li><a href=""><FontAwesomeIcon icon={ faAngleRight }></FontAwesomeIcon> Article <hr />
                            <ul>
                                <li><a href="#"><FontAwesomeIcon icon={ faAngleRight }></FontAwesomeIcon> SubCat</a></li><hr />
                                <li><a href="#"><FontAwesomeIcon icon={ faAngleRight }></FontAwesomeIcon> SubCat</a></li><hr />
                            </ul>
                        </a></li>
                        <li><a href=""> <FontAwesomeIcon icon={ faAngleRight }></FontAwesomeIcon> Buying</a></li><hr />
                        <li><a href=""><FontAwesomeIcon icon={ faAngleRight }></FontAwesomeIcon> Markup</a></li><hr />
                    </ul>
                </div>

                <div className="blog-latest-post">
                    <h5>LATEST POST</h5>
                    <div className="blog-post-info">
                        <img src="https://www.portotheme.com/wordpress/porto/corporate3/wp-content/uploads/sites/9/2016/06/blog-11-85x85.jpg" alt="" />
                        <div className="latest-post-titleOrdate">
                            <h5>This is a stardard post with preview image</h5>
                            <p>jan 10, 2022</p>
                        </div>
                    </div>
                    <hr />
                    <div className="blog-post-info">
                        <img src="https://www.portotheme.com/wordpress/porto/corporate3/wp-content/uploads/sites/9/2016/06/blog-11-85x85.jpg" alt="" />
                        <div className="latest-post-titleOrdate">
                            <h5>This is a stardard post with preview image</h5>
                            <p>jan 10, 2022</p>
                        </div>
                    </div>
                    <hr />
                </div>


                <div className="blog-about-us">
                    <h5>ABOUT US</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis cumque eos voluptatum, aspernatur ex omnis numquam eligendi voluptatibus harum.</p>
                </div>
                
            </div>
        </div>
            
        </>
    )
};

export default BlogSidebar;
