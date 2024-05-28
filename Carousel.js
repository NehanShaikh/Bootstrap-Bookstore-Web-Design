import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://th.bing.com/th/id/OIP.e-z_OEbFAhpvEtY9GHMJMQAAAA?rs=1&pid=ImgDetMain"
                    alt="First slide"
                    style={{ height: '300px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>John Doe Volume 4</h3>
                    <p>Best seller of the month.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.bublish.com/book/get_cover/1217"
                    alt="Second slide"
                    style={{ height: '300px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>The Final Push</h3>
                    <p>Top-rated book of the year.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://media.npr.org/assets/bakertaylor/covers/o/out/9781400078370_custom-b6c0103581fc68a26617749a5df1b20126a18dc9-s1200-c15.jpg"
                    alt="Third slide"
                    style={{ height: '300px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Reading Noir</h3>
                    <p>Highly recommended by readers.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;
