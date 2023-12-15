import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './logo.svg';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import './all.css';

const Landing = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    }
    return (

        <Container fluid className='justify-content-center'>
            <Row>
                {/* Navbar component */}
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home"><h2>AutoPost</h2></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Button variant="primary" as='a' href='/api/' >
                                Get Started
                            </Button>
                        </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
            <Row >
                <Col>
                    <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme='dark' >
                        <Carousel.Item interval={2000} style={{height:'95vh', width:'95vw'}}>
                            <img
                                className='logo'
                                src={ExampleCarouselImage}
                                alt="First slide"
                                />
                            <Carousel.Caption>
                                <h3>Post on your social media platforms wiht just a click</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <Button  as='a' href='/api/'>Get started</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000} style={{height:'95vh', width:'95vw'}}>
                            <img
                                className='logo'
                                src={ExampleCarouselImage}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Login and Out of social media accounts</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <Button  as='a' href='/api/'>Get started</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000} style={{height:'95vh', width:'95vw'}}>
                            <img
                                className='logo'
                                src={ExampleCarouselImage} 
                                alt="Third slide" />
                            <Carousel.Caption>
                                <h3>Post text and pictures to several social media accounts</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                                <Button  as='a' href='/api/'>Get started</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row className='m-5'>
                <Col style={{fontSize:'1.3rem'}} className='box-1'>
                    <h1>Welcome to AutoPost - Make posts with just a click</h1>
                    <div style={{width:'75vw'}}>
                        <p style={{textAlign:'justify'}}>With just a click you can post to your social media handles effortlessly. Our product help people to ease the navigation and flatform transfer. We are happy you choose our product, you have mmade the right choice. Your social media keys are safe with us</p>
                    </div>
                </Col>
            </Row>
            <Row className='m-5'>
                <Col></Col>
                <Col style={{fontSize:'1.3rem'}} className='box-2'>
                    <h1 id='about'>About AutoPost</h1>
                    <div style={{float:'right', width:'75vw'}}>
                    <p style={{textAlign:'justify'}}>Welcome to AutopPost, where the magic of literature meets the digital age. At UxerDL, we are passionate believers in the transformative power of books. Our virtual library is not just a collection of texts; it's a gateway to a world of knowledge, a haven for book enthusiasts, and a space where the written word comes to life in the digital realm.
Whether you're an avid reader, a dedicated student, or someone simply looking to explore new realms of knowledge, we extend a warm invitation for you to embark on a literary journey with us. Immerse yourself in the boundless possibilities of our curated collection, where each book is a key that unlocks new perspectives, ideas, and adventures.</p>
                    </div>
                </Col>
            </Row>
            <Row>
            <footer className="bg-dark text-light mt-5">
                <Container>
                    <Row>
                        <Col className="text-center py-3">
                            <p>&copy; {new Date().getFullYear()} AutoPost. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
            </Row>
        </Container>
    )
};

export default  Landing;
