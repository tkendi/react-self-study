import React , {Component} from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: '10px'
    },
};

class Index_SideBar extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Button variant = "contained" color = "primary" className = {classes.root}>
                <div>{this.props.name}</div>
            </Button>
        )
    }
}



export default withStyles(styles) (Index_SideBar);
