import styled from "styled-components";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import Link from "../link/Link";


const HeaderStyle = styled.header`
    height: 14.842%;
    width: 100%;
    display: flex;
    box-shadow: 0 4px 25px black;
    position: fixed;
    background:222222;


    &::after{
        content: '';
        width: 100%;
        height: .5%;
        background:#6554D1;
        box-shadow:5px 5px 15px black;
        position: absolute;
        bottom: 0;
        animation: load 5s ease-in-out;
        animation-timeline: scroll();
    }



    @keyframes load {
        to{
            width: 0%;
        }from{
            width: 100%;
        }
        
    }
`
const Conteiner = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 50%;
    background:${(prop) => prop.colorize};
    padding-left: ${(prop) => `${prop.pad || 0 }px`};
`
const NavComponent = styled.nav`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 10%;
    padding:0 40px;
`

function Header(links){
    return (
        <HeaderStyle>
            <Conteiner pad={20}>
                <AiTwotoneThunderbolt  size={54} color="#6554D1"/>
            </Conteiner>
            <Conteiner>
            <NavComponent>
                <a href={links.link1}>
                    <Link txt='sobre mim'/>
                </a>
                <a href={links.link2}>
                    <Link txt='projetos'/>
                </a>
                <a href={links.link3}>
                    <Link txt='contatos'/>
                </a>
            </NavComponent>
            </Conteiner>
        </HeaderStyle>
    )
}

export default Header;