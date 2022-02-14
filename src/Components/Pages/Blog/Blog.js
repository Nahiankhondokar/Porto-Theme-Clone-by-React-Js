import { React, useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { faAngleRight, faClock, faComment, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Blog.css";
import BlogSidebar from '../../Sidebar/BlogSidebar/BlogSidebar';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import ReactPaginate from 'react-paginate';

const Blog = () => {


    const [totalPage, setTotalPage] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {

       

            fetch('http://localhost:8000/Post?_page=1&_limit=3')
            .then(data => {

                let total = data.headers.get('x-total-count') / 3;
                setTotalPage(total);
                return data.json();
            })
            .then( data => setPosts(data) );

       
       
    }, []);


    let updateBlog = (page_num) => {

        let page = page_num.selected + 1;

        fetch('http://localhost:8000/Post?_page='+ page +'&_limit=3')
        .then(data => data.json())
        .then( data => setPosts(data) );


    }


    return (
        <>
           <div className="blog-section">
               <div className="section-banner">
                    <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2021/04/blog-title-bg-opt.jpg" alt="" />
                    <div className="section-banner-title">
                        <h1>Blog Post</h1>
                    </div>
               </div>

               <div className="blog-content">
                    <Container>
                        <Row>
                            <Col md={9}>
                                <div className="blog-post">


                                    {

                                        posts.length > 0 ? 
                                        posts.map((data) => 
                                        
                                            <Link to={ '/blog/' + data.id }>
                                                <img src={ data.img } alt="" />
                                                <div className="post-title-meta">
                                                    <div className="date">
                                                        <p>09</p>
                                                        <h3>{ data.title }</h3>
                                                    </div>
                                                    <div className="post-meta">
                                                        <p>Jan</p>
                                                        <ul>
                                                            <li><a href=""><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> User</a></li>
                                                            <li><a href=""><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> Time</a></li>
                                                            <li><a href=""><FontAwesomeIcon icon={faComment}></FontAwesomeIcon> Comment</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="post-desc">
                                                    <p>{ data.content }</p>
                                                    <hr />
                                                </div>
                                            </Link>
                                        
                                        )

                                    :

                                <>
                                    <Col>
                                        <Skeleton width="100%" height="300px" />
                                        <Skeleton width="300px" height="20px" />
                                        <Skeleton width="80px" height="20px" />
                                        <Skeleton width="50px" height="20px" />
                                    </Col> 

                                    <Col>
                                        <Skeleton width="100%" height="300px" />
                                        <Skeleton width="300px" height="20px" />
                                        <Skeleton width="80px" height="20px" />
                                        <Skeleton width="50px" height="20px" />
                                    </Col> 
                                </>    
                                        
                                }

                                <ReactPaginate 
                                    pageCount= { totalPage }
                                    breakLabel={" . . . "}
                                    breakClassName={'page-item'}
                                    breakLinkClassName={'page-link'}
                                    containerClassName={ 'pagination justify-content-center my-3' }
                                    pageClassName={ 'page-item' }
                                    pageLinkClassName={ 'page-link' }
                                    previousLabel="<<"
                                    nextLabel=">>"
                                    previousClassName={'page-item'}
                                    previousLinkClassName={'page-link'}
                                    nextClassName={'page-item'}
                                    nextLinkClassName={'page-link'}
                                    activeClassName={'active'}
                                    onPageChange={ updateBlog }
                                
                                />


                                    <div className="related-post">  
                                        <div className="section-title">
                                            <h1>Related Post</h1>
                                            <hr />
                                        </div>                             
                                        <Container>
                                            <Row>
                                                <Col md={4}>
                                                    <div className="team-member">
                                                        <img src="https://www.portotheme.com/wordpress/porto/corporate3/wp-content/uploads/sites/9/2016/05/blog-8-450x231.jpg" alt="" />
                                                        <div className="related-post-desc">
                                                            <Row>
                                                                <Col md={3}>
                                                                    <div className="related-post-date">
                                                                        <p className='day'>13</p>
                                                                        <p className='month'>May</p>
                                                                    </div>
                                                                </Col>
                                                                <Col md={9}>
                                                                    <div className="related-post-title">
                                                                        <a href="#"> Etiam laoreet sem eget eros rhoncus </a>
                                                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                                                        <span>Learn more <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></span>
                                                                    </div>
                                                                    
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </div>
                                                </Col>
                                                
                                            </Row>
                                        </Container>
                                    </div>
                                </div>

                                
                            </Col>
                            <Col md={3}>
                                <BlogSidebar></BlogSidebar>
                            </Col>
                        </Row>
                    </Container>
               </div>
            </div> 
        </>
    )
};

export default Blog;
