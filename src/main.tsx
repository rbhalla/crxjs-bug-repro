import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";

import App from "./App";
import { Provider } from "./ContextWrapper";
import "./index.css";

const Wrapper = styled.div``;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <Wrapper>
        <App />
      </Wrapper>
    </Provider>
  </React.StrictMode>
);
