import React from 'react';
import {Routees} from "./routes/Routes";
import {AuthProvider } from './Context/auth';

function App() {

  return (
    <AuthProvider>
      <Routees/>
    </AuthProvider>
  );
}

export default App;
