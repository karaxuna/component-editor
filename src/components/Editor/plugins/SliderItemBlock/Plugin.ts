import * as React from 'react';
import Node from './Node';
import schema from './schema';

export let type: string = 'slider-item';

export default {
    renderNode: (props) => {
        if (props.node.type === type) {
            return React.createElement(Node, props, props.children);
        }
    },
    schema
};
