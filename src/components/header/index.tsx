import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Navbar, Menu, ProjectMenu } from "./styles"
import { LinkItem } from "./link"
import { Icon } from "../icon"
import { Color } from "../../enums/color"

const datas = [
  {
    url: "#skill",
    title: "Skill",
  },
  {
    url: "#experience",
    title: "Experience",
  },
  {
    url: "#project",
    title: "Project",
  },
  {
    url: "#about",
    title: "About",
  },
]

type HeaderProps = {
  isProjectPage?: boolean;
  isMobile?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isProjectPage, isMobile }) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navbarHandler = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  const menuComponent = () => {
    if (isProjectPage) {
      return (
        <Link to="/">
          <ProjectMenu>
            <Icon name="caretLeft" color={Color.WHITE} size={40}/>
            <p>HOME</p>
          </ProjectMenu>
        </Link>
      );
    }

    return (
      <Menu>
        <ul>
          {datas.map((data, index) => (
            <LinkItem key={index} url={data.url} title={data.title} />
          ))}
        </ul>
      </Menu>
    );
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', navbarHandler);
      return () => {
        window.removeEventListener('scroll', navbarHandler);
      };
    }
  }, [lastScrollY])

  return (
    <Navbar show={show}>
      {menuComponent()}
      {/* <Menu>
        <ul>
          {datas.map((data, index) => (
            <LinkItem key={index} url={data.url} title={data.title} />
          ))}
        </ul>
      </Menu> */}
    </Navbar>
  )
}
