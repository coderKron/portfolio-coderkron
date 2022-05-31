import { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  HStack,
  useColorModeValue as mode,
  Stack,
  StackDivider,
  Text,
  Textarea,
  Toast,
} from '@chakra-ui/react';
import axios from 'axios';
const ContactForm = () => {
  const [status, setStatus] = useState('Submit');
  const [topic, setTopic] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    let details = {
      topic,
      email,
      message,
    };
    axios
      .post(`${process.env.REACT_APP_URL}/api/contact`, details)
      .then(response => {
        console.log(response);
        setEmail('');
        setTopic('');
        setMessage('');
        Toast();
      })
      .catch(error => {
        console.log(error);
      });

    setStatus('Submit');
  };
  return (
    <Box backgroundColor={mode('gray.700')} color="white">
      <Container
        as={'section'}
        id="contact"
        py={{
          base: '4',
          md: '8',
        }}
      >
        <Box bg="bg-surface">
          <Container
            py={{
              base: '4',
              md: '8',
            }}
          >
            <HStack>
              <Divider />
              <Text fontSize="lg" fontWeight="medium" whiteSpace="nowrap">
                Contact me
              </Text>
              <Divider />
            </HStack>
          </Container>
        </Box>
        <Stack spacing="5">
          <Stack
            spacing="4"
            direction={{
              base: 'column',
              sm: 'row',
            }}
            justify="space-between"
          >
            <Box>
              <Text fontSize="lg" fontWeight="medium">
                Tips, Tricks, Advice, Job offers. All are welcome!
              </Text>
            </Box>
          </Stack>
          <Divider />
          <Stack spacing="5" divider={<StackDivider />}>
            <FormControl id="email">
              <Stack
                direction={{
                  base: 'column',
                  md: 'row',
                }}
                spacing={{
                  base: '1.5',
                  md: '8',
                }}
                justify="space-between"
              >
                <FormLabel variant="inline">Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                  maxW={{
                    md: '3xl',
                  }}
                  placeholder="someone@someone.com"
                />
              </Stack>
            </FormControl>
            <FormControl id="topic">
              <Stack
                direction={{
                  base: 'column',
                  md: 'row',
                }}
                spacing={{
                  base: '1.5',
                  md: '8',
                }}
                justify="space-between"
              >
                <FormLabel variant="inline">Topic</FormLabel>
                <Input
                  type="text"
                  maxW={{
                    md: '3xl',
                  }}
                  value={topic}
                  placeholder="E.G. Wanna collaborate?"
                  onChange={e => {
                    setTopic(e.target.value);
                  }}
                />
              </Stack>
            </FormControl>
            <FormControl id="bio">
              <Stack
                direction={{
                  base: 'column',
                  md: 'row',
                }}
                spacing={{
                  base: '1.5',
                  md: '8',
                }}
                justify="space-between"
              >
                <Box>
                  <FormLabel variant="inline">Message</FormLabel>
                  <FormHelperText mt="0" color="muted">
                    How can I be of service to you!
                  </FormHelperText>
                </Box>
                <Textarea
                  onChange={e => {
                    setMessage(e.target.value);
                  }}
                  value={message}
                  maxW={{
                    md: '3xl',
                  }}
                  rows={5}
                  resize="none"
                />
              </Stack>
            </FormControl>

            <Flex direction="row-reverse">
              <Button onClick={handleSubmit} variant="ghost">
                Send
              </Button>
            </Flex>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactForm;
