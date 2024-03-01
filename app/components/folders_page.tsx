'use client';
import {
  Accordion,
  Image,
  Text,
  Flex,
  Box,
  Divider,
  Input,
  ActionIcon,
  Button,
} from '@mantine/core';
import { IconSearch, IconBell } from '@tabler/icons-react';
export default function FoldersPage({ activePage }: { activePage: string }) {
  return (
    <>
      <Box pr={80} style={{ borderRight: '2px solid rgba(241, 241, 241, 1)' }}>
        <Text m={20} ml={40} fw={600} size="24px">
          {activePage}
        </Text>
        <Accordion chevronPosition="left" miw={240}>
          <Accordion.Item value="Folder 1">
            <Accordion.Control>
              <Flex align="center" gap={10}>
                <Image src="/folder_icon_small.svg" w={18} h={13} /> <Text>Folder 1</Text>
              </Flex>
            </Accordion.Control>
            <Accordion.Panel>
              <Accordion chevronPosition="left">
                <Accordion.Item value="Bank Account">
                  <Accordion.Control>
                    <Flex align="center" gap={10}>
                      <Image src="/folder_icon_small.svg" w={18} h={13} /> <Text>Bank Account</Text>
                    </Flex>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Accordion chevronPosition="left" miw={240}>
                      <Accordion.Item value="Folder 1">
                        <Accordion.Control>
                          <Flex align="center" gap={10}>
                            <Image src="/folder_icon_small.svg" w={18} h={13} />{' '}
                            <Text>State Bank</Text>
                          </Flex>
                        </Accordion.Control>
                      </Accordion.Item>
                      <Accordion.Item value="Folder 1">
                        <Accordion.Control>
                          <Flex align="center" gap={10}>
                            <Image src="/folder_icon_small.svg" w={18} h={13} /> <Text>HDFC</Text>
                          </Flex>
                        </Accordion.Control>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="Payment Card">
                  <Accordion.Control>
                    <Flex align="center" gap={10}>
                      <Image src="/folder_icon_small.svg" w={18} h={13} /> <Text>Payment Card</Text>
                    </Flex>
                  </Accordion.Control>
                </Accordion.Item>
                <Accordion.Item value="Booking">
                  <Accordion.Control>
                    <Flex align="center" gap={10}>
                      <Image src="/folder_icon_small.svg" w={18} h={13} /> <Text>Booking</Text>
                    </Flex>
                  </Accordion.Control>
                </Accordion.Item>
              </Accordion>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="Folder 2">
            <Accordion.Control>
              <Flex align="center" gap={10}>
                <Image src="/folder_icon_small.svg" w={18} h={13} /> <Text>Folder 2</Text>
              </Flex>
            </Accordion.Control>
          </Accordion.Item>
          <Accordion.Item value="Folder 3">
            <Accordion.Control>
              <Flex align="center" gap={10}>
                <Image src="/folder_icon_small.svg" w={18} h={13} /> <Text>Folder 3</Text>
              </Flex>
            </Accordion.Control>
          </Accordion.Item>
        </Accordion>
      </Box>
      <Box w={'100%'}>
        <Flex align="center" w={'100%'}>
          <Image src="/folder_icon_small.svg" width={40} height={30} ml={20} />
          <Text size="24px" fw={'600'} p={'20px 36px'} pl={20} lh={'36px'}>
            Folder 1
          </Text>
          <ActionIcon
            pos="absolute"
            right={0}
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
        <Flex align="center" justify="space-between">
          <Input
            placeholder="Search Folder"
            w={240}
            h={36}
            radius={32}
            m={20}
            rightSection={<IconSearch width={15} height={15} />}
          />
          <Button variant="filled" size="sm" radius="xl" m={20}>
            <Text>Create New Folder</Text>
          </Button>
        </Flex>
        <Divider w={'100%'} ml={'5px'} size={'xs'} />
        <Flex align="center" m={20} gap={60}>
          <Flex direction="column" align="center">
            <Image src="/folder_icon_small.svg" miw={60} height={30} m={20} />
            <Text>Bank Account</Text>
          </Flex>
          <Flex direction="column" align="center">
            <Image src="/folder_icon_small.svg" miw={60} height={30} m={20} />
            <Text>Payment Card</Text>
          </Flex>
          <Flex direction="column" align="center">
            <Image src="/folder_icon_small.svg" miw={60} height={30} m={20} />
            <Text>Booking</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
