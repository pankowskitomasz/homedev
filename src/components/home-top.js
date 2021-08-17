import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";

class HomeTop extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-light" className="rounded-pill border-green text-green">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"align-items-center p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100">
                    <Col xs={12} lg={6} className="p-0 d-flex align-items-center order-2 order-lg-1">
                        <img alt="about"
                            className="img-fluid mx-auto w-75"
                            src="img/home/home-img.png"/>
                    </Col>
                    <Col xs={12} lg={6} className="mx-auto py-5 d-flex align-items-center order-1 order-lg-2">
                        <div className="p-5 text-lg-start text-center">
                            <h1 className="display-5 text-green fw-bold text-uppercase text-shadow">
                                New Home! 
                            </h1>
                            <h1 className="display-3 text-lime fw-bold text-uppercase text-shadow">
                                New life!
                            </h1>
                            <p className="text-green pe-lg-5">
                                If have ever wondered when is the best moment to buy new home
                                now is the time! Don't wait! Check our offer now!
                            </p>
                            {linking}
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default HomeTop;