import styled from "styled-components"

export const StyleRegisterPage= styled.div`
    margin-top:5vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items:center;
    max-width: 420px;
    header{
        display: flex;
        width: 70%;
        padding: 10%;
        
    }
    .header-button{
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
    .header-side{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }

    .Register-div{
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        padding: 25px 20px;
    }
    h2{
        text-align: center;
        color: var(--color-grey-0);
        font-family: 'Inter',sans-serif;
        font-weight: 700;
        font-size: 1rem;
    }
    p{
        text-align: center;
        font-family: 'Inter',sans-serif;
        font-weight: 400;
        font-size: .75rem;
    }
   
    
`