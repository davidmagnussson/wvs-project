import React from "react";
import "./style.css";
import { ParallelCoordinates } from "react-parcoords";
import { dataArr } from './data.js';
import Selectors from './Selectors';

class ParallellCoord extends React.Component {
    constructor() {
        super()
        this.state = {
            ActiveDataPoints: [],
            currentLine: [],
            data: dataArr,
            props: {},
            ActiveQuestion: "Feeling of happiness",
            ActiveWave: "2009-2005",
            wave: require('./datafiles/2009-2005.json'),
            // wave1: require('./datafiles/2014-2010.json'),
            // wave2: require('./datafiles/2009-2005.json'),
            // wave3: require('./datafiles/2004-2000.json'),
            // wave4: require('./datafiles/1999-1995.json'),
        };
    }

    componentDidMount() {
        this.feelingOfHappiness();
        // this.confidenceInGovernment();
        // this.howProudOfNationality();
        // this.thinkingAboutMeaningAndPurposeOfLife();
        // this.importantInLifeFamily();
        // this.importantInLifeWork();
        // this.satisfactionWithLife();
        // this.satisfactionOfFinacialSituationOfHousehold();

    };

    feelingOfHappiness = () => {
        const question = this.state.wave[0].questions[0].question
        console.log(question);
        console.log(this.state.wave);

        let dataArr = [];
        dataArr.push({
            'Country': "-",
            'Very_happy': 0,
            'Quite_happy': 0,
            'Not_very_happy': 0,
            'Not_at_all_happy': 0,
            'Dont_know': 0,
            'No_answer': 0,
        })
        let setData = this.state.wave[0].questions[0].answers;
        setData.forEach(element => {
            dataArr.push({
                'Country': element["Country/region"],
                'Very_happy': parseInt(element["Very happy"]),
                'Quite_happy': parseInt(element["Quite happy"]),
                'Not_very_happy': parseInt(element["Not very happy"]),
                'Not_at_all_happy': parseInt(element["Not at all happy"]),
                'Dont_know': parseInt(element["Don´t know"]),
                'No_answer': parseInt(element["No answer"]),
            }
            );
        })
        dataArr.push({
            'Country': "--",
            'Very_happy': 100,
            'Quite_happy': 100,
            'Not_very_happy': 100,
            'Not_at_all_happy': 100,
            'Dont_know': 100,
            'No_answer': 100,
        })

        const dimensions = {
            Country: {
                title: "Country",
                type: "string"
            },
            Very_happy: {
                title: "Very happy",
                type: "number"
            },
            Quite_happy: {
                title: "Quite happy",
                type: "number"
            },
            Not_very_happy: {
                title: "Not very happy",
                type: "number"
            },
            Not_at_all_happy: {
                title: "Not at all happy",
                type: "number"
            },
            Dont_know: {
                title: "Don´t know",
                type: "number"
            },
            No_answer: {
                title: "No answer",
                type: "number"
            },
        };

        this.setState({
            props: {
                color: '#777',
                width: 1100,
                height: 500,
                dimensions,
                question: this.state.wave[0].questions[0].question,
                wave: this.state.activeWave,
                data: dataArr,
                highlights: [],
                onBrush: this.OnBrushCall,
                onBrushEnd: this.OnBrushEndCall,
                onLineHover: this.OnHoverCall,
                onLinesHover: this.OnlinesHoverCall
            }
        });
    }

