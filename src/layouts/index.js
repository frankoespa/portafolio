import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import Carga from '../components/Carga'
import Header from '../components/Header'

class TemplateWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state={carga:true}

    }

    componentDidMount() {

        setInterval(()=>{
            this.setState({carga:false})
        },1000)
        
    }

    render() {
        return (
            <div id="page" ref={(page) => { this.page = page }}>
                {this.state.carga && <Carga/>}  
                <Header />
                {this.props.children()}
            </div>
        );
    }
}
TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper;
