import { createTheme, Box } from '@mantine/core';
import { ColorSchemeScript } from '@mantine/core';

export const metadata = {
  title: 'Dashboard',
  description: 'Login Management System',
};
const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'cyan',
});

export default function DashLayout({ children, activePage }: any) {
  return (
    <>
      <html lang="en">
        <head>
          <ColorSchemeScript />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        </head>
        <body style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
          {children}
        </body>
      </html>
    </>
  );
}
