import * as React from 'react';
import SlickSlider from 'react-slick';
import './Slider.scss'

class Slider extends React.Component<any, any> {
    render() {
        let {
            children,
            ...props
        } = this.props;

        return (
            <SlickSlider {...props}>{children}</SlickSlider>
        );
    }
}

export default Slider;
