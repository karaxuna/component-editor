import * as React from 'react';
import { NavLink } from 'reactstrap';

class NavbarLinkBlockNode extends React.Component<any, any> {
    render() {
        let {
            children,
            attributes
        } = this.props;

        return (
            <NavLink {...attributes}>
                {children}
            </NavLink>
        );
    }
}

export default NavbarLinkBlockNode;
