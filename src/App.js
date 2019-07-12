import React from 'react';
import Layout from './components/Layout/Layout';
import DonerBuilder from './containers/DonerBuilder/DonerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <DonerBuilder />
      </Layout> 
    </div>
  );
}

export default App;
