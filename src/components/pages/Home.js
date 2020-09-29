import React from 'react'
import QuotesComponent from '../QuotesComponent'
import ParallaxComponent from '../ParallaxComponent'
import Process from '../Process'
import Services from '../Services'
import ArticleComponent from '../ArticleComponent'
import FooterComponent from '../FooterComponent'
export default function Home() {
    return (
        <>
            <ParallaxComponent></ParallaxComponent>
            <Services></Services>
            <QuotesComponent></QuotesComponent>
            <Process></Process>
            <ArticleComponent></ArticleComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}