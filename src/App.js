import React from 'react';
import{ BrowserRouter as Router, Route } from 'react-router-dom';

import FormKilimpo from './components/form-kilimpo.component';

function App() {
  return (
    <Router>
      <Route path='/' component={FormKilimpo} />
    </Router>
  );
}

export default App;
