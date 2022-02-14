import { React,useState, useEffect } from 'react';
import { faUser, faClock, faComment, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import './SingleBlog.css';
import BlogSidebar from '../../../Sidebar/BlogSidebar/BlogSidebar';
import { useParams } from 'react-router-dom';



const SingleBlog = () => {

    let { singleBlogId } = useParams();

    const [singleBlog, setSingleBlog] = useState(0);

    useEffect(() => {

        fetch('http://localhost:8000/Post/' + singleBlogId)
        .then( data => data.json() )
        .then( data => setSingleBlog(data) );
        
    }, []);


    return (
        <>
           <div className="blog-section">
               <div className="section-title center py-5">
                   <h1>{ singleBlog.title }</h1>
                   <hr className='auto'/>
               </div>
               <div className="blog-content">
                    <Container>
                        <Row>
                            <Col md={9}>
                                <div className="blog-post">
                                    <img src={ singleBlog.img } alt="" />
                                    <div className="post-title-meta">
                                        <div className="date">
                                            <p>09</p>
                                            <h3>{ singleBlog.title }</h3>
                                        </div>
                                        <div className="post-meta">
                                            <p>Jan</p>
                                            <ul>
                                                <li><a href="#"><FontAwesomeIcon icon={ faUser }></FontAwesomeIcon> User</a></li>
                                                <li><a href="#"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> Time</a></li>
                                                <li><a href="#"><FontAwesomeIcon icon={faComment}></FontAwesomeIcon> Comment</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="post-desc">
                                        <p>{ singleBlog.content }</p>

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, fugit! Distinctio debitis quos, est numquam porro dolorem architecto assumenda repellendus asperiores, quo cum necessitatibus! Quisquam, error amet delectus iusto, dolorum facere, consequatur unde explicabo saepe fuga excepturi modi. Minus quisquam sapiente dicta sint corporis facilis officia saepe vel, dignissimos rem adipisci delectus similique id et. Labore possimus, exercitationem debitis libero excepturi perferendis quidem iure magni nostrum fugiat atque. Molestiae animi perferendis distinctio officia dolore illo deleniti natus obcaecati tempore suscipit at laborum, minima explicabo expedita fugit velit maiores cum. Ut eum inventore perspiciatis! Officiis harum autem ea nobis! Culpa, odio.</p>
                                    </div>
                                    <hr />
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

export default SingleBlog;
