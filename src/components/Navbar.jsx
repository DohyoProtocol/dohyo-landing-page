import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  Button,
  Box,
  useDisclosure,
  Text,
  Flex,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import { StyledButton } from "./StyledButton";
import { useMobileHook } from "../hooks/useMobile";
import { toastTypes, urls } from "../assets/constants";
import { useToastHook } from "../hooks/useToast";

export const Navbar = () => {
  const mobile = useMobileHook();
  const { newToast } = useToastHook();

  const {
    isOpen: drawerIsOpen,
    onOpen: drawerOnOpen,
    onClose: drawerOnClose,
  } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Box
        zIndex={100}
        minW={"100%"}
        pos={"fixed"}
        mt={mobile ? 0 : "22px"}
        minH={20}
        bg={"#111"}
        justifyItems={"center"}
      >
        <Box maxW={"90%"} mr={"auto"} ml={"auto"}>
          {mobile ? (
            <>
              <Flex
                align="center"
                justify="left"
                boxSize="full"
                width={"100%"}
                position="static"
                pt={2}
              >
                <StyledButton onClick={drawerOnOpen} text={"Menu"} />
                <Spacer />
                <Button
                  fontSize={"3xl"}
                  m={3}
                  color={"whiteAlpha.900"}
                  bg={"red.600"}
                  _hover={{ bg: "red.600" }}
                >
                  DOHYŌ
                </Button>
              </Flex>
              <Drawer
                size={"md"}
                isOpen={drawerIsOpen}
                placement="left"
                onClose={drawerOnClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />

                <DrawerContent bg={"#000000"}>
                  <DrawerBody mt={12}>
                    <SimpleGrid columns={1}>
                      <Text m={3} color="white">
                        Dohyō
                      </Text>
                      <StyledButton
                        m={3}
                        onClick={() => {
                          // window.open(urls.Dapp, "_blank");
                          newToast("App is not online yet", toastTypes.SORRY, 3000);
                        }}
                        text={"Go to App"}
                      />

                      <Text m={3} color="white">
                        Socials
                      </Text>
                      <StyledButton
                        m={3}
                        onClick={() => {
                          window.open(urls.Github, "_blank");
                        }}
                        text={"Github"}
                      />
                      <StyledButton
                        m={3}
                        onClick={() => {
                          window.open(urls.Discord, "_blank");
                        }}
                        text={"Discord"}
                      />
                      <StyledButton
                        m={3}
                        onClick={() => {
                          window.open(urls.Twitter, "_blank");
                        }}
                        text={"Twitter"}
                      />
                    </SimpleGrid>
                  </DrawerBody>

                  <DrawerFooter>
                    <StyledButton onClick={drawerOnClose} text={"x"} m={3} />
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </>
          ) : (
            <Flex
              pt={2}
              align="center"
              pos="relative"
              justify="left"
              boxSize="full"
              width={"100%"}
              position="static"
            >
              <Flex
                align="center"
                pos="relative"
                justify="left"
                boxSize="full"
                minW={"100%"}
                position="static"
              >
                <Button
                  fontSize={"3xl"}
                  m={3}
                  ml={0}
                  color={"whiteAlpha.900"}
                  bg={"red.600"}
                  _hover={{ bg: "red.600" }}
                  cursor={"default"}
                >
                  DOHYŌ
                </Button>

                <Spacer />
                <Button
                  fontSize={"xl"}
                  m={3}
                  mr={0}
                  color={"red.600"}
                  bg={"whiteAlpha.900"}
                  _hover={{ bg: "whiteAlpha.700" }}
                  onClick={() => {
                    // window.open(urls.Dapp, "_blank");
                    newToast("App is not online yet", toastTypes.SORRY, 3000);
                  }}
                >
                  Launch App
                </Button>
              </Flex>
              <Flex
                align="center"
                pos="relative"
                justify="right"
                boxSize="full"
                width={"100%"}
                position="static"
              ></Flex>
            </Flex>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
