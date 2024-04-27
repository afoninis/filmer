import "./App.css";
import { useEffect, useState } from "react";

import ic_time from "./Assets/images/time.png";

const getYouTubeID = (url) => url.slice(32, 43);

function App() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [pagesArr, setPagesArr] = useState([]);
  const [maxFilmsItemsPerPage, setmaxFilmsItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [films, setFilms] = useState([
    {
      name: "RRR",
      year: 2022,
      genre: "Action/Thriller",
      duration: "3h 7m",
      youtubeID: getYouTubeID(
        "https://www.youtube.com/watch?v=NgBoMJy386M&ab_channel=DVVEntertainment"
      ),
    },
    {
      name: "Два нуля",
      year: 2004,
      genre: "Comedy/Action",
      duration: "1h 25m",
      youtubeID: getYouTubeID(
        "https://www.youtube.com/watch?v=EnvGzOc9Q90&ab_channel=%D0%A2%D0%B5%D0%BB%D0%B5%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F%D0%A1%D0%A2%D0%A0%D0%98%D0%9C"
      ),
    },
    {
      name: "По соображениям совести",
      year: 2016,
      genre: "War/Thriller",
      duration: "2h 19m",
      youtubeID: getYouTubeID("https://www.youtube.com/watch?v=oHzKDaoIORw"),
    },
    {
      name: "Лео",
      year: 2023,
      genre: "Family/Comedy",
      duration: "1h 42m",
      youtubeID: getYouTubeID(
        "https://www.youtube.com/watch?v=CTAtw3JE-8A&ab_channel=RedHeadSound%E2%80%94%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%B8%D0%9E%D0%B7%D0%B2%D1%83%D1%87%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"
      ),
    },
    {
      name: "Мой ужасный сосед",
      year: 2022,
      genre: "Comedy/Drama",
      duration: "2h 6m",
      youtubeID: getYouTubeID(
        "https://www.youtube.com/watch?v=-Q1M2pR90xI&ab_channel=%D1%87%D1%82%D0%BE%D0%B2%D0%BA%D0%B8%D0%BD%D0%BE"
      ),
    },
    {
      name: "Схватка с дьяволом",
      year: 2023,
      genre: "Thriller/Action",
      duration: "1h 31m",
      youtubeID: getYouTubeID("https://www.youtube.com/watch?v=8VluPyWvxeE"),
    },
    {
      name: "Плейбой под прикрытием",
      year: 2018,
      genre: "Comedy/Action",
      duration: "1h 31m",
      youtubeID: getYouTubeID(
        "https://www.youtube.com/watch?v=buizrU_LuRk&ab_channel=iVideos"
      ),
    },
    {
      name: "Счастливый случай",
      year: 1994,
      genre: "Romance/Comedy",
      duration: "1h 41m",
      youtubeID: getYouTubeID(
        "https://www.youtube.com/watch?v=3ev7QXefGXE&ab_channel=%D0%A7%D1%82%D0%BE%D0%BF%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%3F"
      ),
    },

    {
      name: "Резервная копия",
      year: 2023,
      genre: "Thriller/Sci-fi",
      duration: "1h 51m",
      youtubeID: getYouTubeID(
        "https://www.youtube.com/watch?v=HM0vYPK_--c&ab_channel=%D0%9A%D0%B8%D0%BD%D0%BE%D0%92%D0%B8%D1%85%D1%80%D1%8C"
      ),
    },
    {
      name: "Круче некуда",
      year: 2023,
      genre: "Action/Adventure",
      duration: "1h 42m",
      youtubeID: getYouTubeID(
        "https://www.youtube.com/watch?v=2na1B7xaa2g&t=39s&pp=ygUr0JrRgNGD0YfQtSDQvdC1INCx0YvQstCw0LXRgiDRgtGA0LXQudC70LXRgA%3D%3D"
      ),
    },
    {
      name: "Особое мнение",
      year: 2002,
      genre: "Action/Sci-fi",
      duration: "2h 25m",
      youtubeID: getYouTubeID(
        "https://www.youtube.com/watch?v=MsetiYR73pY&pp=ygUo0L7RgdC-0LHQvtC1INC80L3QtdC90LjQtSDRgtGA0LXQudC70LXRgA%3D%3D"
      ),
    },
    {
      name: "Облачный атлас",
      year: 2012,
      genre: "Sci-fi/Mystery",
      duration: "2h 52m",
      youtubeID: getYouTubeID(
        "https://www.youtube.com/watch?v=K2VtiZSvwuo&pp=ygUq0J7QsdC70LDRh9C90YvQuSDQsNGC0LvQsNGBINGC0YDQtdC50LvQtdGA"
      ),
    },
    {
      name: "Отель «Гранд Будапешт»",
      year: 2014,
      genre: "Crime/Comedy",
      duration: "1h 39m",
      youtubeID: getYouTubeID(
        "https://www.youtube.com/watch?v=MN7xR6OxMzA&pp=ygU50J7RgtC10LvRjCDCq9CT0YDQsNC90LQg0JHRg9C00LDQv9C10YjRgsK7INGC0YDQtdC50LvQtdGA"
      ),
    },
    {
      name: "Бивень",
      year: 2014,
      genre: "Horror/Comedy",
      duration: "1h 42m",
      youtubeID: getYouTubeID(
        "https://www.youtube.com/watch?v=2n2kUiIXCVM&pp=ygUb0LHQuNCy0LXQvdGMINGC0YDQtdC50LvQtdGA"
      ),
    },

    {
      name: "Бессмертные",
      year: 2021,
      genre: "Drama",
      duration: "1h 44m",
      youtubeID: getYouTubeID(
        "https://www.youtube.com/watch?v=xJqkpVs7FQQ&pp=ygUm0JHQtdGB0YHQvNC10YDRgtC90YvQtSAg0YLRgNC10LnQu9C10YA%3D"
      ),
    },
    {
      name: "Хранители",
      year: 2009,
      genre: "Action/Sci-fi",
      duration: "2h 35m",
      youtubeID: getYouTubeID(
        "https://www.youtube.com/watch?v=12q2pDWPuyI&pp=ygUh0YXRgNCw0L3QuNGC0LXQu9C4INGC0YDQtdC50LvQtdGA"
      ),
    },
    {
      name: "Большая игра",
      year: 2017,
      genre: "Crime/Thriller",
      duration: "2h 20m",
      youtubeID: getYouTubeID(
        "https://www.youtube.com/watch?v=maevdgQvcug&pp=ygUm0JHQvtC70YzRiNCw0Y8g0LjQs9GA0LAg0YLRgNC10LnQu9C10YA%3D"
      ),
    },
    {
      name: "Искусство самообороны",
      year: 2019,
      genre: "Comedy/Thriller",
      duration: "1h 44m",
      youtubeID: getYouTubeID(
        "https://www.youtube.com/watch?v=ph-fbywCBqU&pp=ygU40JjRgdC60YPRgdGB0YLQstC-INGB0LDQvNC-0L7QsdC-0YDQvtC90Ysg0YLRgNC10LnQu9C10YA%3D"
      ),
    },
  ]);

  const getFilmsList = () => {
    return films
      .slice(
        currentPage * maxFilmsItemsPerPage,
        currentPage * maxFilmsItemsPerPage + maxFilmsItemsPerPage
      )
      .map((el, index) => {
        const indexFromFilms = films.findIndex((item) => item.name === el.name);
        return (
          <li
            key={index}
            data-id={indexFromFilms}
            onClick={(e) =>
              setCurrentVideo(
                parseInt(e.target.closest("li.films-item").dataset.id)
              )
            }
            className={`films-item ${
              currentVideo === indexFromFilms && "active"
            }`}
          >
            <h3 className="films-name">{el.name}</h3>
            <div className="films-row">
              <span className="films-genre">{el.genre}</span>-
              <div className="films-icon-container">
                <img className="films-icon" src={ic_time} alt="Time icon" />
              </div>
              <span className="films-duration">
                <img src="" alt="" /> {el.duration}
              </span>
            </div>
            <p className="films-year">{el.year}</p>
          </li>
        );
      });
  };
  const getPagesArr = () => {
    const tempMaxPages = films.length / maxFilmsItemsPerPage;
    let tempArrPages = [];
    for (let i = 0; i < tempMaxPages; i++) {
      tempArrPages.push(i + 1);
    }
    setPagesArr(tempArrPages);
    return;
  };
  useEffect(() => {
    getPagesArr();
  }, []);

  return (
    <div className="App">
      <main className="main">
        <iframe
          src={`https://youtube.com/embed/${films[currentVideo].youtubeID}?autoplay=0`}
          title="Video Player"
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          frameborder="0"
          allowFullScreen
          className="video"
        ></iframe>
        <h2 className="main-title">
          {films[currentVideo].name} ({films[currentVideo].year})
        </h2>
      </main>
      <aside className="films">
        <ul className="films-list">{getFilmsList()}</ul>
        <ul className="films-controls">
          <li
            className="films-arrow"
            onClick={() =>
              setCurrentPage(
                (currentPage) => currentPage >= 1 && currentPage - 1
              )
            }
          >
            ⮜
          </li>
          <li className="films-control">
            {currentPage + 1}/{pagesArr.length}
          </li>
          <li
            className="films-arrow"
            onClick={() =>
              setCurrentPage((currentPage) => {
                if ((currentPage + 1) * maxFilmsItemsPerPage < films.length)
                  return currentPage + 1;
                return currentPage;
              })
            }
          >
            ⮞
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default App;
