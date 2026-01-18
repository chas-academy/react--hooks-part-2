import { type Dispatch, type SetStateAction } from "react";

type AppContext = {
  profileIndex: [0 | 1, Dispatch<SetStateAction<0 | 1>>];
};
