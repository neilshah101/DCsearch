import { Component } from "react";
// import './BaseLayout.css'

export class BaseLayout extends Component {

    render() {
        return (
            <div>
                    {this.props.children}
            </div>
        )
    }
}