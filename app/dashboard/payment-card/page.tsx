import { Flex } from '@mantine/core';
import Nav from '../../components/nav';
import UsernameAndPassword from '../../components/record_categories/username-n-password';

export default function helo() {
  return (
    <>
      <Flex direction="row">
        <Nav activePage="Record Categories" />
        <UsernameAndPassword />
      </Flex>
    </>
  );
}
