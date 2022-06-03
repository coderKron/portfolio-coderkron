import { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  VStack,
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
  useToast,
} from '@chakra-ui/react';

const ContactForm = () => {
  const [status, setStatus] = useState('Submit');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  const sendEmail = e => {
    e.preventDefault();
    const details = {
      name,
      email,
      message,
    };
    emailjs
      .sendForm(
        'service_q0qihn6',
        'template_0qcwdfr',
        e.target,
        'qMo-JPiN8G_72YjXY'
      )
      .then(res => {
        console.log(res);
        toast({
          title: 'Email send',
          description: 'We will be in touch with you!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setEmail('');
        setName('');
        setMessage('');
      })
      .catch(error => {
        console.log(error);
      });
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
            <div>
              <form
                onSubmit={sendEmail}
                style={{
                  flexDirection: 'column',
                  display: 'flex',
                  color: 'black',
                }}
              >
                <label style={{ color: 'white' }}>Name</label>
                <input
                  style={{ backgroundColor: 'white' }}
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  type="text"
                  name="name"
                />
                <br />
                <label style={{ color: 'white' }}>Email</label>
                <input
                  style={{ backgroundColor: 'white' }}
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  name="user_email"
                />
                <br />
                <label style={{ color: 'white' }}>Message</label>
                <textarea
                  style={{ backgroundColor: 'white' }}
                  value={message}
                  onChange={e => {
                    setMessage(e.target.value);
                  }}
                  name="message"
                  cols="20"
                  rows="5"
                ></textarea>
                <Stack alignItems={'center'} marginTop="20px">
                  <Button
                    type="submit"
                    variant={'solid'}
                    backgroundColor={mode('teal.300')}
                  >
                    Send
                  </Button>
                </Stack>
              </form>
            </div>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactForm;
