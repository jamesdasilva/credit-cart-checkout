import React from "react";
import ReactDOM from "react-dom";
import Teste from "./js/components/testando";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Teste />, wrapper) : false;