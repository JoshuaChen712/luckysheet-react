import Luckysheet from "../component/Luckysheet";
import {withRouter} from "react-router-dom";
import React, { Component } from 'react';


const luckyCss = {
    margin: '0px',
    padding: '0px',
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0px',
    top: '0px'
}

class SheetView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            options : {
                container: "luckysheet",
                title:'hello',
                plugins:['chart'],
                lang:'zh',
                showtoolbar:false,
                showinfobar:false,
                showsheetbar:false,
                showstatisticBar:false,
                allowUpdate:true,
                loadUrl:"http://localhost:8080/getSheetDataTest/"+this.props.match.params.sheetID,
                updateUrl:"ws://localhost:8080/webSocket"
            }
        }
        console.log(this.props.match.params.showID);
    }
    componentDidMount() {
        const luckysheet = window.luckysheet;
        luckysheet.create(this.state.options);
        // console.log(this.sheet.getluckysheetfile());
    }
    render(){
        return(
            <div
                id="luckysheet"
                style={luckyCss}
            ></div>
        )
    };
}
export default withRouter(SheetView);

