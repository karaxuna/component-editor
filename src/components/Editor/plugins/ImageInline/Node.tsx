import * as React from 'react';

class ImageInlineNode extends React.Component<any, any> {
    render() {
        let {
            attributes,
            node
        } = this.props;

        return (
            <img {...attributes} src={node.data.get('properties').src}/>
        );
    }
}

export default ImageInlineNode;
