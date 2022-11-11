import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Res(props) {
    const location = useLocation();
    console.log(location)

    return (
        <Container style={{fontSize:'30pt'}}>
            <Row>
                <Col>
                    <img src={location.state.img} style={{height:'60vh'}}/>
                </Col>
                <Col>
                    <Container>
                        <Row>
                            <Col>PM2.5</Col>
                            <Col>0</Col>
                            <Col><span style={{color:'green'}}>좋음</span></Col>
                        </Row>
                        <Row>
                            <Col>PM10</Col>
                            <Col>0</Col>
                            <Col><span style={{color:'green'}}>좋음</span></Col>
                        </Row>
                        <Row>
                            <Col>O3</Col>
                            <Col>0</Col>
                            <Col><span style={{color:'green'}}>좋음</span></Col>
                        </Row>
                        <Row>
                            <Col>NO2</Col>
                            <Col>0</Col>
                            <Col><span style={{color:'green'}}>좋음</span></Col>
                        </Row>
                        <Row>
                            <Col>CO</Col>
                            <Col>0</Col>
                            <Col><span style={{color:'green'}}>좋음</span></Col>
                        </Row>
                        <Row>
                            <Col>SO2</Col>
                            <Col>0</Col>
                            <Col><span style={{color:'green'}}>좋음</span></Col>
                        </Row>
                    </Container>
                    <br/>
                    <Row>
                        <Col>미세먼지 : <span style={{color:'green'}}>좋음</span></Col>
                    </Row>
                    <Row>
                        <Col>대기오염 : <span style={{color:'green'}}>좋음</span></Col>
                    </Row>
                    <Row>
                        <Col><span style={{color:'green'}}>쾌적</span></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        // <div>
            
        //     <img src={location.state.img} style={{height:'60vh'}}/>
        //     <div>good</div>
        // </div>
    );
}

export default Res;
