import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { MockUsers } from "../mocks/mockUsers";
import { FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";
import { getLocaleAndMessages } from "../App";
import { LocaleEnum } from "../enums/enum-locale";

export function UsersTable() {
  const { locale } = getLocaleAndMessages();
  return (
    <Box p={2} w="100%">
      <TableContainer w="100%">
        <Table
          display="inline-block"
          border="1px solid"
          borderColor="gray.700"
          rounded="md"
          w="auto"
          shadow="lg"
        >
          <TableCaption m={0}>
            <FormattedMessage
              id="_qtdUsers"
              values={{ qtdUsers: MockUsers.length }}
            />
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Id.</Th>
              <Th>
                <FormattedMessage id="_name" />
              </Th>
              <Th>
                <FormattedMessage id="_birthDate" />
              </Th>
              <Th>
                <FormattedMessage id="_weight" />
              </Th>
              <Th>
                <FormattedMessage id="_salary" />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {MockUsers.map((user) => (
              <Tr>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>
                  <FormattedDate value={user.birthDate} />
                </Td>
                <Td>
                  <FormattedNumber value={user.weight} />
                </Td>
                <Td>
                  <FormattedNumber
                    value={user.salary}
                    style="currency"
                    currency={locale === LocaleEnum.ENGLISH ? "USD" : "BRL"}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
