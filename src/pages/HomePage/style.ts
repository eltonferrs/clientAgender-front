import styled from "styled-components"

export const StyleLoginPage= styled.div`
    margin-top:15vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items:center;
    max-width: 420px;
    h2{
        text-align: center;
        color: var(--color-grey-0);
        font-family: 'Inter',sans-serif;
        font-weight: 700;
        font-size: 1rem;
    }
    h3{
        text-align: center;
        max-width: 260px;
        color: var(--color-yellow-2);
    }
    p{
        text-align: center;
        color: var(--color-grey-1);
        font-family: 'Inter',sans-serif;
        font-weight: 400;
        font-size: .75rem;
    }
    .LoginBox{
        margin-top: 25px;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        padding: 25px 20px;
    }
    
`