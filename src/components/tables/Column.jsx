import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Column = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">4-Column Table</Heading>
      </CardHeader>

      <CardBody py={2} px={5}>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>

            <Thead>
              <Tr>
                <Th>NAME</Th>
                <Th>PROGRESS</Th>
                <Th>QUANTITY</Th>
                <Th>DATE</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Marketplace</Td>
                <Td>75.5 (%)</Td>
                <Td>258</Td>
                <Td>Oct 24, 2022</Td>
              </Tr>
              <Tr>
                <Td>Marketplace</Td>
                <Td>75.5 (%)</Td>
                <Td>258</Td>
                <Td>Oct 24, 2022</Td>
              </Tr>
              <Tr>
                <Td>Marketplace</Td>
                <Td>75.5 (%)</Td>
                <Td>258</Td>
                <Td>Oct 24, 2022</Td>
              </Tr>
              <Tr>
                <Td>Marketplace</Td>
                <Td>75.5 (%)</Td>
                <Td>258</Td>
                <Td>Oct 24, 2022</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default Column;
