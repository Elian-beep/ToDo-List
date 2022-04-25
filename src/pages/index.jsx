import NoLists from "../../components/NoLists/NoLists";
import { Container, Content } from "../../components/NoLists/styleNoLists";

let list = false;

export default function Home() {
  return (
    <>
      {list == false &&
        <NoLists />
      }
    </>
  )
}