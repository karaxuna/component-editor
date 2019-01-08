import * as React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav
} from 'reactstrap';

class Preview extends React.Component<any, any> {
    state = {
        isOpened: false
    };

    handleToggle = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    render() {
        let {
            isOpened
        } = this.state;

        let {
            node,
            children
        } = this.props;

        return (
            <Navbar color="light" expand="md" light>
                <NavbarToggler onClick={this.handleToggle} />
                <Collapse isOpen={isOpened} navbar>
                    <Nav navbar>
                        {children}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Preview;
