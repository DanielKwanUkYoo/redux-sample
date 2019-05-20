import React, { Component } from 'react';
import '../styles/carousel.css';
// import CarouselOne from '../images/carouselOne.jpeg'
// import CarouselTwo from '../images/carouselTwo.jpeg'
// import Test3 from '../images/test3.jpeg'
import Carousel from 'react-bootstrap/Carousel'
import CarouselPopup from './CarouselPopup'

export default class Content extends Component {
    state = {
        carouselPopup: false
    }

    popupClose = () => {
        this.setState({ carouselPopup: false })
    }

    render() {
        return(
            <div>
                <div data-aos="fade-down" data-aos-duration="1500">
                    {/* <a href="#mission"><i style={{top: '13em', zIndex: '2', color: '#fff'}} className="fas fa-chevron-down"></i></a> */}
                    <Carousel fade={true} pauseOnHover={false} interval={4500}>
                        
                        <Carousel.Item>
                            <div
                            className="d-block w-100 carousel-one-image"
                            alt="image-one"
                            style={{width:'100%', height:'750px', WebkitFilter: 'brightness(60%)'}}
                            >
                            </div>
                            <Carousel.Caption>
                            <div className="carousel-one">
                                <div className="carousel-one-title">
                                    <p className="carousel-one-title-top" style={{fontSize: '20px'}}>주일예배</p>
                                    <p>생수의 강 시리즈 2<br/>치유의 강</p>
                                </div>
                                <div className="carousel-one-subtitle">
                                    <span>열왕기하 5장 1-14절</span><br/><br/>
                                    <span style={{borderLeft: '4px solid #fff', paddingLeft: '0.5em'}}>송관빈 목사</span>
                                </div>
                                {/* <div className="carousel-one-content">
                                    <p>장소<br/>7837 Canada Way</p>
                                    <a href="/location">오시는 길</a>
                                </div> */}
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div
                            className="d-block w-100 carousel-two-image"
                            src="image-two"
                            style={{width:'100%', height:'750px', WebkitFilter: 'brightness(60%)'}}
                            >
                            </div>
                            <Carousel.Caption>
                            <div className="carousel-two">
                                <div className="carousel-two-title">
                                    <p>주은혜교회</p>
                                    <p>7 가지 기도제목</p>
                                </div>
                                <div className="carousel-two-subtitle">
                                    <p className="carousel-two-top-subtitle">골로새서 4:2<br/></p>
                                    <p>기도를 계속하고 기도에 감사함으로 깨어 있으라</p>
                                </div>
                                
                                <div className="carousel-two-button">
                                    <p onClick={()=> this.setState({ carouselPopup: true })}>기도제목 보기</p>
                                </div>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Test3}
                            style={{width:'100%', height:'750px'}}
                            />
                            <Carousel.Caption>
                            <h3>Test</h3>
                            <p>test</p>
                            </Carousel.Caption>
                        </Carousel.Item> */}
                    </Carousel>
                    
                </div>
            {this.state.carouselPopup ? <CarouselPopup popupClose={this.popupClose} /> : null}
            </div>
        )
    }
}