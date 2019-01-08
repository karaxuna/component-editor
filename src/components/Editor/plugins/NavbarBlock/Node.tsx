import * as React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav
} from 'reactstrap';

class NavbarBlockNode extends React.Component<any, any> {
    state = {
        isOpened: false
    };

    handleToggle = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    handleNavbarItemInsertButtonClick = () => {
        let {
            editor,
            node
        } = this.props;

        let url = prompt('Insert url:');

        if (!url) {
            return;
        }

        editor.change(change => {
            change.insertNodeByKey(node.key, node.nodes.size, {
                object: 'block',
                type: 'navbar-item',
                nodes: [{
                    object: 'block',
                    type: 'navbar-link',
                    data: {
                        properties: {
                            url
                        }
                    },
                    nodes: [{
                        object: 'block',
                        type: 'paragraph',
                        nodes: [{
                            object: 'text',
                            leaves: [
                                {
                                    object: 'leaf',
                                    text: 'Link',
                                    marks: []
                                }
                            ]
                        }]
                    }]
                }]
            });
        });
    }

    render() {
        let {
            isOpened
        } = this.state;

        let {
            children,
            attributes
        } = this.props;

        return (
            <Navbar {...attributes} color="light" expand="md" light>
                <NavbarToggler onClick={this.handleToggle} />
                <Collapse isOpen={isOpened} navbar>
                    <Nav navbar>
                        {children}
                        <button
                            type="button"
                            className="btn btn-primary"
                            contentEditable={false}
                            onClick={this.handleNavbarItemInsertButtonClick}>
                            +
                        </button>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavbarBlockNode;
