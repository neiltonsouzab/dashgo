import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Td, Tbody, Checkbox, Text, useBreakpointValue } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import Link from 'next/link';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Box>
      <Header /> 

      <Flex
        width="100%"
        marginY="6"
        marginX="auto"
        paddingX="6"
        maxWidth={1480}
      >
        <Sidebar />

        <Box flex="1" borderRadius="8" backgroundColor="gray.800" padding="8">
          <Flex marginBottom="9" justifyContent="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Link passHref href="/users/create">
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th paddingX={["4", "4", "6"]} color="gray.300" width="32">
                  <Checkbox colorScheme="pink" />
                </Th>

                <Th>
                  Usuário
                </Th>

                {isWideVersion && <Th>Data de cadastro</Th>}
                
                <Th width="8" />
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td paddingX={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Diego Fernandes</Text>
                    <Text fontSize="small" color="gray.300">diego.schell.f@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril, 2021</Td>}

                <Td>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                    {isWideVersion ? 'Editar' : '' }
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}