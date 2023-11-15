import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouters } from "./routers";
import { privateRouters } from "./routers";
import { DefaultLayout } from "./Components/Layout";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouters.map((route, index) => {
            const Page = route.component
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            return (<Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              } />)
          })}
          {privateRouters.map((route, index) => {
            const Page = route.component
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            return (<Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              } />)
          })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
