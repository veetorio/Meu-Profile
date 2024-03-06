import styled from "styled-components";


const SpaceStyled = styled.div`
    position: relative;
    height: 39.011%;
    width: 100%;
    top: 14.98%;
    padding: 0 40px;
    display: flex;
    align-items: center;

    h1{
        /* word-break:break-all; */
        font-family: "Space Mono", monospace;
        font-size: 3rem;
        width: 59%;
        height: 73.944%;

    }







`



function SpaceSection() {
    return (
        <SpaceStyled>
            <h1>
                {'<JaveiroCosmico> Olá,eu sou Vitorio, futuro desenvolvedor <JaveiroCosmico>'}
            </h1>
        </SpaceStyled>
    )
}

export default SpaceSection;