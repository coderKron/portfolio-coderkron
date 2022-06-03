import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { Link } from 'react-scroll/modules';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import * as React from 'react';
import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box as="section" width={'100%'} zIndex={'5'} position="sticky" top={'0'}>
      <Box
        backgroundColor={mode('cyan.600', 'cyan.900')}
        as="nav"
        bg="bg-surface"
        boxShadow={mode('sm', 'sm-dark')}
      >
        <Container
          py={{
            base: '4',
            lg: '5',
          }}
        >
          <HStack spacing="10" justify="space-between">
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  <Button
                    style={{ cursor: 'pointer' }}
                    as={Link}
                    activeClass="active"
                    smooth
                    spy
                    to={'banner'}
                    color={'white'}
                  >
                    HOME
                  </Button>
                  <Button
                    style={{ cursor: 'pointer' }}
                    as={Link}
                    activeClass="active"
                    smooth
                    spy
                    to="about"
                    color={'white'}
                  >
                    ABOUT ME
                  </Button>
                  <Button
                    style={{ cursor: 'pointer' }}
                    as={Link}
                    activeClass="active"
                    smooth
                    spy
                    to="portfolio"
                    color={'white'}
                  >
                    PORTFOLIO
                  </Button>
                </ButtonGroup>
                <HStack>
                  <ColorModeSwitcher />
                  <Button
                    style={{ cursor: 'pointer' }}
                    as={Link}
                    activeClass="active"
                    smooth
                    spy
                    to="contact"
                    variant={'ghost'}
                    backgroundColor={mode('white', 'gray.800')}
                  >
                    CONTACT
                  </Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
export default Navbar;
