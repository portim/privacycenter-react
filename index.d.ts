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
export declare class PrivacyCenter extends React.Component<PrivaceCenterProps, any> {
    constructor(props: PrivaceCenterProps | Readonly<PrivaceCenterProps>);
    componentDidMount(): void;
    open(e: any): void;
    render(): JSX.Element;
}
export {};
