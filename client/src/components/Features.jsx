import React, { useRef } from 'react'
import { Card, CardHeader, CardBody, CardFooter,Text ,Stack,Image,Button,ChakraProvider, Img} from "@chakra-ui/react";
import {motion} from "framer-motion"
import Loading from './Loading';
import {Link} from "react-router-dom"
const Features = () => {
  const features =useRef(null)
  return (
    <>
      <div
        className="bg-[url(/featuresbg.jpg)] bg-cover h-screen bg-center "
        ref={features}
      >
        <h1 className="relative top-5 font-black lg:text-[40px] text-9 bg-white flex justify-center">
          Features
        </h1>
        <div className="flex lg:flex-row flex-col justify-center lg:gap-10 ">
          <Card
            width={"500px"}
            height={"570px"}
            backgroundColor={"rgba(255, 255, 255, 0.75)"}
            borderRadius={"10px"}
            margin={"100px"}
            _hover={{
              cursor: "pointer",

              transform: "translateY(-50px)",
            }}
          >
            <CardBody align={"center"}>
              <Image
                src="/card1.png"
                boxSize={"400px"}
                margin={"18px"}
                rounded={"10px"}
                shadow={"dark-lg"}
                dropShadow={"2xl"}
              ></Image>
              <Stack align={"center"}>
                <Text fontSize="2xl" as="b">
                  Weirdness Poll :
                </Text>
                <Text width={"300px"}>
                  Rate the weirdness level of various animes! Participate in the
                  poll and see how others rank them on the bizarre scale.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card
            width={"500px"}
            height={"560px"}
            backgroundColor={"rgba(255, 255, 255, 0.75)"}
            borderRadius={"10px"}
            margin={"100px"}
            _hover={{
              cursor: "pointer",
              transform: "translateY(-50px)",
            }}
          >
            <CardBody align={"center"}>
              <Image
                src="/card2.png"
                boxSize={"400px"}
                margin={"18px"}
                rounded={"10px"}
              ></Image>
              <Stack align={"center"}>
                <Text fontSize="2xl" as="b">
                  Anime Details :
                </Text>
                <Text width={"300px"}>
                  Explore detailed information on every anime, including title,
                  description, aired year, and genre—all in one place!
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </div>

        <ChakraProvider resetCSS={false}>
          <motion.div
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.5 }}
            className="inline-block"
          >
            <Link to={"/loading"}>
              <Button
                variant={"solid"}
                colorScheme={"yellow"}
                marginLeft={"900px"}
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
                className="cursor-pointer hover:scale-110"
              >
                Get started
              </Button>
            </Link>
          </motion.div>
        </ChakraProvider>
      </div>
    </>
  );
}

export default Features
