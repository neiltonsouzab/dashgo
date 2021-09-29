import { Stack, Box } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      justifyContent="space-between"
      marginTop="8"
      alignItems="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - até <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row">
        <PaginationItem isCurrent number={1} />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
      </Stack>
    </Stack>
  )
}