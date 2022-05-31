import {
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Square,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
  Avatar,
  Link,
  Divider,
} from '@chakra-ui/react';
import * as React from 'react';
import { data } from '../data/data-about';
import Hobbies from './Hobbies';
import PersonalDetailsCard from './PersonalDetailsCard';

const About = () => (
  <Box id="about" as="section" bg="bg-surface" maxW={'100%'}>
    <PersonalDetailsCard />
    <Container
      maxW={'70%'}
      py={{
        base: '6',
        md: '8',
      }}
    >
      <Stack
        spacing={{
          base: '12',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '4',
            md: '5',
          }}
          align="center"
          textAlign="center"
        >
          <Heading>These are the skills I've learned up until now</Heading>
          <Text
            color="muted"
            fontSize={{
              base: 'lg',
              md: 'xl',
            }}
            maxW="3xl"
          >
            A very driven (sometimes overly driven), hard working and very
            honest worker. I can work in a team. But I also function well alone.
          </Text>
        </Stack>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          columnGap={8}
          rowGap={{
            base: 10,
            md: 16,
          }}
        >
          {data.map(dataAbout => (
            <Box
              backgroundColor={mode('teal.50', 'blue.800')}
              p="6"
              bg="bg-surface"
              boxShadow={mode('lg', 'lg-dark')}
              transition="all 0.2s"
              borderRadius="25px"
              height="full"
            >
              <Square
                size={{
                  base: '10',
                  md: '12',
                }}
                bg="accent"
                color="inverted"
                borderRadius="lg"
              >
                <Icon
                  as={dataAbout.icon}
                  boxSize={{
                    base: '5',
                    md: '6',
                  }}
                />
              </Square>
              <Stack
                spacing={{
                  base: '1',
                  md: '2',
                }}
              >
                <Text
                  fontSize={{
                    base: 'lg',
                    md: 'xl',
                  }}
                  fontWeight="medium"
                >
                  {dataAbout.name}
                </Text>
                <Text color="muted">{dataAbout.description}</Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
    <Divider paddingTop={'55px'} />
    <Hobbies />
  </Box>
);
export default About;
