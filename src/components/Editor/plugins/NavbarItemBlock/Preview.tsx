import * as React from 'react';
import { NavItem } from 'reactstrap';

class Preview extends React.Component<any, any> {
    render() {
        let {
            node,
            children
        } = this.props;

        return (
            <NavItem>
                {children}
            </NavItem>
        );
    }
}

export default Preview;
