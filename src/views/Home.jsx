import { Container, HStack, Text, VStack, Button, Spacer, Image } from "@chakra-ui/react";
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
        pt={mobile ? "20%" : "15%"}
        minH={"100vh"}
        minW={"100%"}
        spacing={0}
        justifyContent={"flex-start"}
      >
        <Image
          pl={mobile ? 6 : 12}
          alignSelf={"flex-start"}
          height={72}
          src="https://i.seadn.io/gcs/files/bb4cc8a1aca26bc552307e83d2d94e77.png?auto=format&w=1000"
          alt="gm"
        />
        <VStack spacing={0} pl={mobile ? 6 : 12} pt={"6%"} alignSelf={"flex-start"}>
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
      <VStack minH={"100vh"} minW={"100%"} spacing={0} pb={12} mt={mobile ? -12 : -12}>
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
              Dohyō games are designed for seamless play, allowing you to engage whenever
              you have a moment between trading activities. They offer a captivating
              experience with minimal effort required.
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
              Community Program
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
              maxW={72}
            >
              Games on the Dohyō platform embrace existing communities, enriching group
              dynamics by introducing new layers of interaction. Players are welcome to
              join with their own communities, engaging in friendly competition against
              their friends.
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
              Ambassador Program
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
              maxW={72}
            >
              The community will periodically elect a marketing representative who will be
              rewarded with a fixed percentage of the accumulated protocol fees. To ensure
              effective marketing efforts, rewards will be limited to buy transactions.
              This approach fosters a transparent marketing strategy, where all funds
              remain within investor sight and no off-chain spending occurs.
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
            {" "}
            <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"normal"}>
              Partner Program
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
              maxW={72}
            >
              Partners will be rewarded with a fixed percentage of the house rake from
              games played with their currency. This approach provides increased utility
              for partners and broader audiences for Dohyō games.
            </Text>
          </VStack>
        </HStack>
        <HStack
          justifyContent={mobile ? "center" : "space-between"}
          mt={0}
          wrap={"wrap"}
          pb={12}
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
          pt={16}
          spacing={mobile ? 0 : 6}
          minH={20}
          minW={"80%"}
          maxW={"80%"}
          pb={36}
        >
          <VStack
            bgImg={boxbg}
            bgSize={"initial"}
            bgPos={mobile ? "100% 0%" : "0% 50%"}
            p={6}
            minW={"50%"}
            alignItems={"flex-start"}
            rounded={20}
            minH={64}
          >
            <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"normal"}>
              Smart Contracts
            </Text>
            <Spacer />
            <HStack>
              <Button
                p={6}
                rightIcon={<FaExternalLinkAlt size={14} />}
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
              </Button>
              <Button
                p={6}
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
            </HStack>
            <HStack>
              <Button
                p={6}
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
            </HStack>
          </VStack>
          <VStack alignItems={"left"} rounded={20} mb={mobile ? 12 : 0} minH={64}>
            <Text
              textAlign={mobile ? "center" : "left"}
              fontSize={"3xl"}
              fontWeight={"normal"}
              maxW={72}
            >
              100% on-chain
            </Text>
            <Text
              textColor={"white"}
              textAlign={mobile ? "center" : "left"}
              fontSize={"lg"}
              fontWeight={"normal"}
              maxW={72}
            >
              100% of the game logic is stored on the blockchain. This allows for a
              trustless and transparent experience, with no risk for server outage or
              database corruption.
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
            minW={36}
          >
            <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"normal"}>
              No Play2Earn
            </Text>
            <Text
              textColor={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={"normal"}
              maxW={72}
            >
              Play2Earn economies lack long-term sustainability, primarily relying on
              superficial innovation and generic content generation.
            </Text>
          </VStack>{" "}
          {mobile && <VStack p={3} minW={36}></VStack>}
          <VStack
            bgImg={boxbg}
            bgSize={"initial"}
            bgPos={mobile ? "100% 33%" : "33% 50%"}
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
              maxW={72}
            >
              The Gambling industry remains deeply rooted in web2, lacking genuine
              incentives for the average user to transition to web3. Additionally, crypto
              networks often suffer from inadequate or non-existent RNG oracle coverage.
            </Text>
          </VStack>{" "}
          {mobile && <VStack p={3} minW={36}></VStack>}
          <VStack
            p={6}
            bgImg={boxbg}
            bgSize={"initial"}
            bgPos={mobile ? "100% 66%" : "66% 50%"}
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
              maxW={72}
            >
              Metaverse games often fall short of expectations, overpromising and
              underdelivering due to the scarcity of skilled game developers and designers
              within the web3 space.
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};
