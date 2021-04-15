import * as React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import CardPersonalInfo from "./Components/CardPersonalInfo";
import Home from "./Components/Home";

const queryClient = new QueryClient();

function App() {
  const [info, setInfo] = React.useState('')
  React.useEffect(() => {
    setInfo("hello");
    
  }, [])
  
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/people/:id">
            <CardPersonalInfo info={info}/>
          </Route>
        </Switch>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
