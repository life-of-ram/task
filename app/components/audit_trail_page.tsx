'use client';
import { Box, Text, Divider, Flex, Button, Table, Select, ActionIcon } from '@mantine/core';
import { IconBell } from '@tabler/icons-react';
import { useState } from 'react';
import React from 'react';

export default function AuditTrailPage({ activePage }: { activePage: string }) {
  const [activeButton, setActiveButton] = useState('All');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  const TH = (
    <Table.Thead>
      <Table.Tr
        style={{
          background: 'rgba(246, 250, 254, 1)',
          fontWeight: 'bold',
          color: 'rgba(79, 91, 103, 1)',
        }}
      >
        <Table.Th>Action</Table.Th>
        <Table.Th>Performed By</Table.Th>
        <Table.Th>Performed At</Table.Th>
      </Table.Tr>
    </Table.Thead>
  );
  return (
    <Box w="100%">
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
      <Divider ml={10} />
      <Box w={'100%'}>
        <Flex align="center" w={'100%'}>
          <Box>
            {['All', 'Folders', 'Users', 'User Groups', 'Login/Logout'].map((buttonName) => (
              <Button
                key={buttonName}
                variant={activeButton === buttonName ? 'filled' : 'outline'}
                onClick={() => handleButtonClick(buttonName)}
                radius={20}
                m={20}
                ml={buttonName === 'All' ? 40 : 0}
              >
                {buttonName}
              </Button>
            ))}
          </Box>
          <Select pos="absolute" right={20} label="Date" placeholder="Today" data={[]} />
        </Flex>
        <Divider w={'100%'} ml={'5px'} size={'xs'} />
        <Box>
          <Box m={20}>
            <Table withTableBorder ta="left" m={20} mt={0} w={'96%'} cellPadding={20}>
              {TH}
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(241, 241, 241, 1)' }}>
                  <td>
                    <Box>
                      User{' '}
                      <Text size="14px" display="inline" c="blue">
                        Ravi Prajwal
                      </Text>{' '}
                      Added to the Group{' '}
                      <Text size="14px" display="inline" c="blue">
                        Project Admin
                      </Text>
                    </Box>
                  </td>
                  <td>Rajeshwaran</td>
                  <td>Jan 5,2024 01:00 PM</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(241, 241, 241, 1)' }}>
                  <td>
                    <Box>
                      User{' '}
                      <Text size="14px" display="inline" c="blue">
                        Ravi Prajwal
                      </Text>{' '}
                      Added to the Group{' '}
                      <Text size="14px" display="inline" c="blue">
                        Project Admin
                      </Text>
                    </Box>
                  </td>
                  <td>Rajeshwaran</td>
                  <td>Jan 5,2024 01:00 PM</td>
                </tr>{' '}
                <tr style={{ borderBottom: '1px solid rgba(241, 241, 241, 1)' }}>
                  <td>
                    <Box>
                      User{' '}
                      <Text size="14px" display="inline" c="blue">
                        Ravi Prajwal
                      </Text>{' '}
                      Added to the Group{' '}
                      <Text size="14px" display="inline" c="blue">
                        Project Admin
                      </Text>
                    </Box>
                  </td>
                  <td>Rajeshwaran</td>
                  <td>Jan 5,2024 01:00 PM</td>
                </tr>{' '}
                <tr style={{ borderBottom: '1px solid rgba(241, 241, 241, 1)' }}>
                  <td>
                    <Box>
                      User{' '}
                      <Text size="14px" display="inline" c="blue">
                        Ravi Prajwal
                      </Text>{' '}
                      Added to the Group{' '}
                      <Text size="14px" display="inline" c="blue">
                        Project Admin
                      </Text>
                    </Box>
                  </td>
                  <td>Rajeshwaran</td>
                  <td>Jan 5,2024 01:00 PM</td>
                </tr>
              </tbody>
            </Table>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
