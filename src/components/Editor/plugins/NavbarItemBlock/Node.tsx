import * as React from 'react';
import { NavItem } from 'reactstrap';

class NavbarItemBlockNode extends React.Component<any, any> {
    render() {
        let {
            children,
            attributes
        } = this.props;

        return (
            <NavItem {...attributes} style={{
                border: 'solid 1px gray',
                margin: 1,
                minWidth: 40,
                borderRadius: 2
            }}>
                {children}
            </NavItem>
        );
    }
}

export default NavbarItemBlockNode;
