import React, { useState, useEffect } from "react";
import { Card, Text, Container, Link, Grid } from "@nextui-org/react";
import Github from '../icons/github.svg';
import Instagram from "../icons/instagram.svg";
import BuyMeACoffee from "../icons/mug.svg";
function LinkCard(props) {
    return (
        <div className="linkCard">
        <Card
            isHoverable
            variant="bordered"
     
>
            <div style={{'display': 'flex', "paddingLeft": '15px'}}>
            <Card.Image src={props.icon} width={50}/>
            <Card.Body>

                <div>{props.title}</div>
            </Card.Body>

            </div>
         

            
        </Card>

        </div>
        
    );
}

function Links() {
    return (
        <div className="links">
            <h1>Links</h1>
            <div className="linkCardsParent">
                <LinkCard
                    icon={Github}
                    title={"Github"}
                />
                <LinkCard
                    icon={Instagram}
                    title={"Instagram"}
                />
                <LinkCard
                    icon={BuyMeACoffee}
                    title={"Buy Me a Coffee"}
                />
            </div>
        </div>
    );
}

export default Links;
