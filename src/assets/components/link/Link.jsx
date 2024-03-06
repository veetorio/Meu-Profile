import styled from "styled-components";

const LiStyled = styled.div`
    margin-right:30%;
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:.5s;



    &:after{
        content: '';
        width: 170px;
        height: 4px;
        transform: scaleX(0);
        position: absolute;
        bottom: 0;
        bottom:bottom right;
        transition:.5s;

    }
    &:hover:after{
        content: '';
        width: 170px;
        height: 4px;
        background:#6554D1;
        position: absolute;
        bottom: 0;
        transform: bottom left;
        transform: scaleX(1);
    }
    &:hover{
        font-size:16px;
        background:242424;
    }





`




function Link(prop){
    return (
        <LiStyled>
            {prop.txt}
        </LiStyled>
    )
}

export default Link;