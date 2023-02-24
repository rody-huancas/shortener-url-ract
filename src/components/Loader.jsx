export default function Loader({ item, id }) {
  if (item === null) {
    return <div>Loading...</div>;
  }

  if (item === undefined) {
    return <div>No url found {id}</div>;
  }

  return item ? <div>Redirect {item.url}</div> : "";
}
