import logo_img from './logo_img.png';
import React, { useState } from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  VStack,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Center,
} from "@chakra-ui/react";

const Home = (props) => {
  const [transferAddress, setTranferAddress] = useState("");
  const [transferAmount, setTransferAmount] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const sendTransferMoney = () => {
    let data = {};
    data.amount = transferAmount;
    data.address = transferAddress;
    props.transferMoney(data);
  };
  return (
    <Box  bgImage="url('https://gameeon.in/wp-content/uploads/2023/06/website_background-scaled.jpg')">
      {!props.accountACC ? (
        <Flex
          w={"full"}
          minH={"91vh"}
          // bgGradient="linear(to-l, #0cebeb,#20e3b2,#29ffc6 )"
        >
          <Container maxW={"3xl"}>
            <Stack
              as={Box}
              textAlign={"center"}
              spacing={{ base: 8, md: 14 }}
              py={{ base: 20, md: 36 }}
              textColor={"white"}
              textalign={"center"}
            >
              <Heading
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                lineHeight={"150%"}
                color='white'
                textAlign={"center"}
              >
               
                
      
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={logo_img} alt="Logo" style={{ width: '100px' }}/>

                </div>
                Digi-Fi

<br />
                <Text
                  fontSize={{ base: "lg", sm: "xl", md: "3xl" }}
                  lineHeight={"50%"}
                  as={"span"}
                  color={"cyan.300"}
                  textalign={"center"}
                >
                  A Decentralized Bank
                
                </Text>
              </Heading>
              <Text color={"gray.50"}>
                {props.account
                  ? "Seems like you dont have a bank account, get one by clicking below button"
                  : "Connect your wallet to access full app!"}
              </Text>
              <Stack
                direction={"column"}
                spacing={3}
                align={"center"}
                alignSelf={"center"}
                position={"relative"}
              >
                {props.account ? (
                  <Button
                    colorScheme={"green"}
                    bg={"cyan.400"}
                    rounded={"full"}
                    px={6}
                    _hover={{
                      bg: "blue",
                    }}
                    onClick={() => props.createAccount()}
                  >
                    Create Account
                  </Button>
                ) : (
                  <Button
                    colorScheme={"blue"}
                    bg={"rgb(37, 150, 190)"}
                    rounded={"full"}
                    px={6}
                    _hover={{
                      bg: "blue",
                    }}
                    onClick={() => props.connectWallet()}
                  >
                    Connect Wallet
                  </Button>
                )}
              </Stack>
            </Stack>
          </Container>
        </Flex>
      ) : (
        
        <VStack p={["10", "4", "10"]} bgGradient="linear(to-b, #6190E8, #A7BFE8)" w={"full"} h={"full"}>
          <Flex
            padding="10px"
            border="1px"
            borderColor="black"
            borderRadius="10"
            boxShadow="lg"
            w={"full"}
            h={"full"}
            p={["2", "4", "8"]}
            
          >
            <VStack spacing="50px" w={"full"}>
              <VStack w={"full"}>
                <FormControl>
                  <FormLabel>Transfer Money</FormLabel>
                  <Input
                    value={transferAddress}
                    onChange={(e) => setTranferAddress(e.target.value)}
                    placeholder="Enter the reciver ETH address"
                    bg="easterblue"
                  />
                  <FormHelperText>Enter the reciver ETH address</FormHelperText>
                </FormControl>
              </VStack>

              <VStack spacing="200px" w={"full"}>
                <FormControl isRequired>
                  <FormLabel>Amount</FormLabel>
                  <Input
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                    placeholder="00"
                    bg="easterblue"
                  />
                </FormControl>
              </VStack>
              <VStack  align="left" mt="8" w={"full"}>
                <Button
                  onClick={sendTransferMoney}
                  colorScheme="teal"
                  size="md"
                  bg="blue.500"
                >
                  Send Money
                </Button>
              </VStack>
            </VStack>
          </Flex>
        <VStack spacing="240px"  p={["20", "10", "8"]}></VStack>
          <Stack spacing="20px" direction={["column", "row"]} w="full" >
            <Flex
              border="1px"
              borderColor="black"
              borderRadius="10"
              boxShadow="lg"

            
              w={"full"}
              p={["20", "10", "12"]}
            >
              <VStack spacing="24px" w={"full"} >
                <VStack w={"full"} >
                  <FormControl isRequired>
                    <FormLabel>Deposit Amount</FormLabel>
                    <Input
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      placeholder="00"
                      color={"black"}
                      bg="easterblue"
                    />
                  </FormControl>
                </VStack>
                <VStack align="left" mt="8" w={"full"}>
                  <Button
                    onClick={() => props.depositMoney(depositAmount)}
                    colorScheme="teal"
                    size="md"
                    bg="blue.500"
                  >
                    Deposit Money
                  </Button>
                </VStack>
              </VStack>
            </Flex>
            <Flex
              border="1px"
              borderColor="black"
              borderRadius="10"
              boxShadow="lg"
              w={"full"}
              
              p={["2", "4", "8"]}
            >
              <VStack spacing="24px" w={"full"}>
                <VStack w={"full"}>
                  <FormControl isRequired>
                    <FormLabel>Withdraw Amount</FormLabel>
                    <Input
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      placeholder="00"
                      bg="easterblue"
                    />
                  </FormControl>
                </VStack>
                <VStack align="left" mt="8" w={"full"}>
                  <Button
                    onClick={() => props.withdrawMoney(withdrawAmount)}
                    colorScheme="teal"
                    size="md"
                    bg="blue.500"
                  >
                    Withdraw Amount
                  </Button>
                </VStack>
               
              </VStack>
              
            </Flex>
          </Stack>
          <VStack spacing="26px"  p={["2", "4", "8"]}></VStack>
        </VStack>
      )}
    </Box>
  );
};

export default Home;
