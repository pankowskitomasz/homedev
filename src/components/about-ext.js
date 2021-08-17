import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class AboutExt extends Component{
    render(){
        return(        
            <Container fluid className={"bg-about-ext p-0 minh-50vh d-flex align-items-center border-bottom border-green py-3 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5">
                    <Col xs={12} md={6} className="text-center mx-auto order-2 order-md-1 d-flex align-items-center">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/about/about-ext.png"/>
                    </Col>
                    <Col xs={12} md={6} className="text-center text-md-start p-4 d-flex align-items-center order-1 order-md-2">
                        <div className="pe-md-4">
                            <h2 className="mb-3 mt-5 text-lime text-shadow-white">
                                Why Trust Us
                            </h2>
                            <p className="lead">
                                We offer a huge selection of best quality properties for living, 
                                all in one convenient locations. We are passionate about our goal 
                                of bringing the best offer across the city. We pride ourselves 
                                on not only carrying a large selection of premium properties, but also 
                                leading in local customer service rankings.     
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>      
        );
    }
}

export default AboutExt;