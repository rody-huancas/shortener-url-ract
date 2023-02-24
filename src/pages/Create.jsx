import { useEffect } from "react";
import CreateForm from "../components/CreateForm";
import MainContainer from "../components/MainContainer";
import useReducerApp from "../store/Store";

const Create = () => {
  const [state, dispatch] = useReducerApp();

  useEffect(() => {
    dispatch({ type: "LOAD" });
  }, []);

  return (
    <>
      <MainContainer>
        <div className="main">
          <h1 className="main__title">
            Shortener - <span>Acortador de URL</span>
          </h1>
          <CreateForm dispatch={dispatch} />

          <div>
            {state.items.length > 0 ? (
              state.items.map((item) => (
                <div className="main__card" key={item.shortUrl}>
                  <div className="main__card-container">
                    <p className="main__item">
                      Url:
                      <a href={`/u/${item.shortUrl}`} target="_blank">
                        {item.shortUrl}
                      </a>
                    </p>
                    <p className="main__item">
                      Original:
                      <span>{item.url}</span>
                    </p>
                    <p className="main__item">
                      Visitas:
                      <span>{item.views}</span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="main__item-empty">
                No hay items en la lista, <br />
                <span>agrega y se mostrarán aquí.</span>
              </p>
            )}
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Create;
