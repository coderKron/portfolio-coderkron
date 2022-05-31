import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  useColorMode,
  useColorModeValue as mode,
  Divider,
  Text,
  HStack,
  Avatar,
  Button,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import coder from '../video/coder.mp4';
import Link from 'react-scroll/modules/components/Link';
function Homepage() {
  return (
    <Box
      id="banner"
      p={'0'}
      minH={'auto'}
      maxH={'max-content'}
      as="section"
      width={'100%'}
    >
      <Link
        style={{ cursor: 'pointer' }}
        activeClass="active"
        smooth
        spy
        to="about"
      >
        <Container p={'0'} className="App" maxHeight={'100%'} maxWidth={'100%'}>
          <video autoPlay loop muted>
            <source src={coder} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Container>
      </Link>
    </Box>
  );
}

export default Homepage;