    confidenceInGovernment = () => {
        const question = this.state.wave[0].questions[1].question;
        console.log(question);

        let dataArr = [];
        dataArr.push({
            'Country': "-",
            'Very_happy': 0,
            'Quite_happy': 0,
            'Not_very_happy': 0,
            'Not_at_all_happy': 0,
            'Dont_know': 0,
            'No_answer': 0,
        })
        let setData = this.state.wave[0].questions[1].answers;
        setData.forEach(element => {
            dataArr.push({
                'Country': element["Country/region"],
                'A_great_deal': parseInt(element["A great deal"]),
                'Quite_a_lot': parseInt(element["Quite a lot"]),
                'Not_very_much': parseInt(element["Not very much"]),
                'None_at_all': parseInt(element["None at all"]),
                'Dont_know': parseInt(element["Don´t know"]),
                'No_answer': parseInt(element["No answer"]),
            }
            );
        })
        dataArr.push({
            'Country': "--",
            'A_great_deal': 100,
            'Quite_a_lot': 100,
            'Not_very_much': 100,
            'None_at_all': 100,
            'Dont_know': 100,
            'No_answer': 100,
        })

        const dimensions = {
            Country: {
                title: "Country",
                type: "string"
            },
            A_great_deal: {
                title: "A gret deal",
                type: "number"
            },
            Quite_a_lot: {
                title: "Quite a lot",
                type: "number"
            },
            Not_very_much: {
                title: "Not very much",
                type: "number"
            },
            None_at_all: {
                title: "Not at all",
                type: "number"
            },
            Dont_know: {
                title: "Don´t know",
                type: "number"
            },
            No_answer: {
                title: "No answer",
                type: "number"
            },
        };

        this.setState({
            props: {
                color: '#777',
                width: 1100,
                height: 500,
                dimensions,
                question: this.state.wave[0].questions[1].question,
                wave: this.state.activeWave,
                data: dataArr,
                highlights: [],
                onBrush: this.OnBrushCall,
                onBrushEnd: this.OnBrushEndCall,
                onLineHover: this.OnHoverCall,
                onLinesHover: this.OnlinesHoverCall
            }
        });
    }

    thinkingAboutMeaningAndPurposeOfLife = () => {
        const question = this.state.wave[0].questions[2].question;
        console.log(question);

        let dataArr = [];
        dataArr.push({
            'Country': "-",
            'Often': 0,
            'Sometimes': 0,
            'Rarely': 0,
            'Never': 0,
            'Dont_know': 0,
            'No_answer': 0,
        })
        let setData = this.state.wave[0].questions[2].answers;
        setData.forEach(element => {
            dataArr.push({
                'Country': element["Country/region"],
                'Often': parseInt(element["Often"]),
                'Sometimes': parseInt(element["Sometimes"]),
                'Rarely': parseInt(element["Rarely"]),
                'Never': parseInt(element["Never"]),
                'Dont_know': parseInt(element["Don´t know"]),
                'No_answer': parseInt(element["No answer"]),
            }
            );
        })
        dataArr.push({
            'Country': "--",
            'Often': 100,
            'Sometimes': 100,
            'Rarely': 100,
            'Never': 100,
            'Dont_know': 100,
            'No_answer': 100,
        })

        const dimensions = {
            Country: {
                title: "Country",
                type: "string"
            },
            Often: {
                title: "Often",
                type: "number"
            },
            Sometimes: {
                title: "Sometimes",
                type: "number"
            },
            Rarely: {
                title: "Rarely",
                type: "number"
            },
            Never: {
                title: "Never",
                type: "number"
            },
            Dont_know: {
                title: "Don´t know",
                type: "number"
            },
            No_answer: {
                title: "No answer",
                type: "number"
            },
        };

        this.setState({
            props: {
                color: '#777',
                width: 1100,
                height: 500,
                dimensions,
                question: this.state.wave[0].questions[2].question,
                wave: this.state.activeWave,
                data: dataArr,
                highlights: [],
                onBrush: this.OnBrushCall,
                onBrushEnd: this.OnBrushEndCall,
                onLineHover: this.OnHoverCall,
                onLinesHover: this.OnlinesHoverCall
            }
        });
    }

