import { Container, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import { useMobileHook } from "../hooks/useMobile";
import homebg from "../assets/homebg.png";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { statsNumbers, urls } from "../assets/constants";
export const Home = () => {
  const mobile = useMobileHook();
  return (
    <Container maxW={"100%"}>
      <VStack
        mt={mobile ? 12 : -12}
        pt={mobile ? "60%" : "42%"}
        bgImg={mobile ? null : homebg}
        bgSize={"contain"}
        bgRepeat={"no-repeat"}
        minH={"100vh"}
        minW={"100%"}
        spacing={0}
        justifyContent={"flex-start"}
      >
        <VStack spacing={0} pl={12} alignSelf={"flex-start"}>
          <HStack wrap={"wrap"} spacing={mobile ? 0 : 9} minW={"100%"}>
            <Text color={"white"} fontSize={mobile ? 48 : 64} textAlign={"left"}>
              DOHYŌ
            </Text>
            <Text
              color={"white"}
              fontSize={mobile ? 48 : 64}
              textAlign={"left"}
              fontWeight={"bold"}
            >
              PROTOCOL
            </Text>
          </HStack>

          <HStack minW={"100%"} spacing={2}>
            <Text
              color={"white"}
              fontWeight={"bold"}
              fontSize={mobile ? 20 : 30}
              textAlign={"left"}
            >
              gamify
            </Text>
            <Text color={"white"} fontSize={mobile ? 20 : 30} textAlign={"left"}>
              like its meant to be
            </Text>
          </HStack>
          <HStack ml={mobile ? 0 : 12} pt={6} minW={"100%"} spacing={6}>
            <a href={urls.Discord} target="_blank" rel="noopener noreferrer">
              <FaDiscord color={"white"} size={32} />
            </a>
            <a href={urls.Twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter color={"white"} size={32} />
            </a>
            <a href={urls.Github} target="_blank" rel="noopener noreferrer">
              <FaGithub color={"white"} size={32} />
            </a>
          </HStack>
        </VStack>
      </VStack>
      <VStack minH={"100vh"} minW={"100%"} spacing={0} pb={12} mt={mobile ? -36 : -12}>
        <HStack
          justifyContent={mobile ? "center" : "space-between"}
          mt={0}
          wrap={"wrap"}
          pb={6}
          pt={12}
          minH={20}
          minW={"60%"}
          maxW={"80%"}
          spacing={0}
        >
          <VStack p={6} rounded={20} minW={36}>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"6xl"}
              fontWeight={"extrabold"}
            >
              {statsNumbers.roundsStarted}
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
            >
              rounds started
            </Text>
          </VStack>
          <VStack p={6} rounded={20} minW={36}>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"6xl"}
              fontWeight={"extrabold"}
            >
              {statsNumbers.bettingVolume}
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
            >
              betting volume
            </Text>
          </VStack>
          <VStack p={6} rounded={20} minW={36}>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"6xl"}
              fontWeight={"extrabold"}
            >
              {statsNumbers.biggestBet}
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
            >
              biggest bet
            </Text>
          </VStack>
          <VStack p={6} minW={36}>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"6xl"}
              fontWeight={"extrabold"}
            >
              {statsNumbers.biggestWin}
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
            >
              biggest win
            </Text>
          </VStack>
        </HStack>

        <HStack
          wrap={"wrap"}
          justifyContent={mobile ? "center" : "space-between"}
          pt={16}
          spacing={mobile ? 0 : 6}
          minW={20}
          minH={20}
        >
          <VStack p={6} bg={"whiteAlpha.100"} rounded={20} minW={38}>
            <Text
              textColor={"red.400"}
              textAlign={"center"}
              fontSize={"3xl"}
              fontWeight={"extrabold"}
            >
              No Play2Earn
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
              maxW={52}
            >
              Play2Earn economies are not sustainable in the long run. They mainly rely on
              pseudo-innovation and generic content generation.
            </Text>
          </VStack>{" "}
          {mobile && <VStack p={3} minW={36}></VStack>}
          <VStack p={6} bg={"whiteAlpha.100"} rounded={20} minW={38}>
            <Text
              textColor={"red.400"}
              textAlign={"center"}
              fontSize={"3xl"}
              fontWeight={"extrabold"}
            >
              No Metaverse
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
              maxW={52}
            >
              Metaverse games have massive issues with over promising and under
              delivering. This is due to the fact that good game developers and designers
              are rare in the web3 space.
            </Text>
          </VStack>
          {mobile && <VStack p={3} minW={36}></VStack>}
          <VStack bg={"whiteAlpha.100"} p={6} rounded={20} minW={36}>
            <Text
              textColor={"red.400"}
              textAlign={"center"}
              fontSize={"3xl"}
              fontWeight={"extrabold"}
            >
              No Randomness
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
              maxW={48}
            >
              The Gambling industry is deeply rooted in web2 and there is no real
              incentive for the average user to switch to web3. Also, crypto networks tend
              to have bad/ non-existent RNG oracle coverage.
            </Text>
          </VStack>
          {mobile && <VStack p={3} minW={36}></VStack>}
          <VStack p={6} bg={"whiteAlpha.100"} rounded={20} minW={36}>
            <Text
              textColor={"green.400"}
              textAlign={"center"}
              fontSize={"3xl"}
              fontWeight={"extrabold"}
            >
              Dohyo
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
              maxW={52}
            >
              Our games are simple and ready to be played. They don't depend on any
              in-game economy, development progress or randomness credibility.
            </Text>
          </VStack>
        </HStack>
        <Text
          pt={24}
          pb={24}
          textColor={"white"}
          textAlign={"center"}
          fontSize={"3xl"}
          fontWeight={"normal"}
        >
          Dohyō (土俵, Japanese: [doçoː]) is the space in which a sumo wrestling fight
          occurs.
        </Text>
        <VStack mb={12} mt={12} bg={"whiteAlpha.100"} p={6} rounded={20} minW={"66%"}>
          <Text
            textColor={"green.300"}
            textAlign={"center"}
            fontSize={"3xl"}
            fontWeight={"extrabold"}
          >
            Community integration
          </Text>
          <Text
            textColor={"white"}
            textAlign={"center"}
            fontSize={"lg"}
            fontWeight={"normal"}
            maxW={72}
          >
            We build on top of existing communities, instead of trying to create new ones.
            The goal is to extend established group dynamics by adding new layers of
            interaction. Anybody is free to join with their community and play against
            their friends.
          </Text>
        </VStack>
        <HStack
          justifyContent={mobile ? "center" : "space-between"}
          mt={0}
          wrap={"wrap"}
          pb={6}
          pt={12}
          minH={20}
          minW={"60%"}
          maxW={"80%"}
          spacing={0}
        >
          <VStack p={6} rounded={20} minW={36}>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"6xl"}
              fontWeight={"extrabold"}
            >
              {statsNumbers.players}
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
            >
              players
            </Text>
          </VStack>{" "}
          <VStack p={6} rounded={20} minW={36}>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"6xl"}
              fontWeight={"extrabold"}
            >
              {statsNumbers.communities}
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
            >
              communities
            </Text>
          </VStack>
          <VStack p={6} rounded={20} minW={36}>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"6xl"}
              fontWeight={"extrabold"}
            >
              {statsNumbers.partners}
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
            >
              partners
            </Text>
          </VStack>{" "}
          <VStack p={6} rounded={20} minW={36}>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"6xl"}
              fontWeight={"extrabold"}
            >
              {statsNumbers.smartContracts}
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
            >
              smart contracts
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};
