import * as React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';

class Preview extends React.Component<any, any> {
    render() {
        let {
            node,
            children
        } = this.props;

        return (
            <NavLink tag={Link} to={node.data.get('properties').url}>
                {children}
            </NavLink>
        );
    }
}

export default Preview;
