import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Link,
  Wrap,
} from '@chakra-ui/react';
import * as React from 'react';
import { HiCash, HiLocationMarker, HiShieldCheck } from 'react-icons/hi';
import { Card } from './Card';

const PersonalDetailsCard = () => (
  <Box as="section" bg={useColorModeValue('gray.100', 'blue.800')} py="12">
    <Card>
      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
        spacing={{
          base: '3',
          md: '10',
        }}
        align="flex-start"
      >
        <Stack zIndex={'1'} spacing="4">
          <Avatar
            _focus={''}
            size="2xl"
            src="/images/team-picture-ruben.jpeg"
            name="Ruben B Poelen"
          />
          <Button width="full" colorScheme="blue">
            Contact me
          </Button>
        </Stack>
        <Box>
          <Stack
            spacing={{
              base: '1',
              md: '2',
            }}
            direction={{
              base: 'column',
              md: 'row',
            }}
          >
            <Text as="h2" fontWeight="bold" fontSize="xl">
              Ruben Poelen
            </Text>
            <HStack
              fontSize={{
                base: 'md',
                md: 'lg',
              }}
            >
              <Link
                as={'a'}
                target="_blank"
                href={'https://www.linkedin.com/in/ruben-poelen-10171414a/'}
              >
                <Text
                  as="span"
                  color={useColorModeValue('gray.500', 'gray.300')}
                  lineHeight="1"
                >
                  @Ruben Poelen
                </Text>
              </Link>
              <Icon as={HiShieldCheck} color="green.500" />
            </HStack>
          </Stack>
          <Text mt="2">Junior Full-Stack Developer</Text>
          <Wrap shouldWrapChildren my="4" spacing="4">
            <HStack>
              <Icon as={HiCash} fontSize="xl" color="gray.400" />
              <Text
                fontSize="sm"
                fontWeight="medium"
                color={useColorModeValue('gray.600', 'gray.300')}
              >
                <b>3</b> projects completed
              </Text>
            </HStack>

            <HStack spacing="1">
              <Icon as={HiLocationMarker} color="gray.400" />
              <Text
                fontSize="sm"
                fontWeight="medium"
                color={useColorModeValue('gray.600', 'gray.300')}
              >
                The Hague, NL
              </Text>
            </HStack>
          </Wrap>
          <Box fontSize="sm" noOfLines={2}>
            Hi, I am a professional Graphic Designer and Web Developer. I am a
            member of Evolving team [login to view URL] and I have experience of
            5+ years even before joining this.
          </Box>
          <Wrap
            shouldWrapChildren
            mt="5"
            color={useColorModeValue('gray.600', 'gray.300')}
          >
            {[
              'JavaScript',
              'HTML5',
              'CSS3',
              'Web Design',
              'ExpressJS',
              'NodeJS',
              'React.JS',
              'MongoDb',
            ].map(tag => (
              <Tag key={tag} color="inherit" px="3">
                {tag}
              </Tag>
            ))}
          </Wrap>
        </Box>
      </Stack>
      <Button
        mt="8"
        width="full"
        colorScheme="blue"
        display={{
          md: 'none',
        }}
      >
        Contact me
      </Button>
    </Card>
  </Box>
);
export default PersonalDetailsCard;
