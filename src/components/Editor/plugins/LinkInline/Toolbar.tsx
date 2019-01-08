import * as React from 'react';
import EditorToolbarButton from '../../../EditorToolbarButton';
import Plugin from './Plugin';

class Toolbar extends React.Component<any, any> {
    handleButtonClick = () => {
        let {
            value,
            onChange
        } = this.props;

        const change = value.change();
        Plugin.utils.insertLink(change);
        onChange(change);
    }

    render() {
        return (
            <EditorToolbarButton onClick={this.handleButtonClick} title="ctrl + 2">
                ლინკი
            </EditorToolbarButton>
        );
    }
}

export default Toolbar;
