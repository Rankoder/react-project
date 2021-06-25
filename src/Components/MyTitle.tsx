import { Button } from '@material-ui/core';
import React from 'react';

interface Props {
    value: string;
}

class MyTitle extends React.Component<Props>{
    state = {value: 1 }

    render = () => (
        <> 
        <h1>{this.props.value}: {this.state.value}</h1>
        <Button onClick={() => this.setState({ value: this.state.value+1 })}>Dodaj</Button>
        </>
    )
}

export default MyTitle