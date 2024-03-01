import { ActionIcon, Box, NavLink, Image, Text, Center, Divider } from '@mantine/core';
import { IconHome2, IconFolder, IconUsers, IconFolders, IconFileSearch } from '@tabler/icons-react';
import horizontal from '../../public/hr.svg';

export default function Nav({ activePage }: { activePage: string }) {
  return (
    <>
      <Box bg={'rgba(8, 13, 38, 1)'} c={'white'} miw={'250px'} mih={'100vh'}>
        <Center>
          <Text p={'20px'}>LOGIN MANAGEMENT</Text>
        </Center>
        <Image pb={'20px'} src="/hr.svg"></Image>
        <NavLink
          href="/dashboard"
          label="Record Categories"
          leftSection={
            <ActionIcon
              style={{ borderRadius: '8px' }}
              variant="filled"
              color="rgba(0, 117, 255, 1)"
              size="30px"
              aria-label=""
            >
              <IconFolder width={'15px'} height={'15px'} />
            </ActionIcon>
          }
          variant="light"
          style={{ borderRadius: '10px', '&:hover': { color: 'rgba(0,0,255,1)' } }}
          active={activePage === 'Record Categories'}
        />
        <NavLink
          href="/dashboard/user-management"
          label="User Management"
          leftSection={
            <ActionIcon
              style={{ borderRadius: '8px' }}
              variant="filled"
              color="rgba(0, 117, 255, 1)"
              size="30px"
              aria-label=""
            >
              <IconUsers width={'15px'} height={'15px'} />
            </ActionIcon>
          }
          variant="light"
          style={{ borderRadius: '10px' }}
          active={activePage === 'User Management'}
        />
        <NavLink
          href="/dashboard/folders"
          label="Folders"
          leftSection={
            <ActionIcon
              style={{ borderRadius: '8px' }}
              variant="filled"
              color="rgba(0, 117, 255, 1)"
              size="30px"
              aria-label=""
            >
              <IconFolders width={'15px'} height={'15px'} />
            </ActionIcon>
          }
          variant="light"
          style={{ borderRadius: '10px' }}
          active={activePage === 'Folders'}
        />
        <NavLink
          href="/dashboard/audit-trail"
          label="Audit Trail"
          leftSection={
            <ActionIcon
              style={{ borderRadius: '8px' }}
              variant="filled"
              color="rgba(0, 117, 255, 1)"
              size="30px"
              aria-label=""
            >
              <IconFileSearch width={'15px'} height={'15px'} />
            </ActionIcon>
          }
          variant="light"
          style={{ borderRadius: '10px' }}
          active={activePage === 'Audit Trail'}
        />
      </Box>
    </>
  );
}
