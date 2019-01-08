import * as React from 'react';
import Node from './Node';
import Toolbar from './Toolbar';

export let type = 'link';

export default {
    renderNode(props) {
        if (props.node.type === type) {
            return React.createElement(Node, props, props.children);
        }
    },
    utils: {
        insertLink(change) {
            let url = prompt('Insert url:');

            if (!url) {
                return;
            }

            change.wrapInline({
                type,
                data: {
                    properties: {
                        url
                    }
                }
            }).collapseToEnd().focus();
        }
    },
    onKeyDown(event, change) {
        if (event.key !== '2' || !event.ctrlKey || change.value.selection.isCollapsed) {
            return;
        }

        this.utils.insertLink(change);

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
