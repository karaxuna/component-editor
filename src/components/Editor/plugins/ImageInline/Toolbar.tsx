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
        Plugin.utils.insertImage(change);
        onChange(change);
    }

    render() {
        return (
            <EditorToolbarButton onClick={this.handleButtonClick} title="ctrl + 4">
                სურათი
            </EditorToolbarButton>
        );
    }
}

export default Toolbar;
