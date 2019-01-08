import * as React from 'react';

class TextboxInlineNode extends React.Component<any, any> {
    render() {
        let {
            attributes
        } = this.props;

        return (
            <input {...attributes} type="textbox" className="form-control" />
        );
    }
}

export default TextboxInlineNode;
