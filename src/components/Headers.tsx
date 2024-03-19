import { Box, Heading, Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { FormattedMessage } from "react-intl";
import { LocaleEnum } from "../enums/enum-locale";
import { getLocaleAndMessages } from "../App";

export function Header() {
  const { locale } = getLocaleAndMessages();

  function handleChangeLocale(e: ChangeEvent<HTMLSelectElement>) {
    localStorage.setItem("locale", e.target.value);
    window.location.reload();
  }

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      p={2}
      bgColor="gray.900"
    >
      <Heading>
        <FormattedMessage id="_internationalizing" />
      </Heading>
      <Select value={locale} onChange={handleChangeLocale} size="sm" w="200px">
        <option value={LocaleEnum.PORTUGUESE}>
          <FormattedMessage id="_portuguese" />
        </option>
        <option value={LocaleEnum.ENGLISH}>
          <FormattedMessage id="_english" />
        </option>
      </Select>
    </Box>
  );
}