    howProudOfNationality = () => {
        const question = this.state.wave[0].questions[3].question;
        console.log(question);

        let dataArr = [];
        dataArr.push({
            'Country': "-",
            'Very_proud': 0,
            'Quite_proud': 0,
            'Not_very_proud': 0,
            'Not_at_all_proud': 0,
            'Dont_know': 0,
            'No_answer': 0,
        })
        let setData = this.state.wave[0].questions[3].answers;
        setData.forEach(element => {
            dataArr.push({
                'Country': element["Country/region"],
                'Very_proud': parseInt(element["Very proud"]),
                'Quite_proud': parseInt(element["Quite proud"]),
                'Not_very_proud': parseInt(element["Not very proud"]),
                'Not_at_all_proud': parseInt(element["Not at all proud"]),
                'Dont_know': parseInt(element["Don´t know"]),
                'No_answer': parseInt(element["No answer"]),
            }
            );
        })
        dataArr.push({
            'Country': "--",
            'Very_proud': 100,
            'Quite_proud': 100,
            'Not_very_proud': 100,
            'Not_at_all_proud': 100,
            'Dont_know': 100,
            'No_answer': 100,
        })

        const dimensions = {
            Country: {
                title: "Country",
                type: "string"
            },
            Very_proud: {
                title: "Very proud",
                type: "number"
            },
            Quite_proud: {
                title: "Quite proud",
                type: "number"
            },
            Not_very_proud: {
                title: "Not very proud",
                type: "number"
            },
            Not_at_all_proud: {
                title: "Not at all proud",
                type: "number"
            },
            Dont_know: {
                title: "Don´t know",
                type: "number"
            },
            No_answer: {
                title: "No answer",
                type: "number"
            },
        };

        this.setState({
            props: {
                color: '#777',
                width: 1100,
                height: 500,
                dimensions,
                question: this.state.wave[0].questions[3].question,
                wave: this.state.activeWave,
                data: dataArr,
                highlights: [],
                onBrush: this.OnBrushCall,
                onBrushEnd: this.OnBrushEndCall,
                onLineHover: this.OnHoverCall,
                onLinesHover: this.OnlinesHoverCall
            }
        });
    }

    importantInLifeFamily = () => {
        const question = this.state.wave[0].questions[4].question;
        console.log(question);

        let dataArr = [];
        dataArr.push({
            'Country': "-",
            'Very_important': 0,
            'Rather_important': 0,
            'Not_very_important': 0,
            'Not_at_all_important': 0,
            'Dont_know': 0,
            'No_answer': 0,
        })
        let setData = this.state.wave[0].questions[4].answers;
        setData.forEach(element => {
            dataArr.push({
                'Country': element["Country/region"],
                'Very_important': parseInt(element["Very important"]),
                'Rather_important': parseInt(element["Rather important"]),
                'Not_very_important': parseInt(element["Not very important"]),
                'Not_at_all_important': parseInt(element["Not at all important"]),
                'Dont_know': parseInt(element["Don´t know"]),
                'No_answer': parseInt(element["No answer"]),
            }
            );
        })
        dataArr.push({
            'Country': "--",
            'Very_important': 100,
            'Rather_important': 100,
            'Not_very_important': 100,
            'Not_at_all_important': 100,
            'Dont_know': 100,
            'No_answer': 100,
        })

        const dimensions = {
            Country: {
                title: "Country",
                type: "string"
            },
            Very_important: {
                title: "Very important",
                type: "number"
            },
            Rather_important: {
                title: "Rather important",
                type: "number"
            },
            Not_very_important: {
                title: "Not very important",
                type: "number"
            },
            Not_at_all_important: {
                title: "Not at all important",
                type: "number"
            },
            Dont_know: {
                title: "Don´t know",
                type: "number"
            },
            No_answer: {
                title: "No answer",
                type: "number"
            },
        };

        this.setState({
            props: {
                color: '#777',
                width: 1100,
                height: 500,
                dimensions,
                question: this.state.wave[0].questions[4].question,
                wave: this.state.activeWave,
                data: dataArr,
                highlights: [],
                onBrush: this.OnBrushCall,
                onBrushEnd: this.OnBrushEndCall,
                onLineHover: this.OnHoverCall,
                onLinesHover: this.OnlinesHoverCall
            }
        });
    }

