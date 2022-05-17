import   './Footer.styles';
import * as React from "react"
import { Wrapper } from './Header.styles';


const Footer = () => {
        return (
        <Wrapper>
                <div className="">
                    <div className="">
                        <div className="">
                            <h4 className="ui inverted header">Contact Us</h4>
                            <div className="ui inverted link list">
                                <a href="#" className="item">+420 731 082 290</a>
                                <a href="#" className="item">spotfinder@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
        </Wrapper>
        );
}

export default Footer;