import React from 'react';
class Luckysheet extends React.Component {

    componentDidMount() {
        const luckysheet = window.luckysheet;
        luckysheet.create({
            container: "luckysheet",
            title:'hello',
            plugins:['chart'],
            lang:'zh',
            showtoolbar:false,
            showinfobar:false,
            showsheetbar:false,
            showstatisticBar:false,
            allowUpdate:true,
            loadUrl:"http://localhost:8080/getSheetDataTest/3",
            updateUrl:"ws://localhost:8080/webSocket"
        });
        // console.log(luckysheet.getluckysheetfile());
    }
    render() {
        const luckyCss = {
            margin: '0px',
            padding: '0px',
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: '0px',
            top: '0px'
        }
        return (
            <div
            id="luckysheet"
            style={luckyCss}
            ></div>
        )
    }
}

export default Luckysheet