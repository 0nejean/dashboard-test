import React from "react";
import Header from "./header/Header";
import styled from "styled-components";
import Title from "../common/Tilte";
import History from "../common/History";
import { Box } from "@chakra-ui/react";
import { Flex, Spacer, IconButton, Input } from "@chakra-ui/react";
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
              <IconButton
                bg="transparents"
                mr="10px"
                aria-label="Search database"
                icon={<SearchIcon />}
              />
              <Input mr="10px" placeholder="Search" border="none" />
              <BellIcon mr="10px" />
              <InfoOutlineIcon mr="10px" />
              <HamburgerIcon mr="10px" />
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
