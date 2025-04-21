import React, { Component } from "react";
import tower from './tower.jpg';

class Tower extends Component {
    render() {
        return (
            <div>
                <h2>N Seoul Tower</h2>

                <img src={tower} alt="N Seoul Tower" title="N Seoul Tower" width="167" height="250"></img>
                <p className="source">
                    Image by <a href="https://unsplash.com/@robsonhmorgan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Robson Hatsukami Morgan</a> from <a href="https://unsplash.com/">Unsplash</a>
                </p>

                <p>
                    Namsan Seoul Tower was the first multipurpose tower to be established in Korea, effectively incorporating a sightseeing observatory into a 
                    broadcasting tower. For the past 40 years, Namsan Seoul Tower has served as an iconic landmark of Korea and a representative tourist 
                    attraction. The tower's observatory offers an unobstructed view of the whole city, allowing it to become one of the all-time favorite 
                    attractions of Seoul citizens as well as domestic and international tourists. Featured in many dramas and reality shows, it is also becoming 
                    a fan-favorite destination. Another highlight of the tower is the Namsan Cable Car. The cable car began its operation in 1962, transferring 
                    passengers from the foot of the mountain to the base of the tower. Shuttle buses to the Namsan Cable Car from downtown Seoul are also 
                    available for visitors' convenience.
                </p>
                <p className="source">Source: <a href="https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=88026">Visit Korea</a></p>
            </div>
        );
    }
}

export default Tower;