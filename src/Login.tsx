import React, { useState } from 'react';
    import { supabase } from './main';

    const Login: React.FC = () => {
      const [username, setUsername] = useState<string>('');
      const [password, setPassword] = useState<string>('');
      const [error, setError] = useState<string | null>(null);

      const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({
          email: username,
          password: password,
        });
        if (error) {
          setError(error.message);
        } else {
          // Redirecionar ou realizar outra ação após o login bem-sucedido
          console.log('Login bem-sucedido!');
        }
      };

      return (
        <div className="login-container">
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Usuário:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Entrar</button>
          </form>
        </div>
      );
    };

    export default Login;
