import * as React from 'react';
import Node from './Node';
import Preview from './Preview';

export let type: string = 'navbar-item';

export default {
    renderNode: (props) => {
        if (props.node.type === type) {
            return React.createElement(Node, props, props.children);
        }
    },
    renderPreview: (props) => {
        return React.createElement(Preview, props, props.children);
    }
};
