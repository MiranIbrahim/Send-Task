import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  ("");
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const handleLogin = () => {};

  return (
    <div>
      <VStack spacing={5} mb={3}>
        <Button color="red." w={'full'} mt={3} onClick={handleLogin}>
          Log in with <FaGoogle style={{ marginLeft: '5px' }} />
        </Button>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              type={show ? "text" : "password"}
            />
            <InputRightElement w={"4.5rem"}>
              <Button h={"1.75rem"} size={"md"} onClick={handleClick}>
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button colorScheme="blue" w={"100%"} mt={3} onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </div>
  );
};
export default Login;
