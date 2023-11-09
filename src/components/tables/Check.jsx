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
  TableContainer,
  Checkbox,
} from "@chakra-ui/react";

const Check = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Check Table</Heading>
      </CardHeader>

      <CardBody py={2} px={5}>
        <TableContainer overflowX={"hidden"} overflowY={"auto"} maxH="296px">
          <Table variant="simple">
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
                <Td>
                  <Checkbox defaultChecked>Marketplace</Checkbox>
                </Td>
                <Td>75.5 (%)</Td>
                <Td>258</Td>
                <Td>Oct 24, 2022</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox>Marketplace</Checkbox>
                </Td>
                <Td>75.5 (%)</Td>
                <Td>258</Td>
                <Td>Oct 24, 2022</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox>Marketplace</Checkbox>
                </Td>
                <Td>75.5 (%)</Td>
                <Td>258</Td>
                <Td>Oct 24, 2022</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox>Marketplace</Checkbox>
                </Td>
                <Td>75.5 (%)</Td>
                <Td>258</Td>
                <Td>Oct 24, 2022</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox>Marketplace</Checkbox>
                </Td>
                <Td>75.5 (%)</Td>
                <Td>258</Td>
                <Td>Oct 24, 2022</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox>Marketplace</Checkbox>
                </Td>
                <Td>75.5 (%)</Td>
                <Td>258</Td>
                <Td>Oct 24, 2022</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox>Marketplace</Checkbox>
                </Td>
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

export default Check;
