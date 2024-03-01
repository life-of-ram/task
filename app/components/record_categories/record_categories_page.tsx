'use client';
import {
  Flex,
  Box,
  Text,
  Button,
  ActionIcon,
  Divider,
  SimpleGrid,
  Paper,
  Avatar,
  Anchor,
} from '@mantine/core';
import { IconBell } from '@tabler/icons-react';
import papers from './papers.js';

export default function RecordCategoriesPage({ activePage }: { activePage: string }) {
  return (
    <>
      <Flex direction="column" w={'100%'}>
        <Box w={'100%'}>
          <Flex align="center" justify="space-between" w={'100%'}>
            <Text size="24px" fw={'600'} p={'20px 36px'} lh={'36px'}>
              {activePage == 'Record Categories' ? 'Login Management' : activePage}
            </Text>
            <ActionIcon
              variant="outline"
              color="rgba(234, 236, 238, 1)"
              size="xl"
              radius="xl"
              mr={20}
              aria-label="BellIcon"
            >
              <IconBell color="rgba(0,0,0,1)" />
            </ActionIcon>
          </Flex>
          <Divider w={'100%'} ml={'5px'} size={'xs'} />
        </Box>
        <Box w={'100%'}>
          <Flex align="center" justify="space-between" w={'100%'}>
            <Text size="20px" fw={'600'} p={'20px 36px'} lh={'24px'} c={'rgba(55, 63, 71, 1)'}>
              {activePage}
            </Text>
            <Button variant="filled" size="md" radius="xl" mr={20}>
              Add Category
            </Button>
          </Flex>
          <Divider w={'100%'} ml={'5px'} size={'xs'} />
        </Box>
        <SimpleGrid
          cols={{ base: 1, xs: 1, sm: 2, lg: 3, xl: 4 }}
          spacing={'lg'}
          verticalSpacing={{ base: 'sm', sm: 'xl' }}
          p={24}
          m="24px"
          style={{ border: '1px solid rgba(234, 236, 238, 1)', borderRadius: '12px' }}
        >
          {papers.map((paper) => {
            return (
              <Anchor href={paper.url} td='none'>
                <Paper
                  bg={'rgba(246, 250, 254, 1)'}
                  h={'88px'}
                  w={'252px'}
                  m="auto"
                  style={{ cursor: 'pointer' }}
                >
                  <Flex direction="row" align="center" gap="md" p="23px">
                    <Avatar src={paper.logo} w="42px" h="42px" radius="0"></Avatar>
                    <Text size="16px" c={'rgba(36, 45, 53, 1)'}>
                      {paper.name}
                    </Text>
                  </Flex>
                </Paper>
              </Anchor>
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
}
