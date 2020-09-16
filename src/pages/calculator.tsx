import Head from 'next/head'

import VercelLogo from '../assets/vercel.svg'

import Input from '../components/Input/Input'
import { Container } from '../styles/pages/calculator'

const Calculator: React.FC = () => {
 return (
  <>
   <Head>
    <title>Calculadora de Juros Compostos</title>
   </Head>
   <Container>
    <main>
     <h1>Calculadora de juros compostos</h1>
     <Input></Input>
    </main>
   </Container>
  </>
 )
}

export default Calculator
