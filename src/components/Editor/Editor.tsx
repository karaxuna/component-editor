import * as React from 'react';
import { Editor } from 'slate-react';
import plugins from './plugins';
import EditorPreview from '../EditorPreview';
import EditorToolbar from '../EditorToolbar';

class KmsEditor extends React.Component<any, any> {
    /**
     * On change.
     *
     * @param {Change} change
     */
    onChange = (change) => {
        this.props.onChange(change)
    }

    /**
     * Render the editor.
     *
     * @return {Component} component
     */
    render() {
        let {
            value
        } = this.props;

        return (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
                <div style={{ padding: 10 }}>
                    <code>
                        <pre>
                            ctrl + ` -> Add route switch&nbsp;|&nbsp;
                            ctrl + 1 -> Add textbox&nbsp;|&nbsp;
                            ctrl + 2 -> Add Link&nbsp;|&nbsp;
                            ctrl + 3 -> Add Slider&nbsp;|&nbsp;
                            ctrl + 4 -> Add Image&nbsp;|&nbsp;
                            ctrl + 5 -> Add Navbar&nbsp;|&nbsp;
                            ctrl + 7 -> Add Navbar Link
                        </pre>
                    </code>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', flex: 1, overflow: 'hidden' }}>
                    <div style={{ flex: 1, padding: 20, border: 'solid 1px black', borderLeft: 0 }}>
                        <h3>Editor:</h3>
                        <EditorToolbar
                            value={value}
                            onChange={this.onChange}
                        />
                        <Editor
                            placeholder="Enter some plain text..."
                            value={value}
                            onChange={this.onChange}
                            plugins={plugins}
                        />
                    </div>
                    <div style={{ flex: 1, padding: 20, maxWidth: 400, border: 'solid 1px black', borderLeft: 0, overflow: 'hidden' }}>
                        <h3>Preview:</h3>
                        <EditorPreview
                            value={value}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 20, maxWidth: 400, border: 'solid 1px black', borderLeft: 0, overflow: 'hidden' }}>
                        <h3>Tree:</h3>
                        <div style={{ overflow: 'auto', flex: 1 }}>
                            <code style={{ flex: 1, overflow: 'auto' }}>
                                <pre>
                                    {JSON.stringify(value.toJS(), null, 2)}
                                </pre>
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default KmsEditor;
