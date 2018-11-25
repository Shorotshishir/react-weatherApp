import React from 'react'
import { Form, Container, Input, Label, Button} from 'semantic-ui-react';

const Forms = (props) => {
  return (
    <React.Fragment>
      <Container >
      <Form onSubmit={props.getWeather} color='blue'>
        <Form.Group inline>
        <Form.Field>
          <Label>City:</Label>
          <Input type='text' placeholder='City' name='city' />
        </Form.Field>
        <Form.Field>
        <Label>Country:</Label>
          <Input type='text' placeholder='Country' name='country' />
        </Form.Field>
        </Form.Group>
        <Button positive> Get Weather </Button>
      </Form>
      </Container>
    </React.Fragment>
  )
}

export default Forms
