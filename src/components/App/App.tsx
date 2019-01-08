import * as React from 'react';
import { Value } from 'slate';
import Editor from '../Editor';

interface AppState {
    value: Value
}

class App extends React.Component<{}, AppState> {
    state = {
        value: Value.fromJSON({
            document: {
                nodes: [{
                    object: 'block',
                    type: 'paragraph',
                    nodes: []
                }]
            }
        })
    }

    handleChange = (change) => {
        this.setState({
            value: change.value
        });
    }

    render() {
        let {
            value
        } = this.state;

        return (
            <Editor
                value={value}
                onChange={this.handleChange}
            />
        );
    }
}

export default App;
