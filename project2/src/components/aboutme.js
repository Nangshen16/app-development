import React from "react";
import zero from '../images/privacy.webp'

import one from '../images/wsj.jpeg'
import two from '../images/ok.webp'
import three from '../images/ok.webp'
import four from '../images/google.webp'
import five from '../images/anti.webp'
import User from '../comments'

const About = function(){
    return(
        <>
            <header className="header">
                <h1 className="headertitle">Technology News</h1>

            </header>
            <section className="cardcontainer">
                    <User image={zero} name="OpenAI comes for Google with SearchGPT
" comments="OpenAI is testing SearchGPT, a new AI search experience to compete directly with Google"/>

                    <User image={one} name="The $600 Billion Digital Ad Business Is Hanging on a Few Words From Google" comments="Google abandoned efforts to eliminate tracking cookies in its Chrome browser, but the snippets of code that have fueled the lucrative digital-advertising economy for decades might disappear anyway.

"/>
                    <User image={two} name="50 Coding Laws That Would Make You A Decent Programmer" comments="Comments have a way of being falsely true. They deviate the mind of the reader from what the code is actually doing to what someone else says it’s doing."/>
                    <User image={three} name="Why you should avoid use of one-time passwords sent by text" comments="OTPs are vulnerable to online scams
"/>
                    <User image={four} name="Google: Almost The Cheapest Magnificent 7 Stock, Double-Digit Growth Expectedgoogle" comments="GOOG is also nearing its projected $100B revenue run-rate from both YouTube Ads and Google Cloud by end 2024, as observed from the cumulative FQ2'24 revenue of $19B."/>
                    <User image={five} name="Websites accuse AI startup Anthropic of bypassing their anti-scraping rules and protocol" comments="The AI startup told The Information that it respects robots.txt and that its crawler respected that signal when iFixit implemented it"/>

            </section>
        </>
    )
}
export default About;