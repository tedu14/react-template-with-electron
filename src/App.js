import React from 'react';
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <Title>React Template with Electron</Title>
      <Text>A simple template using the electronjs with react</Text>
    </Container>
  );
}

const Title = styled.h1`
  margin: 10px auto;
  font-size: 2rem;
  color: #333;
`

const Container = styled.div`
  width: 95%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 15px;
`

const Text = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  line-height: 1.5;
  letter-spacing: 1.5px;
`

export default App;
