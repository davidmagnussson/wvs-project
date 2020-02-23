import React from "react";

class Selectors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleClickCondition = (e) => {
        console.log(e.target.id);
    }

    handleClickWave = (e) => {
        console.log(e.target.id);
    }

    render() {
        return (
            <div className="row">
                <div className="offset-6 row">
                    <div id="btn-group col">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Condition</button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <span className="dropdown-item" onClick={this.props.activeCondition} id="Feeling of Happiness">Feeling of Happiness</span>
                                <span className="dropdown-item" onClick={this.props.activeCondition} id="Confidence in goverment" >Confidence in goverment</span>
                                <span className="dropdown-item" onClick={this.props.activeCondition} id="How proud of nationality" >How proud of nationality</span>
                                <span className="dropdown-item" onClick={this.props.activeCondition} id="Important in life: Work" >Important in life: Work</span>
                                <span className="dropdown-item" onClick={this.props.activeCondition} id="Important in life: Family" >Important in life: Family</span>
                                <span className="dropdown-item" onClick={this.props.activeCondition} id="Satisfaction with financial situation of household" >Satisfaction with financial situation of household</span>
                                <span className="dropdown-item" onClick={this.props.activeCondition} id="Satisfaction with life" >Satisfaction with life</span>
                                <span className="dropdown-item" onClick={this.props.activeCondition} id="Thinking about meaning and purpose of life" >Thinking about meaning and purpose of life</span>
                            </div>
                        </div>
                    </div>
                    <div className="btn-group col">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Wave</button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <span className="dropdown-item" onClick={this.props.activeWave} id="2014-2010">2014-2010</span>
                                <span className="dropdown-item" onClick={this.props.activeWave} id="2009-2005">2009-2005</span>
                                <span className="dropdown-item" onClick={this.props.activeWave} id="2004-2000">2004-2000</span>
                                <span className="dropdown-item" onClick={this.props.activeWave} id="1999-1995">1999-1995</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Selectors;