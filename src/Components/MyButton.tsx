import { Button } from '@material-ui/core';
import React from 'react';

interface Props {
    value: string;
}

class MyButton extends React.Component<Props>{
    state = {value: 1 }
  


    render = () => (
        <> 
        <h1>{this.props.value}: {this.state.value}</h1>
        <Button onClick={() => this.setState({ value: 'test' })}>Dodaj</Button>
        </>
    )
}

export default MyButton