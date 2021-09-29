import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex alignItems="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Neilton Barbosa</Text>
          <Text color="gray.300" fontSize="small" >neilton.souzab@gmail.com</Text>
        </Box>
      )}

      <Avatar 
        size="md"
        name="Neilton Barbosa"
        src="https://github.com/neiltonsouzab.png"
      />
    </Flex>
  )
}