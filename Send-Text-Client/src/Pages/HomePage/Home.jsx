import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
  } from "@chakra-ui/react";
  import Login from "../../Components/Authentication/Login";
  import SignUp from "../../Components/Authentication/SignUp";
  
  const Home = () => {
    return (
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent={"center"}
          p={3}
          bg={"white"}
          w={"100%"}
          m="40px 0px 15px 0"
          borderRadius={"lg"}
          borderWidth={"1px"}
          textAlign={"center"}
        >
          <Text fontSize={"4xl"} fontFamily={"Work sans"}>
            Send-Text.com
          </Text>
        </Box>
        <Box
          bgColor={"white"}
          color={'black'}
          w={"100%"}
          borderRadius={"lg"}
          borderWidth={"1px"}
          p={3}
        >
          <Tabs variant="soft-rounded" >
            <TabList>
              <Tab w={'50%'}>Login</Tab>
              <Tab w={'50%'}>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login></Login>
              </TabPanel>
              <TabPanel>
                <SignUp></SignUp>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    );
  };
  
  export default Home;
  