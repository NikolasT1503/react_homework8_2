import React from "react";
import { Programmer, Frontend, Backend, Fullstack } from './ProgrammerInherited';
import {createProgrammer, createFrontend, createBackend, createFullstack } from './ProgrammerComposition';

export class Main extends React.Component{
    render() {
        const programmerComp = createProgrammer("Comp1") 
        const frontendComp = createFrontend("Comp2") 
        const backendComp = createBackend("Comp3") 
        const fullstackComp = createFullstack("Comp4") 
        return(
            <div>
                <Programmer name={"Петр"} />
                <Frontend name={"Макс"} />
                <Backend name={"Дима"} />
                <Fullstack name={"Николай"} />
                <p>*******Composition********</p>
                {programmerComp.render()}
                {programmerComp.code()}
                {frontendComp.render()}
                {frontendComp.code()}
                {frontendComp.angular()}
                {backendComp.render()}
                {backendComp.code()}
                {backendComp.nodejs()}
                {fullstackComp.render()}
                {fullstackComp.code()}
                {fullstackComp.angular()}
                {fullstackComp.nodejs()}
            </div>
        )
    }
}