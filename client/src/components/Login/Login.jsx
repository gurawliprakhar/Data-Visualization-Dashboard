import React, { useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Text,
  Link,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for Remember Me checkbox

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call to authenticate user
      // Replace this with your actual authentication logic
      await authenticateUser('admin@gmail.com', 'admin');

      // If authentication succeeds, redirect to dashboard
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
        window.location.href = '/dashboard';
      }, 2000);
    } catch (error) {
      // If authentication fails, display error message
      setError('Invalid username or password');
    } finally {
      setIsLoading(false);
    }
  };

  const authenticateUser = async (email, password) => {
    // Simulate API call to authenticate user
    // Replace this with your actual authentication logic
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@gmail.com' && password === 'admin') {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  };

  return (
    <Box
      bg="linear-gradient(to bottom right, #4F3BA9, #9068BE)"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        borderColor="white" 
        textAlign="center"
      >
        <h1 style={{ color: 'white' }}>Welcome Admin !!!</h1>
        <form onSubmit={handleLogin}>
          <FormControl>
            <FormLabel style={{ color: 'white' }}>Admin Email</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              disabled={isLoading}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel style={{ color: 'white' }}>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              disabled={isLoading}
            />
          </FormControl>
          <Flex justifyContent="space-between" alignItems="center" mt={4}>
            <FormControl display="flex" alignItems="center" mr={4}>
              <Input
                type="checkbox"
                id="rememberMe"
                onChange={() => setRememberMe(!rememberMe)}
                colorScheme="green"
                size="sm"
              />
              <FormLabel htmlFor="rememberMe" ml={2} mb={0} color="white">
                Remember Me
              </FormLabel>
            </FormControl>
            <Text color="white">
              <Link href="#" color="green.300">
                Forgot Password?
              </Link>
            </Text>
          </Flex>
          <Button colorScheme="green" mt={6} w="100%" type="submit" isLoading={isLoading}>
            Login
          </Button>
          {error && (
            <Box mt={4} color="red.500">
              {error}
            </Box>
          )}
          <Text mt={4} color="white">
            New on Platform?{' '}
            <Link href="#" color="green.300">
              Create an Account
            </Link>
          </Text>
          <Text mt={4} color="white">
            Sign in with:
          </Text>
          <HStack spacing={4} justify="center" mt={4}>
            <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
              Facebook
            </Button>
            <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
              Twitter
            </Button>
            <Button colorScheme="red" leftIcon={<FaGoogle />}>
              Google
            </Button>
          </HStack>
          {/* AlertDialog */}
          <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined}>
            <AlertDialogOverlay>
              <AlertDialogContent bg="purple.800" color="white">
                <AlertDialogHeader>Welcome Admin !!!</AlertDialogHeader>
                <AlertDialogBody>
                  Redirecting to the dashboard page...
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
