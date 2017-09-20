import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const Sticky = ({ stickyObject: {id, title, body }, deleteStickyFunction }) => (
  <Card>
    <Card.Content>
      <Card.Header>{ title }</Card.Header>
      <Card.Description>{ body }</Card.Description>
      <div className='ui two buttons'>
        <Button basic color='green'>Update</Button>
        <Button basic color='red' onClick={ () => deleteStickyFunction(id) }>Delete</Button>
      </div>
    </Card.Content>  
  </Card>
)

export default Sticky;