import React from 'react';
import { Banner } from '../../components/Banner';
import { Features } from '../../components/Features';
import {Header} from "../../components/Header"
import { Precos } from '../../components/Preços';
import { Relatos } from '../../components/Relatos';
import {Footer} from "../../components/Footer"


export function Home() {
    return (
        <div>
         <Header/>
         <Banner/>
         <Features/>
         <Relatos/>
         <Precos/>
         <Footer/>
        </div>
    );
}