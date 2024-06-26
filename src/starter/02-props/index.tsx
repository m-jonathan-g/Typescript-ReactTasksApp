import { PropsWithChildren } from "react";

type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
}>

function Component({name, id} : ComponentProps) {
  return (
    <div>
      <h2>ID: {id}</h2>
      <h2>Name: {name}</h2>
    </div>
  );
}
export default Component;
