import {
  Center,
  Image,
  Box,
  Title,
  Text,
  TextInput,
  PasswordInput,
  Button,
} from '@mantine/core';
import { IconUser, IconLock } from '@tabler/icons-react';
import styles from '@/app/ui/home.module.css';

export default function Login() {
  const lock = <IconLock color='white'/>;
  const user = <IconUser color='white'/>;
  const btnProps = {
    href: '/otp',
    size: '45px',
    style: {
      color: 'black',
      fontSize: '20px',
      borderRadius: '10px',
      width: '406px',
      margin: 'auto',
    },
    bg: 'white',
  };
  return (
    <Center style={{
    height: '100vH',
    backgroundColor: 'rgba(31, 65, 169, 1)',}}>
      <Image src='/vector.svg' className={styles.vector}></Image>
      <Image src='/ellipse.svg' className={styles.ellipse1}></Image>
      <Image src='/Ellipse2.svg' className={styles.ellipse2}></Image>
      <Box className={styles.middle}>
        <Title size='40px' order={1}>
          Login
        </Title>
        <Text size='18px' mt={10}>Please enter your Login and Password</Text>
        <TextInput
        className={styles.input}
          style={{
            height: '40px',
            width: '400px',
            border: '1px solid rgba(255, 255, 255, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
            margin: 'auto',
            borderRadius: '10px',
            color:'red',
          }}
          leftSection={user}
          placeholder='Email or Phone'
          variant='unstyled'
          mt={40}
        />
        <PasswordInput
          style={{
            height: '40px',
            width: '400px',
            border: '1px solid rgba(255, 255, 255, 1)',
            alignItems: 'center',
            justifyContent: 'left',
            margin: 'auto',
            borderRadius: '10px',
          }}
          height='200px'
          leftSection={lock}
          placeholder='Password'
          variant='unstyled'
        />
        <Text ta='right' size='xs'>Forgot Password?</Text>
        <Button component='a' {...btnProps}>Login</Button>
      </Box>
    </Center>
  );
}
