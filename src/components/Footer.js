import React, { Component } from 'react';
import Logo from '../images/logo.jpeg';
import '../styles/footer.css'

export default class Footer extends Component {
    render() {
        return(
            <div className="footer-container">
                <div className="footer-left">
                    <img src={Logo} alt="logo" style={{width: '130px', height: '60px'}}/>
                    {/* <p>&copy; 2019 J-Grace Community Church</p> */}
                </div>
                <div className="footer-middle">
                    <p>예수 그리스도의 은혜로 가정이 변화되는 가족 공동체 교회</p>
                </div>

                <div className="footer-right">
                    <div className="contact">
                        <p>Address<span>|</span></p>
                        <p>Email<span>|</span></p>
                        <p>Phone<span>|</span></p>
                    </div>
                    <div className="contact-info">
                        <p>7837 Canada Way Burnaby BC</p>
                        <p>jgrace.info@gmail.com</p>
                        <p>604 123 1234</p>
                    </div>
                </div>
            </div>
        )
    }
}