import { Container, HStack, Text, VStack, Button } from "@chakra-ui/react";
import { useMobileHook } from "../hooks/useMobile";
import homebg from "../assets/homebg.png";
import boxbg from "../assets/boxbg.jpeg";
import boxbg2 from "../assets/boxbg2.jpeg";
import { FaDiscord, FaExternalLinkAlt, FaGithub, FaTwitter } from "react-icons/fa";
import { useToastHook } from "../hooks/useToast";
import { statsNumbers, toastTypes, urls } from "../assets/constants";
export const Home = () => {
  const mobile = useMobileHook();

  const { newToast } = useToastHook();

  return (
    <Container maxW={"100%"}>
      <VStack
        mt={mobile ? 12 : -12}
        pt={mobile ? "60%" : "42%"}
        // bgImg={mobile ? null : homebg}
        // bgSize={"contain"}
        // bgRepeat={"no-repeat"}
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
              fontWeight={"normal"}
              fontSize={mobile ? 20 : 30}
              textAlign={"left"}
            >
              Gamify
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
              Games Started
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
              Betting Volume
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
              Biggest Bet
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
              Biggest Pot
            </Text>
          </VStack>
        </HStack>
        <HStack
          wrap={"wrap"}
          justifyContent={mobile ? "center" : "space-between"}
          pt={16}
          spacing={mobile ? 0 : 6}
          minH={20}
          minW={"80%"}
          maxW={"80%"}
        >
          <VStack
            alignItems={"left"}
            justifyContent={"space-between"}
            rounded={20}
            mb={mobile ? 12 : 0}
            minH={64}
          >
            <Text
              textAlign={mobile ? "center" : "left"}
              fontSize={"3xl"}
              fontWeight={"normal"}
              maxW={72}
            >
              Small but powerful blockchain games.
            </Text>
            <Text
              textColor={"white"}
              textAlign={mobile ? "center" : "left"}
              fontSize={"lg"}
              fontWeight={"normal"}
              maxW={72}
            >
              Dohyō games are made to be played on the fly. Basically whenever you are not
              busy trading. They require minimal effort while still keeping you hooked.
            </Text>
          </VStack>
          <VStack
            bgImg={boxbg}
            bgSize={"initial"}
            bgPos={mobile ? "100% 0%" : "0% 50%"}
            p={6}
            minW={"50%"}
            rounded={20}
            minH={64}
          >
            <Button
              p={6}
              m={6}
              ml={mobile ? undefined : "auto"}
              minW={mobile ? "100%" : undefined}
              mt={"auto"}
              textAlign={"left"}
              rightIcon={<FaExternalLinkAlt size={14} />}
              bgImg={boxbg}
              bgSize={"initial"}
              bgPos={mobile ? "30% 50%" : "30% 0%"}
              fontSize={"lg"}
              fontWeight={"normal"}
              onClick={() => {
                // window.open(urls.Dapp, "_blank");
                newToast("Documentation is not online yet", toastTypes.SORRY, 3000);
              }}
            >
              Documentation
            </Button>
          </VStack>
        </HStack>
        <Text
          pt={36}
          textColor={"white"}
          textAlign={"center"}
          fontSize={"3xl"}
          fontWeight={"normal"}
        >
          Dohyō (土俵, Japanese: [doçoː]) is the space in which a sumo wrestling fight
          occurs.
        </Text>

        <HStack
          wrap={"wrap"}
          justifyContent={mobile ? "center" : "space-between"}
          pt={24}
          spacing={mobile ? 0 : 6}
          minW={20}
          minH={20}
        >
          <VStack
            bgImg={boxbg2}
            bgSize={"initial"}
            bgPos={mobile ? "100% 33%" : "20% 50%"}
            mt={mobile ? 12 : 0}
            p={6}
            rounded={20}
            minW={36}
          >
            <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"normal"}>
              Community Integration
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
              maxW={72}
            >
              Our games build on top of existing communities, instead of trying to create
              new ones. The goal is to extend established group dynamics by adding new
              layers of interaction. Anybody is free to join with their community and play
              against their friends.
            </Text>
          </VStack>
          {mobile && <VStack p={3} minW={36}></VStack>}
          <VStack
            mb={12}
            bgImg={boxbg2}
            bgSize={"initial"}
            bgPos={mobile ? "100% 66%" : "20% 85%"}
            mt={mobile ? 12 : 0}
            p={6}
            rounded={20}
            minW={36}
          >
            <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"normal"}>
              Dohyo Ambassadors
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
              maxW={72}
            >
              The community will periodically elect a marketing representative, who will
              receive a fixed percentage of the accumulating protocol fees. To assure that
              marketing actions are actually being taken, only buy transactions will be
              rewarded. This system allows a clean and transparent marketing strategy,
              where no funds are spent off-chain, outside of investor control.
            </Text>
          </VStack>
          {mobile && <VStack p={3} minW={36}></VStack>}
          <VStack
            bgImg={boxbg2}
            bgSize={"initial"}
            bgPos={mobile ? "100% 100%" : "40% 100%"}
            justifyContent={"space-between"}
            mb={12}
            p={6}
            mt={12}
            rounded={20}
            minW={72}
          >
            <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"normal"}>
              Smart Contracts
            </Text>
            <Button
              p={6}
              rightIcon={<FaExternalLinkAlt size={14} />}
              m={6}
              minW={"100%"}
              textAlign={"left"}
              bgImg={boxbg}
              bgSize={"initial"}
              bgPos={mobile ? "100% 60%" : "0% 80%"}
              fontSize={"lg"}
              fontWeight={"normal"}
              onClick={() => {
                // window.open(urls.Dapp, "_blank");
                newToast("Documentation is not online yet", toastTypes.SORRY, 3000);
              }}
            >
              Games
            </Button>{" "}
            <Button
              p={6}
              m={6}
              minW={"100%"}
              rightIcon={<FaExternalLinkAlt size={14} />}
              textAlign={"left"}
              bgImg={boxbg}
              bgSize={"initial"}
              bgPos={mobile ? "100% 70%" : "20% 80%"}
              fontSize={"lg"}
              onClick={() => {
                // window.open(urls.Dapp, "_blank");
                newToast("Documentation is not online yet", toastTypes.SORRY, 3000);
              }}
              fontWeight={"normal"}
            >
              Dohyo Chef
            </Button>{" "}
            <Button
              p={6}
              m={6}
              minW={"100%"}
              textAlign={"left"}
              bgImg={boxbg}
              rightIcon={<FaExternalLinkAlt size={14} />}
              bgSize={"initial"}
              bgPos={mobile ? "100% 80%" : "40% 80%"}
              fontSize={"lg"}
              onClick={() => {
                // window.open(urls.Dapp, "_blank");
                newToast("Documentation is not online yet", toastTypes.SORRY, 3000);
              }}
              fontWeight={"normal"}
            >
              Erc20
            </Button>{" "}
            <Button
              p={6}
              m={6}
              minW={"100%"}
              textAlign={"left"}
              rightIcon={<FaExternalLinkAlt size={14} />}
              bgImg={boxbg}
              bgSize={"initial"}
              bgPos={mobile ? "100% 90%" : "60% 80%"}
              fontSize={"lg"}
              onClick={() => {
                // window.open(urls.Dapp, "_blank");
                newToast("Documentation is not online yet", toastTypes.SORRY, 3000);
              }}
              fontWeight={"normal"}
            >
              Utils
            </Button>
          </VStack>
        </HStack>
        <HStack
          justifyContent={mobile ? "center" : "space-between"}
          mt={0}
          wrap={"wrap"}
          pb={24}
          pt={20}
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
              Players
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
              Communities
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
              Partners
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
              Smart Contracts
            </Text>
          </VStack>
        </HStack>
        <HStack
          wrap={"wrap"}
          justifyContent={mobile ? "center" : "space-between"}
          spacing={mobile ? 0 : 6}
          pb={12}
          minW={20}
        >
          <VStack
            bgImg={boxbg}
            bgSize={"initial"}
            bgPos={mobile ? "100% 0%" : "0% 50%"}
            p={6}
            rounded={20}
            minW={38}
            minH={64}
          >
            <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"normal"}>
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
          <VStack
            p={6}
            bgImg={boxbg}
            bgSize={"initial"}
            bgPos={mobile ? "100% 33%" : "33% 50%"}
            rounded={20}
            minW={38}
          >
            <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"normal"}>
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
          <VStack
            bgImg={boxbg}
            bgSize={"initial"}
            bgPos={mobile ? "100% 66%" : "66% 50%"}
            p={6}
            rounded={20}
            minW={36}
          >
            <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"normal"}>
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
          <VStack
            p={6}
            bgImg={boxbg}
            bgSize={"initial"}
            bgPos={mobile ? "100% 100%" : "100% 50%"}
            rounded={20}
            minW={36}
          >
            <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"normal"}>
              Dohyō
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
      </VStack>
    </Container>
  );
};
