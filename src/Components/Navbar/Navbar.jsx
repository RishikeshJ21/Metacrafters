import logo from './logo.png';
import { ReactNode, useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  useClipboard,
} from "@chakra-ui/react";

// import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { MdOutlineContentCopy } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { RiCopperCoinFill } from "react-icons/ri";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Nav(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onCopy, value, setValue, hasCopied } = useClipboard("");

  useEffect(() => {
    updateAddress();
  }, [props.account]);

  const updateAddress = () => {
    setValue(props.account);
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} >
          <Box>
          <img src={logo} alt="Your Logo" style={{ width: '100%', height: '100%' }} /> 
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button> */}
              {props.account ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    cursor={"pointer"}
                    minW={0}
                    onClick={() => props.checkBallence()}
                  >
                    <Button rounded={"full"} colorScheme="teal" variant="ghost">
                      <RiCopperCoinFill /> {props.balance ? props.balance : 0}
                    </Button>
                    <Avatar
                      size={"sm"}
                      src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4268b68a-4f13-4775-bd03-b350aff3197d/d7wtwpj-af632b90-3cda-44d4-bc18-c689ed5a3922.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQyNjhiNjhhLTRmMTMtNDc3NS1iZDAzLWIzNTBhZmYzMTk3ZFwvZDd3dHdwai1hZjYzMmI5MC0zY2RhLTQ0ZDQtYmMxOC1jNjg5ZWQ1YTM5MjIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jiO727pAi_xPVf6wNWoe1T8RH_cocHJVmko6rV7xBt8"}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4268b68a-4f13-4775-bd03-b350aff3197d/d7wtwpj-af632b90-3cda-44d4-bc18-c689ed5a3922.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQyNjhiNjhhLTRmMTMtNDc3NS1iZDAzLWIzNTBhZmYzMTk3ZFwvZDd3dHdwai1hZjYzMmI5MC0zY2RhLTQ0ZDQtYmMxOC1jNjg5ZWQ1YTM5MjIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jiO727pAi_xPVf6wNWoe1T8RH_cocHJVmko6rV7xBt8"
                        }
                      />
                    </Center>
                    <br />
                    <Center pl={4}>
                      <Text as="span" noOfLines={1} maxWidth={"200px"}>
                        {props.account}
                      </Text>
                      <Button
                        onClick={onCopy}
                        colorScheme="teal"
                        variant="ghost"
                      >
                        <MdOutlineContentCopy />
                      </Button>
                    </Center>
                    <br />
                    {/* <MenuDivider /> */}
                    <MenuItem>
                      Balance: {props.balance ? props.balance : 0}{" "}
                      <HiOutlineRefresh onClick={() => props.checkBallence()} />
                    </MenuItem>
                    <MenuItem onClick={() => props.logout()}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Button
                  onClick={() => props.connectWallet()}
                  colorScheme="blue"
                  size="md"
                >
                  Connect wallet
                </Button>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
