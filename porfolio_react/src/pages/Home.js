import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../components/NavBar/index';
import Footer from '../components/Footer/index';
import Banner from '../components/Banner/index';
export class Home extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
               <NavBar />
                <Banner />
               <Footer /> 
            </div>
        )
    }
}

export default Home
