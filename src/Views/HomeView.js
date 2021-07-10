import React, {Component} from "react";
import Luckysheet from "../component/Luckysheet";
import {withRouter} from "react-router-dom";

class HomeView extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <Luckysheet/>
                </header>
            </div>)
    };
}
export default withRouter(HomeView);