import React from 'react'
import ArticleComponent from '../ArticleComponent'
import ParallaxComponent from '../ParallaxComponent'
import Process from '../Process'
import Services from '../Services'
export default function Home() {
    return (
        <>
            <ParallaxComponent></ParallaxComponent>
            <Services></Services>
            <ArticleComponent></ArticleComponent>
            <Process></Process>
        </>
    )
}