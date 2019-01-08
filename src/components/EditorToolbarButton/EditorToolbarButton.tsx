import * as React from 'react';

class EditorToolbarButton extends React.Component<any, any> {
    render() {
        let {
            children,
            ...props
        } = this.props;

        return (
            <>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .kms-EditorToolbarButton {
                        border: 0;
                        background: transparent;
                        padding: 10px;
                        outline: none;
                        height: 100%;
                        color: #42526e;
                        background-color: #f4f5f7;
                    }

                    .kms-EditorToolbarButton:hover {
                        background-color: #ebecf0;
                        cursor: pointer;
                    }`
                }}></style>
                <button type="button" {...props} className="kms-EditorToolbarButton">
                    {children}
                </button>
            </>
        );
    }
}

export default EditorToolbarButton;
