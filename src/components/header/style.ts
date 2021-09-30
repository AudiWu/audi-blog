import styled from "styled-components";
import { Color } from "../../enums/color";
import { media } from "../../helpers/media";

const Navbar = styled.nav`
    width: 100%;
    height: 65px;
    position: fixed;
    line-height: 65px;
    text-align: center;
`;

const Logo = styled.div`
    width: 180px;
    height: 10px;
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
        list-style: none;

        li {
            width: 120px;
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