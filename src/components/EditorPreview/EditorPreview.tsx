import * as React from 'react';
import { Switch, MemoryRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';
import Slider from '../Slider';
import plugins from '../Editor/plugins';

class EditorPreview extends React.Component<any, any> {
    convertValueToJsx() {
        let {
            value
        } = this.props;

        return (function convert(node) {
            let plugin = plugins.find((plugin: any) => plugin.type && plugin.type === node.type);

            // TODO: Move all previews inside plugins
            if (plugin && plugin.renderPreview) {
                return React.createElement(
                    plugin.renderPreview,
                    { node, key: node.key },
                    node.nodes.map(convert)
                );
            }

            switch (node.object) {
                case 'document':
                    return <div key={node.key}>{node.nodes.map(convert)}</div>
                case 'block':
                    switch (node.type) {
                        case 'paragraph':
                            return <div key={node.key}>{node.nodes.map(convert)}</div>
                        case 'route-switch':
                            return <Switch key={node.key}>{node.nodes.map(convert)}</Switch>
                        case 'route':
                            return (
                                <Route
                                    key={node.key}
                                    component={() => <div>{node.nodes.map(convert)}</div>}
                                    path={node.data.get('properties').path}
                                ></Route>
                            );
                        case 'slider':
                            return <div key={node.key} style={{ width: '100%', overflow: 'hidden', padding: 25, boxSizing: 'border-box' }}><Slider>{node.nodes.map(convert)}</Slider></div>
                        case 'slider-item':
                            return <div key={node.key} style={{ textAlign: 'center' }}>{node.nodes.map(convert)}</div>
                    }
                case 'inline':
                    switch (node.type) {
                        case 'textbox':
                            return <input key={node.key} type="textbox" />
                        case 'image':
                            return <img key={node.key} src={node.data.get('properties').src} />
                        case 'link':
                            return <Link key={node.key} to={node.data.get('properties').url}>{node.nodes.map(convert)}</Link>
                    }
                case 'text':
                    return <span key={node.key}>{node.text}</span>
                default:
                    return <span key={node.key}>[Unknown node]</span>
            }
        })(value.document);
    }

    render() {
        return (
            <MemoryRouter>
                {this.convertValueToJsx()}
            </MemoryRouter>
        );
    }
}

export default EditorPreview;
