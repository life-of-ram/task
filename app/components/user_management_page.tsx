'use client';
import { useState } from 'react';
import {
  Flex,
  Box,
  Text,
  Button,
  ActionIcon,
  Divider,
  Input,
  Table,
  Image,
  Collapse,
  Breadcrumbs,
  Badge,
} from '@mantine/core';
import {
  IconBell,
  IconSearch,
  IconEdit,
  IconTrash,
  IconCaretDownFilled,
  IconCaretUpFilled,
  IconChevronRight,
} from '@tabler/icons-react';

export default function UserManagementPage({ activePage }: { activePage: string }) {
  const [activeTab, setActiveTab] = useState('User_Groups');
  const handleClickUG = () => {
    setActiveTab('User_Groups');
  };
  const handleClickU = () => {
    setActiveTab('Users');
  };

  const [isOpen, setIsOpen] = useState<boolean[]>([]);

  const handleToggle = (index: number) => {
    setIsOpen((prevState) => {
      return [...prevState.slice(0, index), !prevState[index], ...prevState.slice(index + 1)];
    });
  };

  const items = [
    { title: 'sub_folder', href: '#' },
    { title: 'folder2', href: '#' },
    { title: 'folder3', href: '#' },
  ].map((item, index) => (
    <Flex key={index} align="center" gap={10}>
      <Image src="/folder_icon_small.svg" w={13} h={10} />
      <Text>{item.title}</Text>
    </Flex>
  ));
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
          <Flex align="center" w={'100%'}>
            {activeTab === 'User_Groups' && (
              <>
                <Button
                  variant="filled"
                  size="sm"
                  radius="xl"
                  m={20}
                  ml={40}
                  onClick={handleClickUG}
                >
                  <Text>User Groups</Text>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  radius="xl"
                  color="rgba(234, 236, 238, 1)"
                  onClick={handleClickU}
                >
                  <Text c="black">Users</Text>
                </Button>
              </>
            )}
            {activeTab === 'Users' && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  radius="xl"
                  m={20}
                  ml={40}
                  color="rgba(234, 236, 238, 1)"
                  onClick={handleClickUG}
                >
                  <Text c="black">User Groups</Text>
                </Button>
                <Button variant="filled" size="sm" radius="xl" onClick={handleClickU}>
                  <Text>Users</Text>
                </Button>
              </>
            )}
          </Flex>
          <Divider w={'100%'} ml={'5px'} size={'xs'} />
        </Box>
        {activeTab === 'User_Groups' && (
          <Box>
            <Flex direction="row" align="center">
              <Input
                placeholder="Search by Group Name"
                w={240}
                h={36}
                radius={32}
                m={20}
                ml={40}
                rightSection={<IconSearch width={15} height={15} />}
              />
              <Input
                placeholder="Search by Group Name"
                w={240}
                h={36}
                radius={32}
                m={20}
                ml={0}
                rightSection={<IconSearch width={15} height={15} />}
              />
              <Button
                variant="filled"
                size="sm"
                radius="xl"
                style={{ position: 'absolute', right: '20px' }}
              >
                <Text>Add Group</Text>
              </Button>
            </Flex>
            <Table withTableBorder ta="left" m={20} mt={0} w={'96%'} cellPadding={20}>
              <tbody>
                <tr
                  style={{
                    background: 'rgba(246, 250, 254, 1)',
                    fontWeight: 'bold',
                    color: 'rgba(79, 91, 103, 1)',
                  }}
                >
                  <td>Group Name</td>
                  <td>Users</td>
                  <td>Access</td>
                  <td>Action</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(241, 241, 241, 1)' }}>
                  <td>Project Admin</td>
                  <td>Ravi Prajwal , Gunal, Rajeshwaran, +10 more</td>
                  <td>
                    <Flex align="center" gap={10}>
                      <Image src="/folder_icon_small.svg" w={13} h={10} />
                      <Text>Folder 1, </Text>
                      <Image src="/folder_icon_small.svg" w={13} h={10} />
                      <Text>Folder 2, </Text>
                      <Image src="/folder_icon_small.svg" w={13} h={10} />
                      <Text>Folder 3 </Text>
                      {isOpen[0] ? (
                        <IconCaretUpFilled
                          cursor="pointer"
                          onClick={() => handleToggle(0)}
                          height={20}
                          width={20}
                        />
                      ) : (
                        <IconCaretDownFilled
                          cursor="pointer"
                          onClick={() => handleToggle(0)}
                          height={20}
                          width={20}
                        />
                      )}
                    </Flex>
                    <Collapse in={isOpen[0]}>
                      <Breadcrumbs
                        separatorMargin="xs"
                        separator={<IconChevronRight color="rgba(5, 117, 230, 1)" size={16} />}
                      >
                        {items}
                      </Breadcrumbs>
                    </Collapse>
                  </td>
                  <td>
                    <Flex gap={25}>
                      <IconEdit />
                      <IconTrash />
                    </Flex>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(241, 241, 241, 1)' }}>
                  <td>Project Admin</td>
                  <td>Ravi Prajwal , Gunal, Rajeshwaran, +10 more</td>
                  <td>
                    <Flex align="center" gap={10}>
                      <Image src="/folder_icon_small.svg" w={13} h={10} />
                      <Text>Folder 1, </Text>
                      <Image src="/folder_icon_small.svg" w={13} h={10} />
                      <Text>Folder 2, </Text>
                      <Image src="/folder_icon_small.svg" w={13} h={10} />
                      <Text>Folder 3 </Text>
                      {isOpen[1] ? (
                        <IconCaretUpFilled
                          cursor="pointer"
                          onClick={() => handleToggle(1)}
                          height={20}
                          width={20}
                        />
                      ) : (
                        <IconCaretDownFilled
                          cursor="pointer"
                          onClick={() => handleToggle(1)}
                          height={20}
                          width={20}
                        />
                      )}
                    </Flex>
                    <Collapse in={isOpen[1]}>
                      <Breadcrumbs
                        separatorMargin="xs"
                        separator={<IconChevronRight color="rgba(5, 117, 230, 1)" size={16} />}
                      >
                        {items}
                      </Breadcrumbs>
                    </Collapse>
                  </td>
                  <td>
                    <Flex gap={25}>
                      <IconEdit />
                      <IconTrash />
                    </Flex>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(241, 241, 241, 1)' }}>
                  <td>Project Admin</td>
                  <td>Ravi Prajwal , Gunal, Rajeshwaran, +10 more</td>
                  <td>
                    <Flex align="center" gap={10}>
                      <Image src="/folder_icon_small.svg" w={13} h={10} />
                      <Text>Folder 1, </Text>
                      <Image src="/folder_icon_small.svg" w={13} h={10} />
                      <Text>Folder 2, </Text>
                      <Image src="/folder_icon_small.svg" w={13} h={10} />
                      <Text>Folder 3 </Text>
                      {isOpen[2] ? (
                        <IconCaretUpFilled
                          cursor="pointer"
                          onClick={() => handleToggle(2)}
                          height={20}
                          width={20}
                        />
                      ) : (
                        <IconCaretDownFilled
                          cursor="pointer"
                          onClick={() => handleToggle(2)}
                          height={20}
                          width={20}
                        />
                      )}
                    </Flex>
                    <Collapse in={isOpen[2]}>
                      <Breadcrumbs
                        separatorMargin="xs"
                        separator={<IconChevronRight color="rgba(5, 117, 230, 1)" size={16} />}
                      >
                        {items}
                      </Breadcrumbs>
                    </Collapse>
                  </td>
                  <td>
                    <Flex gap={25}>
                      <IconEdit />
                      <IconTrash />
                    </Flex>
                  </td>
                </tr>
                <tr>
                  <td>Project Admin</td>
                  <td>Ravi Prajwal , Gunal, Rajeshwaran, +10 more</td>
                  <td>
                    <Flex align="center" gap={10}>
                      <Image src="/folder_icon_small.svg" w={13} h={10} />
                      <Text>Folder 1, </Text>
                      <Image src="/folder_icon_small.svg" w={13} h={10} />
                      <Text>Folder 2, </Text>
                      <Image src="/folder_icon_small.svg" w={13} h={10} />
                      <Text>Folder 3 </Text>
                      {isOpen[3] ? (
                        <IconCaretUpFilled
                          cursor="pointer"
                          onClick={() => handleToggle(3)}
                          height={20}
                          width={20}
                        />
                      ) : (
                        <IconCaretDownFilled
                          cursor="pointer"
                          onClick={() => handleToggle(3)}
                          height={20}
                          width={20}
                        />
                      )}
                    </Flex>
                    <Collapse in={isOpen[3]}>
                      <Breadcrumbs
                        separatorMargin="xs"
                        separator={<IconChevronRight color="rgba(5, 117, 230, 1)" size={16} />}
                      >
                        {items}
                      </Breadcrumbs>
                    </Collapse>
                  </td>
                  <td>
                    <Flex gap={25}>
                      <IconEdit />
                      <IconTrash />
                    </Flex>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Box>
        )}
        {activeTab === 'Users' && (
          <Box>
            <Flex direction="row" align="center">
              <Input
                placeholder="Search Users"
                w={240}
                h={36}
                radius={32}
                m={20}
                ml={40}
                rightSection={<IconSearch width={15} height={15} />}
              />
              <Button
                variant="filled"
                size="sm"
                radius="xl"
                style={{ position: 'absolute', right: '20px' }}
              >
                <Text>Add Users</Text>
              </Button>
            </Flex>
            <Table withTableBorder ta="left" m={20} mt={0} w={'96%'} cellPadding={20}>
              <tbody>
                <tr
                  style={{
                    background: 'rgba(246, 250, 254, 1)',
                    fontWeight: 'bold',
                    color: 'rgba(79, 91, 103, 1)',
                  }}
                >
                  <td>User Name</td>
                  <td>Email</td>
                  <td>Phone Number</td>
                  <td>User Group</td>
                  <td>Status</td>
                  <td>Role</td>
                  <td>Action</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(241, 241, 241, 1)' }}>
                  <td>Ravi Prajwal</td>
                  <td>raviprajwal@gmail.com</td>
                  <td>9087654321</td>
                  <td>Project HR, Project Admin</td>
                  <td>
                    <Badge color="green" size="l" p="0 5px" tt="capitalize">
                      Active
                    </Badge>
                  </td>
                  <td>Admin</td>
                  <td>
                    <Flex gap={25}>
                      <IconEdit />
                      <IconTrash />
                    </Flex>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(241, 241, 241, 1)' }}>
                  <td>Ravi Prajwal</td>
                  <td>raviprajwal@gmail.com</td>
                  <td>9087654321</td>
                  <td>Project HR, Project Admin</td>
                  <td>
                    <Badge color="green" size="l" p="0 5px" tt="capitalize">
                      Active
                    </Badge>
                  </td>
                  <td>Admin</td>
                  <td>
                    <Flex gap={25}>
                      <IconEdit />
                      <IconTrash />
                    </Flex>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(241, 241, 241, 1)' }}>
                  <td>Ravi Prajwal</td>
                  <td>raviprajwal@gmail.com</td>
                  <td>9087654321</td>
                  <td>Project HR, Project Admin</td>
                  <td>
                    <Badge color="red" size="l" p="0 5px" tt="capitalize">
                      Inactive
                    </Badge>
                  </td>
                  <td>Admin</td>
                  <td>
                    <Flex gap={25}>
                      <IconEdit />
                      <IconTrash />
                    </Flex>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(241, 241, 241, 1)' }}>
                  <td>Ravi Prajwal</td>
                  <td>raviprajwal@gmail.com</td>
                  <td>9087654321</td>
                  <td>Project HR, Project Admin</td>
                  <td>
                    <Badge color="green" size="l" p="0 5px" tt="capitalize">
                      Active
                    </Badge>
                  </td>
                  <td>Admin</td>
                  <td>
                    <Flex gap={25}>
                      <IconEdit />
                      <IconTrash />
                    </Flex>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Box>
        )}
      </Flex>
    </>
  );
}
