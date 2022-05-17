import { Header } from "../../components/HeaderDashboard";
import { MainAreaCooker } from "../../components/mainAreaCokker";
import { AsideDashboard } from "../../components/asideDashboard";
import { Footer } from "../../components/Footer";

import { Flex, Box, useDisclosure } from "@chakra-ui/react";

import { useContext } from "react";
import { UserContext } from "../../providers/user/index";

import imgPerfil from "../../assets/iconsDashboard/foto.svg";
import icon1 from "../../assets/iconsDashboard/iconHome.svg";
import icon2 from "../../assets/iconsDashboard/iconList.svg";
import icon3 from "../../assets/iconsDashboard/iconApertoDeMao.svg";
import icon4 from "../../assets/iconsDashboard/iconPergunta.svg";
import icon5 from "../../assets/iconsDashboard/iconSuporte.svg";

export const DashboardPrestador = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <Box>
      <Box h="10vh">
        <Header onOpen={onOpen} />
      </Box>
      <Box>
        <Flex h="90vh">
          <Box w={["0vw", "0vw", "0vw", "0vw", "20vw", "15vw"]}>
            <AsideDashboard
              corBody="#A69C5D"
              fotoUser={imgPerfil}
              nomeUser="Alysson Colombo"
              icon1={icon1}
              icon2={icon2}
              icon3={icon3}
              icon4={icon4}
              icon5={icon5}
              textIcon1="Dashboard"
              textIcon2="Buscar novas propostas"
              textIcon3="Ver propostas aceitas"
              textIcon4="Perguntas frequentes"
              textIcon5="Fale com a central"
              baseColor="#12120E"
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              link1="/admin"
              link2="/proposals-cookers"
              link3="/all-proposals"
            />
          </Box>

          <Box
            w={["100vw", "100vw", "100vw", "100vw", "80vw", "85vw"]}
            ml={["10px", "10px", "15px", "25px", "37px"]}
            mr={["10px", "10px", "15px", "25px", "37px"]}
          >
            <MainAreaCooker
              concluidos={user.qntAccepted}
              faturamento={user.faturado}
            />
          </Box>
        </Flex>
      </Box>
      <Box h="5vh">
        <Footer />
      </Box>
    </Box>
  );
};
