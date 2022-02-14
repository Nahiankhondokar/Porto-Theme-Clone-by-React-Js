import { React, useState, useEffect } from 'react';
import './ShopSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ShopSidebar = (props) => {


    let handleProductSearch = (e) => {

        let input_data = e.target.value;
        fetch('http://localhost:8000/products?q='+ input_data)
        .then(data => data.json())
        .then(data => props.productSearch(data));

    }



    return (

        <div className="blogSidebar">
            <div className="sidebar-area">
                <div className="search-option">
                    <input onChange={ handleProductSearch } type="text" placeholder='Search ...'/>
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


                <div className="shop-widget">
                    <h5 className="shop-widget-title"> Brands</h5>
                    <ul className="widget-list">
                        <li><input type="checkbox" id="apple"/> <label htmlFor="apple"> Apple</label></li>
                        <li><input type="checkbox" id="micro"/> <label htmlFor="micro"> Microsoft</label></li>
                        <li><input type="checkbox" id="deal"/> <label htmlFor="deal"> Deal</label></li>
                    </ul>
                </div>

                <div className="shop-widget tag-list">
                    <h5 className="shop-widget-title "> Tags</h5>
                    <ul className="widget-list">
                        <li><a href="#">Eid</a></li>
                        <li><a href="#">Chrismas</a></li>
                        <li><a href="#">Puja</a></li>
                    </ul>
                </div>

                <div className="blog-latest-post">
                    <h5>LATEST PRODUCTS</h5>
                    <div className="blog-post-info">
                        <img src="https://www.portotheme.com/wordpress/porto/shop1/wp-content/uploads/sites/77/2018/02/product-20-300x300.jpg" alt="" />
                        <div className="latest-post-titleOrdate">
                            <h5>Black Gray Handset</h5>
                            <p>$299.00</p>
                        </div>
                    </div>
                    <hr />
                    <div className="blog-post-info">
                        <img src="https://www.portotheme.com/wordpress/porto/shop1/wp-content/uploads/sites/77/2018/02/product-4-85x85.jpg" alt="" />
                        <div className="latest-post-titleOrdate">
                            <h5>Porto Extended Camera</h5>
                            <p>$699.00</p>
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
            

    );
}

export default ShopSidebar;
