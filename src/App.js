import React from "react";
import { render } from "react-dom";

const appEl = document.getElementById('app');

const HelloWorld = () => <div>Hello, World! Please!!</div>;

render(<HelloWorld />, appEl);
