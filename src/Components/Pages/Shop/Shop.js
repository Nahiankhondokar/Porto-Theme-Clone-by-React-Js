import { React, useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ShopSidebar from '../../Sidebar/ShopSidebar/ShopSidebar';
import './Shop.css';
import Skeleton from 'react-loading-skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faHandsHelping, faMoneyBill, faTruck } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';

const Shop = () => {
   
    const [totalPage, setTotalPage] = useState(0);

    // Product Rendering
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('http://localhost:8000/products?_page=1&_limit=6')
        .then(data => {

            let total_page = data.headers.get('x-total-count');
            setTotalPage(total_page / 6);
            return data.json();
        })
        .then(data => setProducts(data));
        
    }, []);


    // Pagination Manage
    let updateProduct = (page_number) => {

        let page = page_number.selected + 1;
        fetch('http://localhost:8000/products?_page='+ page +'&_limit=6')
        .then(data => data.json())
        .then(data => setProducts(data));

    }


return (
    <>
        <section className="shop-area">
            <Container>

                <Row>
                    <Col>
                        <div className="product-shipping">
                            <div className="free-shipping">
                                <div className="icon">
                                    <FontAwesomeIcon icon={ faTruck }></FontAwesomeIcon>
                                </div>
                                <div className="title">
                                    <h5>FREE SHIPPING & RETURN</h5>
                                    <p>Free shipping on all orders over $99</p>
                                </div>
                            </div>
                            <div className="free-shipping">
                                <div className="icon">
                                    <FontAwesomeIcon icon={ faMoneyBill }></FontAwesomeIcon>
                                </div>
                                <div className="title">
                                    <h5>FREE SHIPPING & RETURN</h5>
                                    <p>Free shipping on all orders over $99</p>
                                </div>
                            </div>
                            <div className="free-shipping">
                                <div className="icon">
                                    <FontAwesomeIcon icon={ faHandsHelping }></FontAwesomeIcon>
                                </div>
                                <div className="title">
                                    <h5>FREE SHIPPING & RETURN</h5>
                                    <p>Free shipping on all orders over $99</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={3}>
                        <ShopSidebar productSearch={ setProducts }></ShopSidebar>
                    </Col>
                    <Col md={9}>
                        <div className="product">
                            <div className="shop-banner-img">
                                <img src="https://www.portotheme.com/wordpress/porto/shop1/wp-content/uploads/sites/77/2019/10/shop1_home_slider1.png" alt="" />
                                <div className="banner-title">
                                    <p>Summer Sale</p>
                                    <h1>70% OFF</h1>
                                    <button>SHOP NOW</button>
                                </div>
                            </div>

                            <div className="feature-product-title">
                                <h1>FEATURE PRODUCTS</h1>
                                <hr />
                            </div>
                            <Row>

                                {

                                (products.length > 0) ? 

                                    products.map( (data) => 


                                    <Col md={4}>
                                        <div className="product-item">
                                            <Link to={ '/shop/' + data.id }>
                                            <Card>
                                                <Card.Img src={ data.img }></Card.Img>
                                                <Card.Body>
                                                    <Card.Title className="name">{ data.name }</Card.Title>
                                                    <Card.Text className="price">

                                                        {
                                                        (data.sprice == "") ?

                                                            <>
                                                            <div className='sale'>Regular Pice : <span className='shop-price'>${ data.price }</span></div>
                                                            <div className='regular'>Sale price : <span className='shop-price'>$</span></div>
                                                            </>
                                                            
                                                        :
                                                            <>
                                                            <div className='regular'>Regular Pice : <span className='shop-price'>${ data.price }</span></div>
                                                            <div className='sale'>Sale price : <span className='shop-price'>${ data.sprice }</span></div>
                                                            </>
                                                        }

                                                    </Card.Text>
                                                    <Button variant='primary'> Add to Cart</Button>
                                                </Card.Body>
                                            </Card>
                                            </Link>
                                            
                                        </div>
                                    </Col> 

                                    ) 
                                    
                                    
                                :

                                  
                                    <>
                                    <Col md={4}>
                                        <Skeleton width='200px' height='150px'/>
                                        <Skeleton width='100px' height='20px'/>
                                        <Skeleton width='100px' height='20px'/>
                                        <Skeleton width='100px' height='20px'/>
                                    </Col>

                                    <Col md={4}>
                                        <Skeleton width='200px' height='150px'/>
                                        <Skeleton width='100px' height='20px'/>
                                        <Skeleton width='80px' height='20px'/>
                                        <Skeleton width='100px' height='20px'/>
                                    </Col>

                                    <Col md={4}>
                                        <Skeleton width='200px' height='150px'/>
                                        <Skeleton width='100px' height='20px'/>
                                        <Skeleton width='80px' height='20px'/>
                                        <Skeleton width='100px' height='20px'/>
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
                                    onPageChange={ updateProduct }
                                />


                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    </>
)
       
};

export default Shop;
