import { Grid, Text } from '@nextui-org/react'
import type { GetStaticProps, NextPage } from 'next'
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    // <Container css={{ margin: '0 auto', minHeight: '100vh' }}>
    //   <Text size='4rem' h1>
    //     Welcome to{' '}
    //     <Link href='https://nextjs.org' color='secondary'>
    //       Next.js!
    //     </Link>
    //   </Text>
    // </Container>
    <Grid.Container gap={2} justify='center'>
      <Grid justify='center'>
        <Text size={'4rem'} h1>
          Otsumami.dev
        </Text>
      </Grid>
    </Grid.Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default Home
