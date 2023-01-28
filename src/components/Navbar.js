// import React, { useState } from 'react'
// import GithubIcon from './GithubIcon';
// import InstagramIcon from './InstagramIcon';

// function Navbar() {




//     return(
//         <div className='iconbardiv'>
//             <a href="https://www.instagram.com/lpm_visuals" target="_blank" className='instagramlink'>
//                 <InstagramIcon/>
//             </a>
//             <a href='https://www.github.com/slyguy5646' target="_blank" className='githublink'>
//                 <GithubIcon/>
//             </a>
//         </div>
//     );
// }

// export default Navbar

import { useEffect, useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantine/ds";
import logoWhite from './icons/logoWhite.svg';
const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    backgroundColor: 'black',

  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",
    backgroundColor: "black",
    color: "white",
    // width: "300px",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    backgroundColor: "black"
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "white",
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "light"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: "white",
      color: "black"
    },
  },
}));



export default function Navbar() {

  const links =  [
    // {
    //   "link": "/about",
    //   "label": "Features"
    // },
    // {
    //   "link": "/pricing",
    //   "label": "Pricing"
    // },
    {
      "link": "/",
      "label": ".home"
    },
    {
      "link": "/links",
      "label": ".links"
    },
    {
      "link": "/dev",
      "label": ".dev"
    },
    {
      "link": "/photos",
      "label": ".photos"
    },
  ]

  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  useEffect(() => {
    links.forEach(link => {
      if (link.link == window.location.pathname){
        setActive(link.link);
      }
    })
  }, []);


  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
        window.location.pathname = link.link
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} withBorder={false} mb={0} mt={0} className={classes.root}>
      <Container className={classes.header}>
        <img src={logoWhite} width={50} className="navLogo" onClick={function(){window.location.replace('/')}}></img>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          color="white"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}