import React,{Component} from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/esm/Table";

class TitleTextTableLeft extends Component{
    render(){
        return(        
            <Container fluid className={"align-items-center d-flex px-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 minh-footer-adj mt-5 py-5">
                    <Col xs={12} md={6} lg={6} className="text-dark minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center text-md-start text-white ps-md-5">
                            <h2 className="dispaly-6 fw-bold text-green opacity-8">
                                Pricing table
                            </h2>
                            <p className="text-green">
                                Each plan considers the client's lifestyle, building codes and principles 
                                of good design. We're also experts in building homes for Vancouver's, often 
                                challenging, lot sizes. This ability to come up with innovative solutions, 
                                has always been our strength. We see a difficult building site as an 
                                opportunity to flex our creative muscle. Challenges are impetus to 
                                continually learn and grow, fueling our  passion to enhance the 
                                neighbourhoods of the lower mainland.
                            </p>
                            <Table hover striped>
                                <thead>
                                    <tr className="text-lime">
                                        <th className="w-25">House</th>
                                        <th className="w-50">Description</th>
                                        <th className="w-25">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>   
        );
    }
}

export default TitleTextTableLeft;