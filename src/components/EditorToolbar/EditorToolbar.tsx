import * as React from 'react';
import plugins from '../Editor/plugins';

class EditorToolbar extends React.Component<any, any> {
    render() {
        let {
            value,
            onChange
        } = this.props;

        return (
            <>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .kms-EditorToolbar {
                        display: inline-flex;
                        flex-direction: row;
                    }`
                }}></style>
                <div className="kms-EditorToolbar">
                    {plugins.filter(plugin => plugin.renderToolbar).map((plugin, index) => (
                        <React.Fragment key={index}>
                            {plugin.renderToolbar({
                                value,
                                onChange
                            })}
                        </React.Fragment>
                    ))}
                </div>
            </>
        );
    }
}

export default EditorToolbar;
