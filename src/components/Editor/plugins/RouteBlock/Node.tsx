import * as React from 'react';

class RouteBlockNode extends React.Component<any, any> {
    render() {
        let {
            attributes,
            node,
            children
        } = this.props;

        let active = node.data.get('active');
        let style: any = {};

        if (!active) {
            style.display = 'none';
        }

        return (
            <div {...attributes} style={style}>
                {children}
            </div>
        );
    }
}

export default RouteBlockNode;
