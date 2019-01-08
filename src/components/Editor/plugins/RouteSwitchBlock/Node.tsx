import * as React from 'react';

class RouteBlockNode extends React.Component<any, any> {
    handleRouteClick = (route) => {
        let {
            node,
            editor
        } = this.props;

        editor.change((change) => {
            node.nodes.forEach(child => {
                change.setNodeByKey(child.key, {
                    data: child.data.set('active', child === route && !child.data.get('active'))
                });
            });
        });
    }

    handleRouteAddClick = () => {
        let {
            node,
            editor
        } = this.props;

        let path = prompt('Enter path:');

        if (!path) {
            return;
        }

        editor.change((change) => {
            change.insertNodeByKey(node.key, node.nodes.size, {
                object: 'block',
                type: 'route',
                data: {
                    active: false,
                    properties: {
                        path
                    }
                },
                nodes: [{
                    object: 'block',
                    type: 'paragraph',
                    nodes: []
                }]
            });
        });
    }

    handleRouteRemoveClick = (route) => {
        let {
            editor
        } = this.props;

        editor.change((change) => {
            change.removeNodeByKey(route.key);
        });
    }

    render() {
        let {
            attributes,
            node,
            children
        } = this.props;

        return (
            <div {...attributes}>
                <div contentEditable={false} spellCheck={false}>
                    {node.nodes.map(child => {
                        let active = child.data.get('active');

                        return (
                            <span
                                key={child.key}
                                style={{
                                    backgroundColor: active ? 'rgb(30, 30, 30)' : 'rgb(45, 45, 45)',
                                    color: active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)',
                                    border: '1px solid transparent',
                                    height: '2em',
                                    paddingLeft: 6,
                                    paddingRight: 2,
                                    overflow: 'hidden',
                                    display: 'inline-flex',
                                    flexDirection: 'row'
                                }}>
                                <button
                                    type="button"
                                    onClick={() => this.handleRouteClick(child)}
                                    style={{
                                        border: 0,
                                        background: 'transparent',
                                        padding: 0,
                                        color: 'inherit',
                                        outline: 'none',
                                        height: '100%'
                                    }}>
                                    route: {child.data.get('properties').path}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => this.handleRouteRemoveClick(child)}
                                    style={{
                                        border: 0,
                                        background: 'transparent',
                                        padding: 0,
                                        color: 'inherit',
                                        outline: 'none',
                                        paddingLeft: 4,
                                        paddingRight: 4,
                                        height: '100%'
                                    }}>
                                    ✕
                                </button>
                            </span>
                        );
                    })}
                    <span style={{
                        backgroundColor: 'rgb(30, 30, 30)',
                        color: 'rgba(255, 255, 255, 1)',
                        border: '1px solid transparent',
                        height: '2em',
                        paddingLeft: 2,
                        paddingRight: 2,
                        overflow: 'hidden',
                        display: 'inline-flex',
                        flexDirection: 'row'
                    }}>
                        <button
                            type="button"
                            onClick={this.handleRouteAddClick}
                            style={{
                                border: 0,
                                background: 'transparent',
                                padding: 0,
                                color: 'inherit',
                                outline: 'none',
                                paddingLeft: 2,
                                paddingRight: 2,
                                height: '100%'
                            }}>
                            +
                    </button>
                    </span>
                </div>
                <div>{children}</div>
            </div>
        );
    }
}

export default RouteBlockNode;
