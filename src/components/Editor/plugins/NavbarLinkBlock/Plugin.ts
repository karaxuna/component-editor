import * as React from 'react';
import Node from './Node';
import Preview from './Preview';

export let type: string = 'navbar-link';

export default {
    type: 'navbar-link',
    renderNode: (props) => {
        if (props.node.type === type) {
            return React.createElement(Node, props, props.children);
        }
    },
    onKeyDown: (event, change) => {
        if (event.key !== '7' || !event.ctrlKey) {
            return
        }

        change.insertBlock({
            type: 'navbar-link',
            nodes: [{
                object: 'text',
                leaves: [
                    {
                        object: 'leaf',
                        text: 'Link'
                    }
                ]
            }]
        });

        event.preventDefault();
        return true;
    },
    renderPreview: (props) => {
        return React.createElement(Preview, props, props.children);
    }
};
