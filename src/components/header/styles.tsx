import styled from "styled-components";
import { Color } from "../../enums/color";
import { media } from "../../helpers/media";

const Navbar = styled.nav`
    width: 100%;
    height: 65px;
    padding: 0 6%;
    position: fixed;
    line-height: 65px;
    text-align: center;
`;

const Logo = styled.div`
    position: absolute;
    color: ${Color.WHITE};
`;

const Menu = styled.div`
    width: 600px;
    height: 65px;
    float: right;

    ul {
        width:100%;
        height: 65px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end; 
        list-style: none;

        li {
            width: 100px;
            height: 65px;

            a {
                text-decoration: none;
                color: ${Color.WHITE};
                line-height: 65px;
                text-transform: uppercase;
            }
        }
    }
`;

export {
    Navbar,
    Logo,
    Menu
}