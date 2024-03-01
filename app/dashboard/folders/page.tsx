import { Flex } from '@mantine/core';
import Nav from '../../components/nav';
import FoldersPage from '../../components/folders_page';

export default function helo() {
  return (
    <Flex direction="row">
      <Nav activePage="Folders" />
      <FoldersPage activePage="Folders" />
    </Flex>
  );
}
