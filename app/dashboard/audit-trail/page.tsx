import { Flex } from '@mantine/core';
import Nav from '../../components/nav';
import AuditTrailPage from '../../components/audit_trail_page';

export default function helo() {
  return (
    <>
      <Flex direction="row">
        <Nav activePage="Audit Trail" />
        <AuditTrailPage activePage="Audit Trail" />
      </Flex>
    </>
  );
}
