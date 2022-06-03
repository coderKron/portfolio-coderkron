import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
  useToast,
} from '@chakra-ui/react';
import * as React from 'react';
import { posts } from '../data/data-portfolio';

const Portfolio = () => {
  const toast = useToast();
  const handleAlreadyHere = url => {
    if (url === 'already') {
      toast({
        title: 'Already here',
        description: "You haven't even left. Why are you clicking this! :(",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      return;
    }
  };
  return (
    <Container
      id="portfolio"
      as={'section'}
      backgroundColor={mode('white', 'blue.800')}
      position="relative"
      maxWidth={'100%'}
      py={{
        base: '16',
        md: '24',
      }}
    >
      <Stack
        spacing={{
          base: '16',
          md: '24',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            md: '10',
          }}
          align="center"
        >
          <Stack
            spacing={{
              base: '4',
              md: '6',
            }}
            textAlign="center"
          >
            <Stack spacing="4">
              <Heading
                size={useBreakpointValue({
                  base: 'md',
                  md: 'lg',
                })}
              >
                Portfolio
              </Heading>
            </Stack>
            <Text
              fontSize={{
                base: 'lg',
                md: 'xl',
              }}
              maxW="2xl"
              color="muted"
            >
              My current creations.
            </Text>
          </Stack>
        </Stack>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          rowGap={{
            base: '8',
            md: '12',
          }}
          columnGap="8"
        >
          {posts.map(post => (
            <Box
              backgroundColor={mode('teal.50', 'gray.800')}
              p="6"
              bg="bg-surface"
              boxShadow={mode('lg', 'lg-dark')}
              _groupHover={{
                boxShadow: mode('xl', 'xl-dark'),
              }}
              transition="all 0.2s"
              borderRadius="25px"
              height="full"
            >
              <Link
                as={'a'}
                target="_blank"
                href={post.url === 'already' ? undefined : post.url}
                key={post.id}
                onClick={e => {
                  handleAlreadyHere(post.url);
                }}
                _hover={{
                  textDecor: 'none',
                }}
                role="group"
              >
                <Stack
                  spacing={{
                    base: '8',
                    lg: '16',
                  }}
                  justify="space-between"
                  height="full"
                >
                  <Stack spacing="8">
                    <Box overflow="hidden">
                      <Image
                        borderRadius="25px"
                        src={post.image}
                        alt={post.title}
                        width="full"
                        height="15rem"
                        objectFit="cover"
                        transition="all 0.2s"
                        _groupHover={{
                          transform: 'scale(1.05)',
                        }}
                      />
                    </Box>
                    <Stack spacing="3">
                      <Text fontSize="sm" fontWeight="semibold" color="accent">
                        {post.category}
                      </Text>
                      <Heading size="xs">{post.title}</Heading>
                      <Text color="muted">{post.excerpt}</Text>
                    </Stack>
                  </Stack>
                </Stack>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default Portfolio;
