import * as React from 'react';

class SliderItemBlockNode extends React.Component<any, any> {
    handleSlideItemRemoveClick = () => {
        let {
            node,
            editor
        } = this.props;

        editor.change((change) => {
            change.removeNodeByKey(node.key);
        });
    }

    render() {
        let {
            attributes,
            children
        } = this.props;

        return (
            <div {...attributes} style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                <div style={{ flex: 1 }}>{children}</div>
                <div contentEditable={false}>
                    <button type="button" onClick={this.handleSlideItemRemoveClick}>X</button>
                </div>
            </div>
        );
    }
}

export default SliderItemBlockNode;