    importantInLifeWork = () => {
        const question = this.state.wave[0].questions[5].question;
        console.log(question);

        let dataArr = [];
        dataArr.push({
            'Country': "-",
            'Very_important': 0,
            'Rather_important': 0,
            'Not_very_important': 0,
            'Not_at_all_important': 0,
            'Dont_know': 0,
            'No_answer': 0,
        })
        let setData = this.state.wave[0].questions[5].answers;
        setData.forEach(element => {
            dataArr.push({
                'Country': element["Country/region"],
                'Very_important': parseInt(element["Very important"]),
                'Rather_important': parseInt(element["Rather important"]),
                'Not_very_important': parseInt(element["Not very important"]),
                'Not_at_all_important': parseInt(element["Not at all important"]),
                'Dont_know': parseInt(element["Don´t know"]),
                'No_answer': parseInt(element["No answer"]),
            }
            );
        })
        dataArr.push({
            'Country': "--",
            'Very_important': 100,
            'Rather_important': 100,
            'Not_very_important': 100,
            'Not_at_all_important': 100,
            'Dont_know': 100,
            'No_answer': 100,
        })

        const dimensions = {
            Country: {
                title: "Country",
                type: "string"
            },
            Very_important: {
                title: "Very important",
                type: "number"
            },
            Rather_important: {
                title: "Rather important",
                type: "number"
            },
            Not_very_important: {
                title: "Not very important",
                type: "number"
            },
            Not_at_all_important: {
                title: "Not at all important",
                type: "number"
            },
            Dont_know: {
                title: "Don´t know",
                type: "number"
            },
            No_answer: {
                title: "No answer",
                type: "number"
            },
        };

        this.setState({
            props: {
                color: '#777',
                width: 1100,
                height: 500,
                dimensions,
                question: this.state.wave[0].questions[5].question,
                wave: this.state.activeWave,
                data: dataArr,
                highlights: [],
                onBrush: this.OnBrushCall,
                onBrushEnd: this.OnBrushEndCall,
                onLineHover: this.OnHoverCall,
                onLinesHover: this.OnlinesHoverCall
            }
        });
    }

    satisfactionWithLife = () => {
        const question = this.state.wave[0].questions[6].question;
        console.log(question);

        let dataArr = [];
        dataArr.push({
            'Country': "-",
            'two': 0,
            'three': 0,
            'four': 0,
            'five': 0,
            'six': 0,
            'seven': 0,
            'eight': 0,
            'nine': 0,
            'Dissatisfied': 0,
            'Satisfied': 0,
            'Mean': 0,
            'Standard_deviation': 0,
            'Dont_know': 0,
            'No_answer': 0,
        })
        let setData = this.state.wave[0].questions[6].answers;
        setData.forEach(element => {
            dataArr.push({
                'Country': element["Country/region"],
                'two': parseInt(element["2"]),
                'three': parseInt(element["3"]),
                'four': parseInt(element["4"]),
                'five': parseInt(element["5"]),
                'six': parseInt(element["6"]),
                'seven': parseInt(element["7"]),
                'eight': parseInt(element["8"]),
                'nine': parseInt(element["9"]),
                'Dissatisfied': parseInt(element["Dissatisfied"]),
                'Satisfied': parseInt(element["Satisfied"]),
                'Mean': parseInt(element["Mean"]),
                'Standard_deviation': parseInt(element["Standard Deviation"]),
                'Dont_know': parseInt(element["Don´t know"]),
                'No_answer': parseInt(element["No answer"]),
            }
            );
        })
        dataArr.push({
            'Country': "--",
            'two': 100,
            'three': 100,
            'four': 100,
            'five': 100,
            'six': 100,
            'seven': 100,
            'eight': 100,
            'nine': 100,
            'Dissatisfied': 100,
            'Satisfied': 100,
            'Mean': 100,
            'Standard_deviation': 100,
            'Dont_know': 100,
            'No_answer': 100,
        })

        const dimensions = {
            Country: {
                title: "Country",
                type: "string"
            },
            two: {
                title: "two",
                type: "number"
            },
            three: {
                title: "three",
                type: "number"
            },
            four: {
                title: "4",
                type: "number"
            },
            five: {
                title: "5",
                type: "number"
            },
            six: {
                title: "6",
                type: "number"
            },
            seven: {
                title: "7",
                type: "number"
            },
            eight: {
                title: "8",
                type: "number"
            },
            nine: {
                title: "9",
                type: "number"
            },
            Mean: {
                title: "Mean",
                type: "number"
            },
            Standard_deviation: {
                title: "STD",
                type: "number"
            },
            Dont_know: {
                title: "Don't know",
                type: "number"
            },
            No_answer: {
                title: "No answer",
                type: "number"
            },
        };

        this.setState({
            props: {
                color: '#777',
                width: 1100,
                height: 500,
                dimensions,
                question: this.state.wave[0].questions[6].question,
                wave: this.state.activeWave,
                data: dataArr,
                highlights: [],
                onBrush: this.OnBrushCall,
                onBrushEnd: this.OnBrushEndCall,
                onLineHover: this.OnHoverCall,
                onLinesHover: this.OnlinesHoverCall
            }
        });
    }

