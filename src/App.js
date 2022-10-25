import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";
import TelaUsuarioCadastrado from './components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js'

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  
  const [tela,setTela] = useState(1)
  
  //const mudarTela = ()=>setTela(2)
  const mudarTelaFinal = ()=>{
    setTela(3)
  }

  //statements
   switch(tela){
    case 1:
     return (
       <MainContainer >
         <GlobalStyled />
         <TelaLogin mudarTela={()=>setTela(2)} />
         </MainContainer>
   );
       case 2:
       return (
         <MainContainer >
           <GlobalStyled />
           <TelaCadastro mudarTelaFinal={mudarTelaFinal} 
           mudarTela={()=>setTela(1)} />
         </MainContainer>
       );
       case 3:
        return(
          <MainContainer>
            <GlobalStyled/>
            <TelaUsuarioCadastrado/>
          </MainContainer>
        )
       default:
         return (
           <MainContainer >
             <GlobalStyled />
             <h1>Algo deu errado</h1>
           </MainContainer>
         )
   }

  //Expressions
  //return(
  //  <MainContainer >
  //      <GlobalStyled />

  //     {/*Ternário*/}
  //     {/*condicao ? true : false*/}
  //     {/*tela===1 ? <TelaLogin/> : <TelaCadastro/>*/}

  //     {/*Curto Circuito*/}
  //     {/*(tela && <Telalogin) || <TelaCadatro/>*/}


    
  //  </MainContainer>
  
 // )
}

export default App;