import * as React from 'react';

export class PrivacyCenter extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if ( window.pcconfig === undefined ) {
            const script = document.createElement("script");
            script.src = "https://cdn.port.im/privacycenter/main.js";
            script.async = true;

            document.body.appendChild(script);

            let pcconfig = [];
            pcconfig.push({key: this.props.id});
            pcconfig.push({auto: false});

            window.pcconfig = pcconfig;
        }
    }

    open(e) {
        if ( window.openPrivacyCenter !== undefined ) {
            e.preventDefault();
            window.openPrivacyCenter();
        }
    }

    render() {
        return <a href={this.props.fallback} target="_blank" onClick={this.open}>{this.props.children}</a>
    }
}