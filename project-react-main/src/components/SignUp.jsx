import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // User data to post
      const userData = {
        email: email,
        password: password, // You can decide whether to store the password or not
      };

      // Post data to Firebase Realtime Database
      const response = await fetch(
        "https://skinstore-14d13-default-rtdb.asia-southeast1.firebasedatabase.app/users.json", // .json is important
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData), // convert user data to JSON
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      console.log("User data posted successfully:", userData);
      alert("New user created successfully!");

      // Reset form fields
      setEmail("");
      setPassword("");

      // Navigate to login page after sign up
      navigate("/login"); // Navigate to the login page
    } catch (error) {
      console.error("Error posting user data:", error.message);
      alert(error.message);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="gray.100"
    >
      <Box bg="white" p="10" boxShadow="md" borderRadius="md" w="450px">
        <Heading as="h2" size="md" mb="4">
          Sign Up
        </Heading>
        <form onSubmit={handleSignUp}>
          <FormControl mb="4">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>
          <Button
            type="submit"
            backgroundColor="#2E3337"
            color="white"
            w="full"
            mb="6"
            _hover={{ bg: "skyblue", color: "black" }}
          >
            SIGN UP
          </Button>
        </form>
        <Text textAlign="center" mb="4">
          Already have an account?{" "}
          <a href="/login" style={{ color: "orange.400" }}>
            Sign In
          </a>
        </Text>
      </Box>
    </Box>
  );
};
