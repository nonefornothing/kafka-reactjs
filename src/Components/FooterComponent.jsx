import React, { Component } from 'react';
import '../styles/footer.css';
 

class FooterComponent extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            
        }
    }
    
    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">
                        All Rights Reversed 2020 @Bot-Inc
                    </span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;