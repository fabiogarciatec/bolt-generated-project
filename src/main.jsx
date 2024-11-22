import React from 'react';
    import ReactDOM from 'react-dom';
    import { createClient } from '@supabase/supabase-js';
    import Login from './Login.jsx';

    // Configuração do Supabase usando variáveis de ambiente
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    export const supabase = createClient(supabaseUrl, supabaseAnonKey);

    ReactDOM.createRoot(document.getElementById('app')).render(<Login />);
