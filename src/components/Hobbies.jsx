import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Square,
  Stack,
  Text,
  Link,
  useBreakpointValue,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { dataHobbies } from '../data/data-hobbies';

const Hobbies = () => (
  <Box as="section" bg="bg-surface" backgroundColor={mode('gray.100')}>
    <Container
      maxW={'90%'}
      py={{
        base: '16',
        md: '24',
      }}
    >
      <Stack
        alignContent={'center'}
        alignItems="center"
        justifyContent={'center'}
        spacing={{
          base: '12',
          md: '16',
        }}
      >
        <Stack
          alignItems="center"
          justifyContent={'center'}
          textAlign="center"
          spacing={{
            base: '4',
            md: '5',
          }}
          maxW="3xl"
        >
          <Stack spacing="3">
            <Text
              fontSize={{
                base: 'sm',
                md: 'md',
              }}
              fontWeight="semibold"
              color="accent"
            >
              Hobbies
            </Text>
            <Heading
              size={useBreakpointValue({
                base: 'sm',
                md: 'md',
              })}
            >
              Get to know me!
            </Heading>
          </Stack>
          <Text
            color="muted"
            fontSize={{
              base: 'lg',
              md: 'xl',
            }}
          >
            These are the things I enjoy doing besides coding. It might give you
            a perspective on who I am.
          </Text>
        </Stack>
        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          spacing={{
            base: '12',
            lg: '16',
          }}
        >
          <Stack
            spacing={{
              base: '10',
              md: '12',
            }}
            maxW="xl"
            justify="center"
            width="full"
          >
            {dataHobbies.map(data => (
              <Stack key={data.name} spacing="4" direction="row">
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
                    as={data.icon}
                    boxSize={{
                      base: '5',
                      md: '6',
                    }}
                  />
                </Square>
                <Stack
                  spacing={{
                    base: '4',
                    md: '5',
                  }}
                  pt={{
                    base: '1.5',
                    md: '2.5',
                  }}
                >
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
                      {data.name}
                    </Text>
                    <Text color="muted">{data.description}</Text>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Box width="full" overflow="hidden">
            <Link as={'a'} target="_blank" href={'https://dnd.wizards.com/'}>
              <Image
                maxW="100%"
                minH={{
                  base: '100%',
                  lg: '560px',
                }}
                objectFit="cover"
                src="/images/dungeons.jpeg"
                alt="Developer"
              />
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Hobbies;
