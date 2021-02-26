import React, {Component} from 'react';
import './styles.css';

class ActionBar extends Component {
    render(){
        let className = this.props.className ? ` ${this.props.className}` : '';
        let style = {...this.props.style};
        return(
            this.props.show === true && <div id="module" className={"module " + className} style={style}>
                {this.props.children}
            </div>
        )
    }
}

export default ActionBar;