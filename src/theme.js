import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: "#111",
        color: mode("blackAlpha.900", "whiteAlpha.900")(props),
      },
    }),
  },
});

export const getParticlesTheme = () => {
  const particlesTheme = {
    fpsLimit: 60,

    particles: {
      color: {
        value: "#ff0000",
      },
      move: {
        bounce: true,
        direction: "top",
        enable: true,
        outModes: "out",
        random: true,
        speed: 5,
        straight: true,
      },
      number: { density: { enable: true, area: 900 }, value: 50 },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
  };
  return particlesTheme;
};
