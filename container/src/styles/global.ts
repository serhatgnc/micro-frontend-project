import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Rubik', sans-serif;
       ::selection{
           background: #4a4;
       }
   }
   #root{
       margin:0 auto;
   }
`
