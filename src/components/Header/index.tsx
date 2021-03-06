import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';

import { Logo } from './Logo';
import { SearchBox } from './SearchBox';
import { Profile } from './Profile';
import { NotificationsNav } from './NotificationsNav';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

export function Header() {
  const { onOpen, onToggle } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton 
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          marginRight="2"
        >
        </IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}
    
      <Flex 
        alignItems="center"
        marginLeft="auto"
      >
        <NotificationsNav />
      
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}