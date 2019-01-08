import * as React from 'react';
import Node from './Node';
import Preview from './Preview';

export let type: string = 'navbar';

export default {
    renderNode: (props) => {
        if (props.node.type === type) {
            return React.createElement(Node, props, props.children);
        }
    },
    onKeyDown: (event, change) => {
        if (event.key !== '5' || !event.ctrlKey) {
            return
        }

        change.insertBlock({
            type: 'navbar',
            nodes: [{
                object: 'block',
                type: 'navbar-item',
                nodes: [{
                    object: 'block',
                    type: 'navbar-link',
                    data: {
                        properties: {
                            url: '/'
                        }
                    },
                    nodes: [{
                        object: 'block',
                        type: 'paragraph',
                        nodes: [{
                            object: 'text',
                            leaves: [
                                {
                                    object: 'leaf',
                                    text: 'Link',
                                    marks: []
                                }
                            ]
                        }]
                    }]
                }]
            }]
        });

        event.preventDefault();
        return true;
    },
    renderPreview: (props) => {
        return React.createElement(Preview, props, props.children);
    }
};
