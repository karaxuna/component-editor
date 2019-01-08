import * as React from 'react';
import Node from './Node';
import schema from './schema';

export let type: string = 'route-switch';

export default {
    renderNode: (props) => {
        if (props.node.type === type) {
            return React.createElement(Node, props, props.children);
        }
    },
    onKeyDown: (event, change) => {
        if (event.key !== '`' || !event.ctrlKey) {
            return
        }

        let path = prompt('Enter path:');

        if (!path) {
            return;
        }

        change.insertBlock({
            type: 'route-switch',
            nodes: [{
                object: 'block',
                type: 'route',
                data: {
                    active: true,
                    properties: {
                        path
                    }
                },
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
