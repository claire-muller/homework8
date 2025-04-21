import React, { Component } from "react";
import palace from './palace.jpg';

class Palace extends Component {
    render() {
        return (
            <div>
                <h2>Gyeongbokgung Palace</h2>

                <img src={palace} alt="Gyeongbokgung Palace" title="Gyeongbokgung Palace" width="250" height="167"></img>
                <p className="source">
                    Image by <a href="https://unsplash.com/@sam_truong?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sam Dan Truong</a> from <a href="https://unsplash.com/">Unsplash</a>
                </p>

                <p>
                    Gyeongbokgung Palace was built in 1395 as the official palace of the Joseon dynasty by Yi Seong-gye, 
                    the future King Taejo and founder of the new regime. Gyeongbokgung Palace is commonly referred to as 
                    the Northern Palace because of its location to the north, comparied to Changdeokgung Palace in the 
                    east and Gyeonghuigung Palace in the west. Gyeongbokgung Palace is arguably the most beautiful and is 
                    the largest of all five palaces. 
                </p>
                <p>
                    Many Joseon kings were crowned here. The premises were once destroyed 
                    by fire during the Imjin War (1592-1598). However, all of the palace buildings were later restored under 
                    the leadership of Heungseondaewongun during the reign of King Gojong. The assassination of Empress 
                    Myeongseong, however, resulted in Gyeongbokgung Palace losing its function as a royal palace, eventually 
                    witnessing the downfall of the Joseon dynasty. Gyeongbokgung Palace retains the original Gyeonghoeru 
                    Pavilion, a prime example of Joseon architecture, and the Hyangwonjeong Pavilion and pond. The sculptures 
                    in the Geunjeongjeon Hall exemplify Joseon-era sculpture techniques. The west side of the area outside 
                    Heungnyemun Gate is occupied by the National Palace Museum of Korea, while the eastern side of 
                    Hyangwonjeong Pavilion within the Gyeongbokgung Palace is occupied by the National Folk Museum of Korea.
                </p>
                <p className="source">Source: <a href="https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=87740">Visit Korea</a></p>
            </div>
        );
    }
}

export default Palace;