import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import CardPersonalInfo from "./Components/CardPersonalInfo";
import CardFilm from "./Components/CardFilm";


const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/people/:id">
            <CardPersonalInfo />
          </Route>
          <Route exact path="/film/:id">
            <CardFilm />
          </Route>
        </Switch>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
