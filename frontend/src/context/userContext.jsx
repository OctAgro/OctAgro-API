import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [funcaoUsuario, setFuncaoUsuario] = useState("");
  const [generoUsuario, setGeneroUsuario] = useState("");

  const logout = () => {
    // APAGA O SET DO USUARIO, E REDIRECIONA ELE PRA PÁGINA DE LOGIN
    setUser(null);
    navigate("/")
  };

  useEffect(() => {
    async function fetchData() {
      try {
/*         const dados = await; função de pegar dados do usuário que logou */
        setNomeUsuario(dados.nome);
        setFuncaoUsuario(dados.funcao);
        setGeneroUsuario(dados.genero);
        setUser(dados); // Definir o objeto de usuário no estado
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const value = {
    user,
    nomeUsuario,
    funcaoUsuario,
    generoUsuario,
    logout,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;