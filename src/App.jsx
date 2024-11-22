import React from 'react';
    import Sidebar from './Sidebar.jsx';

    function App() {
      return (
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ marginLeft: '200px', padding: '20px' }}>
            <h1>ERP para Venda de Serviços de Frete</h1>
            {/* Componentes para gerenciar serviços, clientes e pedidos */}
          </div>
        </div>
      );
    }

    export default App;
