import React, { Component } from "react";
import village from './village.jpg';

class Village extends Component {
    render() {
        return (
            <div>
                <h2>Bukchon Hanok Village</h2>

                <img src={village} alt="Bukchon Hanok Village" title="Bukchon Hanok Village" width="250" height="167"></img>
                <p className="source">
                    Image by <a href="https://unsplash.com/@fedebisso?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Federica Bisso</a> from <a href="https://unsplash.com/">Unsplash</a>
                </p>

                <p>
                    Surrounded by Gyeongbokgung Palace, Changdeokgung Palace and Jongmyo Shrine, Bukchon Hanok Village is home to hundreds of traditional houses, 
                    called hanok, that date back to the Joseon dynasty. The name Bukchon, which literally translates to "northern village," came about as the 
                    neighborhood lies north of two significant Seoul landmarks, Cheonggyecheon Stream and Jongno. Today, many of these hanoks operate as cultural 
                    centers, guesthouses, restaurants and tea houses, providing visitors with an opportunity to experience, learn and immerse themselves in 
                    traditional Korean culture. As Bukchon Hanok Village is an actual neighborhood with people's homes, visitors are advised to be respectful at 
                    all times while looking around. 
                </p>
                <p className="source">Source: <a href="https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=97932">Visit Korea</a></p>
            </div>
        );
    }
}

export default Village;