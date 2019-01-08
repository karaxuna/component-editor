import * as React from 'react';
import Node from './Node';
import schema from './schema';

export let type: string = 'slider';

export default {
    renderNode: (props) => {
        if (props.node.type === type) {
            return React.createElement(Node, props, props.children);
        }
    },
    onKeyDown: (event, change) => {
        if (event.key !== '3' || !event.ctrlKey) {
            return
        }

        change.insertBlock({
            type: 'slider',
            nodes: [{
                object: 'block',
                type: 'slider-item',
                nodes: [{
                    object: 'block',
                    type: 'paragraph',
                    nodes: []
                }]
            }]
        });

        event.preventDefault();
        return true;
    },
    schema
};
