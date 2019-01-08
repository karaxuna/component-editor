import * as React from 'react';
import Node from './Node';
import Toolbar from './Toolbar';

export let type = 'image';

export default {
    renderNode(props) {
        if (props.node.type === type) {
            return React.createElement(Node, props, props.children);
        }
    },
    utils: {
        insertImage(change) {
            let src = prompt('Insert image src:');

            if (!src) {
                return;
            }

            change.insertInline({
                type,
                isVoid: true,
                data: {
                    properties: {
                        src
                    }
                }
            }).collapseToEnd().focus();
        }
    },
    onKeyDown(event, change) {
        if (event.key !== '4' || !event.ctrlKey) {
            return
        }

        this.utils.insertImage(change);
        
        event.preventDefault();
        return true;
    },
    renderToolbar({ value, onChange }) {
        return React.createElement(Toolbar, {
            value,
            onChange
        });
    }
};
