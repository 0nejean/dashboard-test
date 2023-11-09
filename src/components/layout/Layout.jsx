import React from "react";
import Header from "./header/Header";
import styled from "styled-components";
import Title from "../common/Tilte";
import History from "../common/History";
import {
  Box,
  Flex,
  Spacer,
  InputGroup,
  InputLeftElement,
  Input,
  Image,
} from "@chakra-ui/react";
import {
  SearchIcon,
  BellIcon,
  InfoOutlineIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

const Layout = ({ title, pagename, children }) => {
  // const { pagename, children } = props;
  return (
    <Wrap>
      <Header />
      <main id="main">
        <Flex>
          <Box p="0 0 35px 10px" bg={"Secondary-grey-300"}>
            <History pagename={pagename} />
            <Title title={title} />
          </Box>
          <Spacer />
          <Box
            width="422px"
            height="60px"
            bg="white"
            padding="10px"
            borderRadius="70px"
          >
            <Flex justifyContent="space-around" alignItems="center">
              <InputGroup
                width="230px"
                bg="gray.100"
                borderRadius="70px"
                borderColor={"white"}
              >
                <InputLeftElement pointerEvents="none">
                  <SearchIcon ml="10px" mr="10px" color="gray.600" />
                </InputLeftElement>
                <Input type="Search" placeholder="Search" borderRadius="70px" />
              </InputGroup>

              <BellIcon mr="10px" />
              <InfoOutlineIcon mr="10px" />
              <HamburgerIcon mr="10px" />
              <Image
                borderRadius="full"
                boxSize="30px"
                src="https://images.unsplash.com/photo-1613328007570-379c5b22317d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fCVFQiVCMCU5NCVFQyU5RCVCNCVFQyU5OCVBQyVFQiVBMCU5QiVFRCU4QyVBOCVFRCU4NCVCNHxlbnwwfHwwfHx8MA%3D%3D"
                alt="pattern"
              />
            </Flex>
          </Box>
        </Flex>
        {children}
      </main>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 290px;
  background: var(--secondary-grey-300, #f4f7fe);
  #main {
    min-height: 100vh;
    padding: 50px 20px;
  }
`;

export default Layout;
