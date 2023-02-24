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
        <CreateForm dispatch={dispatch} />

        <div>
          {state.items.map((item) => (
            <div key={item.shortUrl}>
              <div>{item.shortUrl}</div>
              <div>{item.url}</div>
              <div>{item.views}</div>
            </div>
          ))}
        </div>
      </MainContainer>
    </>
  );
};

export default Create;
