import { useHello } from "../services/hello.service";

export function Hello() {
  const { data, loading, error } = useHello();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return <h1>{data?.hello}</h1>;
}
