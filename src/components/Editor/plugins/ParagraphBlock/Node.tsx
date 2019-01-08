import * as React from 'react';

class ParagraphBlockNode extends React.Component<any, any> {
    render() {
        let {
            attributes,
            children
        } = this.props;

        return (
            <div {...attributes}>{children}</div>
        );
    }
}

export default ParagraphBlockNode;
