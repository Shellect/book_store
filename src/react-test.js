// Vanilla JS

// function f() {
//     let d = new Date();
//     let content = d.toLocaleTimeString();

//     let spanEl = document.createElement('span');
//     spanEl.innerText = content;
//     let mountPoint = document.querySelector("#root");
//     if (mountPoint) {
//         mountPoint.innerHTML = "";
//         mountPoint.append(spanEl);
//     }
// }

// f();
// setInterval(f, 1000);

// React

class Clock extends React.Component {
    constructor(props) {
        super(props);
        let d = new Date();
        this.state = {
            time: d.toLocaleTimeString()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }


    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState(function(state, props){
            let d = new Date();
            return {
                time: d.toLocaleTimeString()
            }
        })
    }

    render() {
        return (
            React.createElement('span', this.props, this.state.time)
        );

    }
}
let span = React.createElement(Clock, { className: "text-danger" });

let mountPoint = document.querySelector("#root");
ReactDOM.render(span, mountPoint);