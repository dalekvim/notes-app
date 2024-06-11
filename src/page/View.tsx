import { Page } from "../App";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}

export const View: React.FC<Props> = () => <h1>View</h1>;
