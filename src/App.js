import { Navbar } from "./components/Navbar";
import { Home } from "./views/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Particles from "react-tsparticles";
import { getParticlesTheme } from "./theme";
import { HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import { useMobileHook } from "./hooks/useMobile";

export const App = () => {
  const mobile = useMobileHook();
  return (
    <>
      <VStack minH={"100vh"} minW={"100vw"} spacing={0}>
        <Particles options={getParticlesTheme()} />
        <Navbar />
        <Switch>
          <Route path={"/"}>
            <Home />
          </Route>
        </Switch>
        {!mobile && (
          <>
            <Spacer />
            <HStack bottom={0} h={6} bg={"white"} justifyContent={"center"} w={"100vw"}>
              <HStack spacing={12} bottom={0} h={6} justifyContent={"center"} w={"90vw"}>
                <Text textAlign={"center"} fontWeight={"extrabold"} color={"black"}>
                  {"{ * O * } DOHYŌ!!!"}
                </Text>
                <Text textAlign={"center"} fontWeight={"extrabold"} color={"black"}>
                  {"{ - _ - } ZZZzz zz z..."}
                </Text>
              </HStack>
            </HStack>
          </>
        )}
      </VStack>
    </>
  );
};
