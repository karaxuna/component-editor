import * as React from 'react';

class LinkInlineNode extends React.Component<any, any> {
    render() {
        let {
            attributes,
            node,
            children
        } = this.props;

        return (
            <a {...attributes} href={node.data.get('properties').url}>{children}</a>
        );
    }
}

export default LinkInlineNode;
