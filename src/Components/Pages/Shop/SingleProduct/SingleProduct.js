import {React, useState, useEffect } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Container, Row, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';
import Skeleton from 'react-loading-skeleton';

const SingleProduct = () => {


    let { singleProductId  } = useParams();

    const [single, setSingle] = useState([]);
    const [related, setRelated] = useState([]);


    let { name, img, price, sprice, stock } = single;

    // Get Products Form Api
    useEffect(() => {

        fetch('http://localhost:8000/products/' + singleProductId)
        .then(data => data.json())
        .then((data) => {

            setSingle(data)

            fetch('http://localhost:8000/category/'+ data.categoryId +'/products')
            .then(data => data.json())
            .then(data => setRelated(data));


        });
      
    }, []);



    

    return (
        <div className="single-product">
            <Container>
                <Row>
                <Col md={6}>
                            <img src={ img } alt="" />
                        </Col>
                        <Col md={6}>
                            <div className="product-info">
                                <h2>{ name } </h2>
                                <p><FontAwesomeIcon icon={ faStar }></FontAwesomeIcon> | Add a review</p>
                                <div className="section-title">
                                    <hr />
                                </div>
                                <div className="pricing">

                                    {
                                        sprice == '' ?
                                            <div className="price-title">Regular Price : <span className="sale">${ price }</span></div>
                                            :
                                            <>
                                                <div className="price-title">Regular Price : <span className="regular">${ price }</span></div>
                                                <div className="price-title">Sale Price : <span className="sale">${ sprice }</span></div>
                                            </>
                                    }

                                    <div className="desc">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi deserunt cumque numquam officia dignissimos totam?</p>
                                    </div>

                                    <div className="product-color">
                                        <p>color : </p>
                                        <a className="blue" href=""></a>
                                        <a className="red" href=""></a>
                                        <a className="yellow" href=""></a>
                                    </div>

                                    <div className="product-size">
                                        <p>size : </p>
                                        <a className="blue" href="">S</a>
                                        <a className="red" href="">M</a>
                                        <a className="yellow" href="">L</a>
                                    </div>
                                    
                                    {
                                        stock > 15 ?

                                        <div className="stock">
                                        { stock } in stock
                                        </div>
                                        :
                                        <div className="stock-out">
                                        { stock } in stock
                                        </div>

                                    } 
                                    
                                    <div className="cart-btn">
                                        <Button>Add to Cart</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                </Row>
                

                <div className="single-related-product-section">
                    <Row>
                        <Col>
                            <div className="related-product-title">
                                <h2>Related Product</h2>
                                <hr />
                            </div>
                        </Col>
                    </Row>
                    <Row>

                        {
                        
                        related.length > 0 ?

                            related.map((data) => 
                                <Col md={3}>
                                    <div className="related-product">
                                        <Card>
                                            <img className="related-product-img" src={ data.img } alt="" />
                                            <Card.Body>
                                                <Card.Title className="name">{data.name}</Card.Title>
                                                <Card.Text className="price">
                                                {
                                                    sprice == '' ?
                                                        <div className="price-title">Regular Price : <span className="sale">${ price }</span></div>
                                                        :
                                                        <>
                                                            <div className="price-title">Regular Price : <span className="regular">${ price }</span></div>
                                                            <div className="price-title">Sale Price : <span className="sale">${ sprice }</span></div>
                                                        </>
                                                }
                                                </Card.Text>
                                                <Button variant='primary'> Add to Cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            )

                        :
                        
                        <>
                            <Col md={3}>
                                <Skeleton width="100%" height="80px" />
                            </Col> 

                            <Col md={3}>
                                <Skeleton width="100%" height="80px" />
                            </Col> 

                            <Col md={3}>
                                <Skeleton width="100%" height="80px" />
                            </Col> 

                            <Col md={3}>
                                <Skeleton width="100%" height="80px" />
                            </Col> 
                        </>   
                        

                        }
                        


                    </Row>
                </div>                

            </Container>
        </div>
    )
};

export default SingleProduct;
