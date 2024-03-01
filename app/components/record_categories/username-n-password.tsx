import {
  Flex,
  Group,
  Stack,
  Box,
  Text,
  Divider,
  Input,
  FileInput,
  PasswordInput,
  Button,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

export default function UsernameAndPassword() {
  return (
    <Flex direction="column" w="100%">
      <Flex align="center" h={80}>
        <Box w="100%">
          <Text size="24px" fw={600} c="rgba(36, 45, 53, 1)" m={20}>
            Username & Password
          </Text>
          <Divider m={10} />
        </Box>
      </Flex>
      <Flex>
        <Box style={{ border: '1px solid rgba(241, 241, 241, 1)' }} w="100%" m={20}>
          <Box bg="rgba(246, 250, 254, 1)" p={20} fw={600}>
            Add Username & Password
          </Box>
          <Divider />
          <Flex gap={40} m={10}>
            <Stack w="50%" gap={5}>
              <label htmlFor="">Enter Name</label>
              <Input placeholder="Enter Name" />
            </Stack>
            <Stack w="50%" gap={5}>
              <label htmlFor="">Select Folder</label>
              <FileInput placeholder="Select" rightSection={<IconChevronDown />} />
            </Stack>
          </Flex>
        </Box>
      </Flex>
      <Flex>
        <Box style={{ border: '1px solid rgba(241, 241, 241, 1)' }} w="100%" m={20} p={0}>
          <Box bg="rgba(246, 250, 254, 1)" p={20} fw={600}>
            Login Credentials
          </Box>
          <Divider />
          <Flex m={10}>
            <Stack w="100%" gap={10}>
              <label htmlFor="">User ID</label>
              <Input placeholder="name@gmail.com" />
              <label htmlFor="">Password</label>
              <PasswordInput placeholder="Select" />
              <label htmlFor="">URL</label>
              <Input placeholder="www.example.com" />
              <label htmlFor="">Secret Code (One Time Password)</label>
              <PasswordInput placeholder="OTP" />
              <label htmlFor="">Notes</label>
              <Input placeholder="Enter your text here" />
              <Divider w="100%" />
              <Box bg="rgba(246, 250, 254, 1)" p={10} m={-10}>
                <Flex justify="right" gap={10}>
                <Button variant='outline'>Cancel</Button>
                <Button>Save</Button>
                </Flex>
              </Box>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
