export default function Loader({ item, id }) {
  if (item === null) {
    return <div className="loader">Cargando</div>;
  }

  if (item === undefined) {
    return <div className="loader__found">URL no encontrada: {id}</div>;
  }

  return item ? (
    <div className="loader__redirect">
      Redireccionado a: <span>{item.url}</span>
    </div>
  ) : (
    ""
  );
}
