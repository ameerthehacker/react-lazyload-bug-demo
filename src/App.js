import React from "react";
import LazyLoad from "react-lazyload";
import "./styles.css";

const Placeholder = () => <div className="placeholder">Placeholder</div>;
const Content = ({ children }) => <div className="content">{children}</div>;

export default function App() {
  return (
    <div className="App">
      <LazyLoad placeholder={<Placeholder />} unmountIfInvisible={true}>
        <Content>
          With <code>unmountIfInvisible</code>
        </Content>
      </LazyLoad>

      <LazyLoad placeholder={<Placeholder />}>
        <Content>
          Without <code>unmountIfInvisible</code>
        </Content>
      </LazyLoad>
    </div>
  );
}
