import { Box, Flex, Heading, Button, Divider, VStack, SimpleGrid, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../../components/Form/Input';
import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório.'),
  email: yup.string().email('E-mail inválido.').required('E-mail obrigatório.'),
  password: yup.string().required('Senha obrigatória.').min(6, 'No minimo 6 caracteres.'),
  password_confirmation: yup.string().oneOf([
    null,
    yup.ref('password'),
  ], 'As senhas precisam ser iguais.'),
}).required();


export default function UserCreate() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(data)
  }

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

        <Box
          as="form"
          flex="1"
          borderRadius="8"
          backgroundColor="gray.800"
          padding={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider marginY="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Input
                name="name"
                label="Nome
                completo"
                error={errors.name}
                {...register('name')} 
              />
              
              <Input
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...register('email')} 
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                {...register('password')} 
              />

              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação de senha"
                error={errors.password_confirmation}
                {...register('password_confirmation')} 
              />
            </SimpleGrid>
          </VStack>

          <Flex marginTop="8" justifyContent="flex-end">
            <HStack spacing="4">
              <Link passHref href="/users">
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Salvar  
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}