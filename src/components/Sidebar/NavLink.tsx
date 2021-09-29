import { ElementType } from "react";
import { Link as ChakraLink, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps ) {
  return (
    <ActiveLink passHref href={href}>
      <ChakraLink 
        display="flex" 
        alignItems="center" 
        _hover={{
          textDecoration: 'none',
          color: "pink.500",
        }}
        {...rest}
      >
        <Icon as={icon} fontSize="20" />
        <Text textDecorationStyle="dashed" marginLeft="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}