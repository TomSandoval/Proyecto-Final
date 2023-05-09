import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getClothing } from "../../redux/actions";

export default function Prueba() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClothing());
  }, []);

  return (
    <div>
      <h1>Prueba </h1>
    </div>
  );
}
