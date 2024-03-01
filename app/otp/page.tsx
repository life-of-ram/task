import {
  Center,
    Image,
    Box,
    Title,
    Text,
    TextInput,
    Button,
  } from '@mantine/core';
  import styles from '@/app/ui/home.module.css';
  
  export default function Otp() {
    const btnProps = {
      size: '45px',
      href: '/dashboard',
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
            OTP
          </Title>
          <Text size='18px' mt={10}>Please enter  the OTP sent to your Phone</Text>
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
            }}
            placeholder='Enter OTP'
            variant='unstyled'
            mt={40}
            mb={10}
            pl={10}
          />
          <Text ta='right' size='xs'>Resend OTP</Text>
          <Button component='a' {...btnProps} mt={10}>Verify</Button>
        </Box>
      </Center>
    );
  }
  