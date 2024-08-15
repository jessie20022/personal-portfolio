import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LinkPreview from './LinkPreview';
import BoxBackground from '../img/box-background.png';
import { Dot } from "react-bootstrap-icons";



export const Avocations = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const boxStyle = {
    background: `url(${BoxBackground}) no-repeat center center`,
    backgroundSize: 'cover',
    borderRadius: '64px',
    textAlign: 'center',
    padding: '60px 50px',
    marginTop: '-60px'
  };

  return (
    <section className="avocations" id="avocations">
        <p></p><br></br><br></br><br></br>
      <Container>
        <Row>
          <Col>
            <div className="avocations-box" style={boxStyle}>
              <h2>avocations</h2>
              <p style={{ fontSize: '21px' }}>thank you mom and dad for never letting me give up; for pushing me to be better. <br />i wouldn't be who i am today without both of you.</p>
              <h3>music</h3>
              <p> i love music! i began classical training for <b>piano</b> when i was a bit over 3 years old, until the end of high school. 
                during this time, i competed in and won many local, state, and international level competitions as well as performed recitals. 
                i'm forever thankful for my parents and teachers, 
                <a href="https://www.legacy.com/us/obituaries/fredericknewspost/name/carole-kriewaldt-obituary?id=32787218" target="_blank" rel="noopener noreferrer"> carole kriewaldt</a> and 
                <a href="https://shepherduniversityfoundation.org/scholarship-created-in-memory-of-shepherd-university-provost-scott-beard/" target="_blank" rel="noopener noreferrer"> dr. scott beard</a>, for supporting me through my journey. 
                <br></br>
                thank you carole, for watching me grow up; for introducing me to a beautiful, musical world; for making piano fun for me. 
                <br></br>
                thank you dr. beard, for showing me how to express my emotions in classical music; for opening my eyes to the story pieces tell.
                <br></br>
                rest in pease, both of you.
                <br></br><br></br>
                i also played the <b>violin</b> from age 7 to 16, where i was a part of the regional youth orchestra and 
                <a href="https://mcyo.org/" target="_blank" rel="noopener noreferrer"> maryland classical youth orchestra</a>.
                <br></br> <br></br>
                outside of classical music, i love listening to almost <b>all genres of music</b>. below, you'll find my playlists for some of my favorite genres:
                <br></br><br></br>
                <Carousel responsive={responsive} infinite={true} className="avocations-slider">
                    <div className="box-item">
                    <LinkPreview url="https://open.spotify.com/playlist/3ti9K2rTghwe9VrZP6eTbt?si=b0b50af59d9448f2" />
                    <h5><a href="https://open.spotify.com/playlist/3ti9K2rTghwe9VrZP6eTbt?si=b0b50af59d9448f2" target="_blank">for the boys</a> </h5>
                    </div>
                    <div className="box-item">
                    <LinkPreview url="https://open.spotify.com/playlist/3v1vQutEjhlyrOBXB5XABb?si=fc2c7f73466b45b9" />
                    <h5><a href="https://open.spotify.com/playlist/3v1vQutEjhlyrOBXB5XABb?si=fc2c7f73466b45b9" target="_blank">bass heavy</a> </h5>
                    </div>
                    <div className="box-item">
                    <LinkPreview url="https://open.spotify.com/playlist/7sTXUjdbJO3TLIBIuuMDee?si=051d913ebc864991" />
                    <h5><a href="https://open.spotify.com/playlist/7sTXUjdbJO3TLIBIuuMDee?si=051d913ebc864991" target="_blank">alternative/indie</a> </h5>
                    </div>
                    <div className="box-item">
                    <LinkPreview url="https://open.spotify.com/playlist/1zZLXfNOzj2JgkuDMMeU4q?si=015e969151a94b1f" />
                    <h5><a href="https://open.spotify.com/playlist/1zZLXfNOzj2JgkuDMMeU4q?si=015e969151a94b1f" target="_blank">the weeknd: personal favorites</a> </h5>
                    </div>
                    <div className="box-item">
                    <LinkPreview url="https://open.spotify.com/playlist/02EgYNM5jglufmjEmUsAyF?si=44205ab0065b4cdf" />
                    <h5><a href="https://open.spotify.com/playlist/02EgYNM5jglufmjEmUsAyF?si=44205ab0065b4cdf" target="_blank">country</a> </h5>
                    </div>
                    <div className="box-item">
                    <LinkPreview url="https://open.spotify.com/playlist/5lt6yMT2A1mEfvOCeoRQCw?si=3e3ffc8166df4e41" />
                    <h5><a href="https://open.spotify.com/playlist/5lt6yMT2A1mEfvOCeoRQCw?si=3e3ffc8166df4e41" target="_blank">edm</a> </h5>
                    </div>
                    <div className="box-item">
                    <LinkPreview url="https://open.spotify.com/playlist/1xbQujt4ONUhaBZLHH2TNg?si=a756c8cbb1904516" />
                    <h5><a href="https://open.spotify.com/playlist/1xbQujt4ONUhaBZLHH2TNg?si=a756c8cbb1904516" target="_blank">throwbacks 2010s</a> </h5>
                    </div>
                    <div className="box-item">
                    <LinkPreview url="https://open.spotify.com/playlist/1NdYW902ugwuqWBcCwbxoc?si=0280290e782c4ead" />
                    <h5><a href="https://open.spotify.com/playlist/1NdYW902ugwuqWBcCwbxoc?si=0280290e782c4ead" target="_blank">sad/calm</a> </h5>
                    </div>
                    <div className="box-item">
                    <LinkPreview url="https://open.spotify.com/playlist/1cc0W67000S54if13iAiIE?si=a9b439360c4a4238" />
                    <h5><a href="https://open.spotify.com/playlist/1cc0W67000S54if13iAiIE?si=a9b439360c4a4238" target="_blank">classical</a> </h5>
                    </div>
                    <div className="box-item">
                    <LinkPreview url="https://open.spotify.com/playlist/6islyJ6USBe9sXrRDPwbhy?si=4ca2f5ae61d84e8e" />
                    <h5><a href="https://open.spotify.com/playlist/6islyJ6USBe9sXrRDPwbhy?si=4ca2f5ae61d84e8e" target="_blank">latin</a> </h5>
                    </div>
                    <div className="box-item">
                    <LinkPreview url="https://open.spotify.com/playlist/5RATcyr08kEZMsDx8qblZG?si=6d0b349ee269436d" />
                    <h5><a href="https://open.spotify.com/playlist/5RATcyr08kEZMsDx8qblZG?si=6d0b349ee269436d/" target="_blank">mando-pop</a> </h5>
                    </div>
                </Carousel>
              </p>
              <p></p>
              <h3>sports</h3>
              <p>i started playing <b>tennis</b> when i was in middle school. 
                in high school, i played for the girl's varsity tennis team for 4 years, and was captain for a 4a school my senior year. 
                unfortunately, my senior year was cut short due to the pandemic.
                i played girls doubles during the regular season and mixed doubles for tournaments except my junior year when i played girls doubles. 
                i also played in the county tournament 3 times, regional tournament 2 times, and state tournament 2 times. 
                since entering college, my tennis friends went to different schools, leading me to play less frequently.
                <br></br><br></br>
                in <a href="https://umd.edu/" target="_blank" rel="noopener noreferrer"> college</a>
                , i played intramurel <b>pickleball, ping pong, and volleyball</b>. 
                i won intramurel pickleball twice and was runner up for intramurel ping pong with my mixed doubles partner.
                <br></br><br></br>
                i've also started <b>snowbaording</b>. previously, i'd skiied a few times in middle school, but i haven't been to a ski resort since then. 
                luckily, <a href="https://www.libertymountainresort.com/" target="_blank" rel="noopener noreferrer"> liberty </a>
                 and <a href="https://www.skiwhitetail.com/" target="_blank" rel="noopener noreferrer"> whitetail</a> resorts offer 
                 <a href="https://www.libertymountainresort.com/explore-the-resort/activities-and-events/event-detail.aspx?id=%7B0b1f7cf0-5845-4c73-9c4a-e4bbd7da2d91%7D" target="_blank" rel="noopener noreferrer"> college ski nights</a>. 
                after one season, i was able to board down blues. hopefully blues and blacks will be the norm in the future.
                </p>

              <p></p>
              <h3>gaming</h3>
              <p>during quarantine for covid, i was introduced to valorant. since then, i've grown a liking for various games: <br></br>
                valorant, fortnite, csgo, overcooked, stardew valley, minecraft, it takes two, pico park, dead by daylight
                <br></br><br></br>
                pc specs/accessories: 
              </p>
              <h3>socials</h3>
              <p style={{marginBottom: '10px'}}>
                <a href="https://www.linkedin.com/in/jessica-wu3/" target="_blank" rel="noopener noreferrer">
                    linkedin
                </a>
                <Dot size={20} />
                <a href="https://open.spotify.com/user/jessie_20022?si=d4158f89d1814753" target="_blank" rel="noopener noreferrer">
                    spotify
                </a>
                <Dot size={20} />
                <a href="https://beliapp.co/app/geesica" target="_blank" rel="noopener noreferrer">
                    beli
                </a>
                <Dot size={20} />
                <a href="https://vsco.co/jessicaywu/gallery" target="_blank" rel="noopener noreferrer">
                    vsco
                </a>
                <Dot size={20} />
                <a href="www.youtube.com/@jessicawu9689" target="_blank" rel="noopener noreferrer">
                    youtube
                </a>
                <Dot size={20} />
                {/* <a href="https://www.instagram.com/jessica.wu/" target="_blank" rel="noopener noreferrer">
                    instagram
                </a>
                <Dot size={20} />
                <a href="https://www.tiktok.com/@jessw888?_t=8mzFdeuECJK&_r=1" target="_blank" rel="noopener noreferrer">
                    tiktok
                </a>
                <Dot size={20} /> */}
                <a href="https://www.twitch.tv/geesica" target="_blank" rel="noopener noreferrer">
                    twitch
                </a>
              </p> 
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
