import React from "react";
import {
  Box,
  Flex,
  Container,
  Input,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
  useColorMode,
  useToast,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, BellIcon, MoonIcon, SunIcon, AddIcon } from "@chakra-ui/icons";
import { FaLanguage } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  const handleUploadPhoto = () => {
    // Implement your photo upload logic here
    toast({
      title: "Upload Photo",
      description: "Photo upload functionality is not yet implemented.",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleLanguageChange = (language) => {
    // Implement language change logic here
    toast({
      title: "Language Changed",
      description: `Switched to ${language}`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box
      py={2}
      bgGradient="linear(to-b, #4F3BA9, #9068BE)"
      position="sticky"
      top={0}
      zIndex={100}
    >
      <Container maxW="container.lg">
        <Flex justify="flex-end" align="center">
          <Box>
            <Flex align="center">
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<AddIcon boxSize={6} />}
                  variant="unstyled"
                />
                <MenuList>
                  <MenuItem onClick={() => handleLanguageChange('English')}>
                    <FaLanguage style={{ marginRight: '0.5em' }} /> English
                  </MenuItem>
                  <MenuItem onClick={() => handleLanguageChange('Spanish')}>
                    <FaLanguage style={{ marginRight: '0.5em' }} /> Spanish
                  </MenuItem>
                  {/* Add more language options as needed */}
                </MenuList>
              </Menu>
              <IconButton
                aria-label="Toggle Theme"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                bg="transparent"
                border="none"
                onClick={toggleColorMode}
              />
              <IconButton
                aria-label="Notifications"
                icon={<BellIcon boxSize={6} />}
                bg="transparent"
                border="none"
              >
                <Badge colorScheme="red" color="red">
                  3
                </Badge>
              </IconButton>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<ChevronDownIcon boxSize={6} />}
                  variant="unstyled"
                />
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem onClick={handleUploadPhoto}>
                    Upload Photo
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