    satisfactionOfFinacialSituationOfHousehold = () => {
        const question = this.state.wave[0].questions[7].question;
        console.log(question);


        let dataArr = [];
        dataArr.push({
            'Country': "-",
            'two': 0,
            'three': 0,
            'four': 0,
            'five': 0,
            'six': 0,
            'seven': 0,
            'eight': 0,
            'nine': 0,
            'Dissatisfied': 0,
            'Satisfied': 0,
            'Mean': 0,
            'Standard_deviation': 0,
            'Dont_know': 0,
            'No_answer': 0,
        })
        let setData = this.state.wave[0].questions[7].answers;
        setData.forEach(element => {
            dataArr.push({
                'Country': element["Country/region"],
                'two': parseInt(element["2"]),
                'three': parseInt(element["3"]),
                'four': parseInt(element["4"]),
                'five': parseInt(element["5"]),
                'six': parseInt(element["6"]),
                'seven': parseInt(element["7"]),
                'eight': parseInt(element["8"]),
                'nine': parseInt(element["9"]),
                'Dissatisfied': parseInt(element["Dissatisfied"]),
                'Satisfied': parseInt(element["Satisfied"]),
                'Mean': parseInt(element["Mean"]),
                'Standard_deviation': parseInt(element["Standard Deviation"]),
                'Dont_know': parseInt(element["Don´t know"]),
                'No_answer': parseInt(element["No answer"]),
            }
            );
        })
        dataArr.push({
            'Country': "--",
            'two': 100,
            'three': 100,
            'four': 100,
            'five': 100,
            'six': 100,
            'seven': 100,
            'eight': 100,
            'nine': 100,
            'Dissatisfied': 100,
            'Satisfied': 100,
            'Mean': 100,
            'Standard_deviation': 100,
            'Dont_know': 100,
            'No_answer': 100,
        })

        const dimensions = {
            Country: {
                title: "Country",
                type: "string"
            },
            two: {
                title: "two",
                type: "number"
            },
            three: {
                title: "three",
                type: "number"
            },
            four: {
                title: "4",
                type: "number"
            },
            five: {
                title: "5",
                type: "number"
            },
            six: {
                title: "6",
                type: "number"
            },
            seven: {
                title: "7",
                type: "number"
            },
            eight: {
                title: "8",
                type: "number"
            },
            nine: {
                title: "9",
                type: "number"
            },
            Mean: {
                title: "Mean",
                type: "number"
            },
            Standard_deviation: {
                title: "STD",
                type: "number"
            },
            Dont_know: {
                title: "Don't know",
                type: "number"
            },
            No_answer: {
                title: "No answer",
                type: "number"
            },
        };

        this.setState({
            props: {
                color: '#777',
                width: 1100,
                height: 500,
                dimensions,
                question: this.state.wave[0].questions[7].question,
                wave: this.state.activeWave,
                data: dataArr,
                highlights: [],
                onBrush: this.OnBrushCall,
                onBrushEnd: this.OnBrushEndCall,
                onLineHover: this.OnHoverCall,
                onLinesHover: this.OnlinesHoverCall
            }
        });
    }

