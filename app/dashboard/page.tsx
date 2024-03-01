import { Flex } from '@mantine/core';
import Nav from '../components/nav';
import RecordCategoriesPage from '../components/record_categories/record_categories_page';

export default function helo() {
  return (
    <>
      <Flex direction="row">
        <Nav activePage="Record Categories" />
        <RecordCategoriesPage activePage="Record Categories" />
      </Flex>
    </>
  );
}
