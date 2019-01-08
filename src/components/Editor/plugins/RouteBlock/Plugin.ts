import * as React from 'react';
import Node from './Node';

export let type = 'route';

export default {
    renderNode: (props) => {
        if (props.node.type === type) {
            return React.createElement(Node, props, props.children);
        }
    }
};