    // --------------------

    updateChart = (condition, wave) => {
    }


    setActiveWave = (e) => {
        this.setState({
            ActiveWave: e.target.id,
            wave: require("./datafiles/" + e.target.id + ".json")
        }, () => {
            // console.log("Current wave: ", this.state.ActiveWave);
            // console.log("Data of wave: ", this.state.wave);

            if (this.state.ActiveQuestion === "Feeling of Happiness") {
                this.feelingOfHappiness();
            } else if (this.state.ActiveQuestion === "Confidence in goverment") {
                this.confidenceInGovernment();
            } else if (this.state.ActiveQuestion === "How proud of nationality") {
                this.howProudOfNationality();
            } else if (this.state.ActiveQuestion === "Important in life: Work") {
                this.importantInLifeWork();
            } else if (this.state.ActiveQuestion === "Important in life: Family") {
                this.importantInLifeFamily();
            } else if (this.state.ActiveQuestion === "Satisfaction with financial situation of household") {
                this.satisfactionOfFinacialSituationOfHousehold();
            } else if (this.state.ActiveQuestion === "Satisfaction with life") {
                this.satisfactionWithLife();
            } else if (this.state.ActiveQuestion === "Thinking about meaning and purpose of life") {
                this.thinkingAboutMeaningAndPurposeOfLife();
            }

        });
    }

    setActiveCondition = (e) => {
        this.setState({
            ActiveQuestion: e.target.id
        }, () => {
            // console.log("New question", this.state.ActiveQuestion);
            // console.log("Current Wave: ", this.state.wave);

            if (this.state.ActiveQuestion === "Feeling of Happiness") {
                this.feelingOfHappiness();
            } else if (this.state.ActiveQuestion === "Confidence in goverment") {
                this.confidenceInGovernment();
            } else if (this.state.ActiveQuestion === "How proud of nationality") {
                this.howProudOfNationality();
            } else if (this.state.ActiveQuestion === "Important in life: Work") {
                this.importantInLifeWork();
            } else if (this.state.ActiveQuestion === "Important in life: Family") {
                this.importantInLifeFamily();
            } else if (this.state.ActiveQuestion === "Satisfaction with financial situation of household") {
                this.satisfactionOfFinacialSituationOfHousehold();
            } else if (this.state.ActiveQuestion === "Satisfaction with life") {
                this.satisfactionWithLife();
            } else if (this.state.ActiveQuestion === "Thinking about meaning and purpose of life") {
                this.thinkingAboutMeaningAndPurposeOfLife();
            }
        })
    }

    setActiveDataPoints = arr => {
        this.setState({ ActiveDataPoints: arr });
    };

    getActiveDataPoints = () => {
        return this.state.ActiveDataPoints;
    };

    setCurrentLine = arr => {
        this.setState({ currentLine: arr });
    };

    getCurrentLine = () => {
        return this.state.currentLine;
    };

    OnBrushEndCall = incomingData => {
        let NewActiveData = [];
        incomingData.data.forEach(element => {
            NewActiveData.push(element);
        });
        this.setActiveDataPoints(NewActiveData);
    };

    OnHoverCall = (incData) => {
        let hovered = [];
        if (typeof incData !== "undefined") {
            hovered.push(incData);
        }
        this.setCurrentLine(hovered);
        // console.log("hovering line: " + hovered);
    }
    render() {
        return (
            <div>
                <h2>{this.state.ActiveQuestion} - {this.state.ActiveWave}</h2>
                <div id="d3component">
                    <ParallelCoordinates {...this.state.props} />
                </div>
                <div>
                    <Selectors activeCondition={this.setActiveCondition} activeWave={this.setActiveWave} />
                </div>
            </div>
        )
    }
}


export default ParallellCoord;
