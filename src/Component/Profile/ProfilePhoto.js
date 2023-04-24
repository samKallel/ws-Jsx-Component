import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import photo from '../../Image/PhProfile.jpg';
import '../../App.css';

const ProfilePhoto = () => {
  return (
    <div>
     <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image className='ph-profile' src={photo} rounded height={200} width={150} />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default ProfilePhoto
