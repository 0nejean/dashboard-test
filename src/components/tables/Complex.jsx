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
  Progress,
} from "@chakra-ui/react";
import apple from "../../assets/images/tables/apple.svg";
import android from "../../assets/images/tables/android.svg";
import windows from "../../assets/images/tables/windows.svg";
import { CheckCircleIcon, QuestionIcon, WarningIcon } from "@chakra-ui/icons";

const data = [
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: windows,
        alt: "windows",
      },
    ],
    status: <CheckCircleIcon mr="10px" color="#01B574" />,
    text: "Approved",
    percentage: 100,
  },
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: windows,
        alt: "windows",
      },
    ],
    status: <CheckCircleIcon mr="10px" color="#01B574" />,
    text: "Approved",
    percentage: 100,
  },
  {
    title: "Marketplace2",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: windows,
        alt: "windows",
      },
    ],
    status: <QuestionIcon mr="10px" color="#EE5D50" />,
    text: "Disable",
    percentage: 50,
  },

  {
    title: "Marketplace4",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: windows,
        alt: "windows",
      },
    ],
    status: <WarningIcon mr="10px" color="#ffb547" />,
    text: "Error",
    percentage: 0,
  },
];

const Complex = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Complex Table</Heading>
      </CardHeader>

      <CardBody py={2} px={5}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>NAME</Th>
                <Th isSTATUS>STATUS</Th>
                <Th>DATE</Th>
                <Th>PROGRESS</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, index) => (
                <Tr>
                  <Td>Marketplace</Td>
                  <Td isSTATUS>
                    {item.status}
                    {item.text}
                  </Td>
                  <Td>Oct 24, 2022</Td>
                  <Td>
                    <Progress w="63px" ml="10px" value={item.percentage} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default Complex;
