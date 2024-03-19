import { Box, ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Headers";
import { UsersTable } from "./components/UsersTable";
import { IntlProvider } from "react-intl";
import { LocaleEnum } from "./enums/enum-locale";
import { EnglishMessage, PortugueseMessage } from "./languages";
interface IGetLocaleAndMessages {
  locale: LocaleEnum;
  messages: typeof PortugueseMessage;
}

export function getLocaleAndMessages(): IGetLocaleAndMessages {
  const locale = localStorage.getItem("locale");
  switch (locale) {
    case LocaleEnum.ENGLISH:
      return {
        locale: LocaleEnum.ENGLISH,
        messages: EnglishMessage,
      };
    case LocaleEnum.PORTUGUESE:
      return {
        locale: LocaleEnum.PORTUGUESE,
        messages: PortugueseMessage,
      };
    default:
      return {
        locale: LocaleEnum.PORTUGUESE,
        messages: PortugueseMessage,
      };
  }
}

const { locale, messages } = getLocaleAndMessages();

function App() {
  return (
    <IntlProvider locale={locale} messages={messages}>
      <ChakraProvider>
        <Box w="100%">
          <Header />
          <UsersTable />
        </Box>
      </ChakraProvider>
    </IntlProvider>
  );
}

export default App;
