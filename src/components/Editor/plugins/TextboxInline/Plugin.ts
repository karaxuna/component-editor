import * as React from 'react';
import Node from './Node';

export let type = 'textbox';

export default {
    renderNode: (props) => {
        if (props.node.type === type) {
            return React.createElement(Node, props, props.children);
        }
    },
    onKeyDown: (event, change) => {
        if (event.key !== '1' || !event.ctrlKey) {
            return
        }

        change.insertInline({
            type,
            isVoid: true
        }).collapseToEnd().focus();

        event.preventDefault();
        return true;
    }
};
