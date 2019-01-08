import * as React from 'react';

class SliderBlockNode extends React.Component<any, any> {
    handleSliderItemAddClick = () => {
        let {
            node,
            editor
        } = this.props;

        editor.change((change) => {
            change.insertNodeByKey(node.key, node.nodes.size, {
                object: 'block',
                type: 'slider-item',
                nodes: [{
                    object: 'block',
                    type: 'paragraph',
                    nodes: []
                }]
            });
        });
    }

    render() {
        let {
            attributes,
            children
        } = this.props;

        return (
            <div {...attributes} style={{ display: 'flex', flexDirection: 'row', minWidth: 300 }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>{children}</div>
                <div contentEditable={false}>
                    <button type="button" onClick={this.handleSliderItemAddClick}>+</button>
                </div>
            </div>
        );
    }
}

export default SliderBlockNode;
