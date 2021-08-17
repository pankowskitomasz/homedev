import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class AboutDesc extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-dark" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"bg-about-desc p-0 minh-50vh d-flex align-items-center border-bottom border-lime py-3 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 py-5 ">
                    <Col xs={12} md={6} className="text-center text-md-start p-4 d-flex align-items-center ">
                        <div className="ps-md-4">
                            <h2 className="mb-3 mt-5 fw-bold text-green">
                                The Begining
                            </h2>
                            <p className="lead">
                                As an independent construction company we focused on representing the best 
                                quality, we build a wide range of properties dedicated for living. Our 
                                company was founded in 2014 and since then grown into a locally recognized 
                                brand with a strong position on market.                         
                            </p>
                            {linking}
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="text-center ms-auto d-flex align-items-center p-0">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/about/about-desc.png"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default AboutDesc;