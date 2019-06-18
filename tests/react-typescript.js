module.exports = () => `
import * as React from 'react';

export interface HelloProps { compiler: String; framework: string; }

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

// testing no-unused-vars
const hello: String  = "World";
`;
