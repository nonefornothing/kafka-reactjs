import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="https://bankmandiri.co.id" className="navbar-brand">Employee Management App</a>
                    </div>
                </nav>
                
            </div>
        );
    }
}

export default HeaderComponent;