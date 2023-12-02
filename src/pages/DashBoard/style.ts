import styled from "styled-components"

export const StyleDashboardPage= styled.div`
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
    p{
        color: var(--color-yellow);
        font-family: 'Inter',sans-serif;
        font-weight: 400;
        font-size: .75rem;
    }
    ::-webkit-scrollbar{
        color: var(--color-yellow);
    }
    ul{
        overflow-y: scroll;
        width: 90%;
        padding: 5% 0;
    }
    .sectiondashboard{
        width: 100%;
        max-height: 62vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 10px;
    }
    .my_Contact{
        display: flex;
        width: 70%;
        align-items: flex-start;
        justify-content: space-between;
    }
    .my_Contact_data{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        
    }
    .my_Contact_data span{
        display: flex;
        gap: 5px;
    }

    .cardContact{
        display: flex;
        justify-content: space-between;
        background-color: var(--color-lightgray-2);
        background-image: linear-gradient(180deg,var(--color-lightgray-1),var(--color-lightgray-2));
        padding: 10px;
        margin: 10px 0;
        border-radius: 8px;
    }
    .cardContact_data{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        gap: 10px;
    }

    .cardContact_data span{
        display: flex;
        gap: 5px;
    }
    .cardContact_buttonbox{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .cardContact_buttonbox button{
        padding: 5px;
    }

    @media (min-width: 768px) {
        max-width: 920px;
        .sectiondashboard{
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            gap: 10px;
            max-height: 56vh;
        }
        ul{
            padding: 0;
            overflow-y: scroll;
            max-height: 80%;
            width: 60%;
        }
        
    }
    `