import * as React from 'react';

declare global {
    interface Window { 
        pcconfig: any[];
        openPrivacyCenter: () => void;
    }
}

interface PrivaceCenterProps {
    fallback: string;
    id: string;
    children?: React.ReactNode;
}

export class PrivacyCenter extends React.Component<PrivaceCenterProps, any> {

    constructor(props: PrivaceCenterProps | Readonly<PrivaceCenterProps>) {
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

    open(e: any) {
        if ( window.openPrivacyCenter !== undefined ) {
            e.preventDefault();
            window.openPrivacyCenter();
        }
    }

    render() {
        return <a href={this.props.fallback} target="_blank" onClick={this.open}>{this.props.children}</a>
    }
}