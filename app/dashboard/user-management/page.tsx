import { Flex } from '@mantine/core';
import Nav from '../../components/nav';
import UserManagementPage from '../../components/user_management_page';

export default function helo() {
  return (
    <>
      <Flex direction="row">
        <Nav activePage="User Management" />
        <UserManagementPage activePage="User Management" />
      </Flex>
    </>
  );
}
