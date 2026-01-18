import { createContext, type Dispatch, type SetStateAction } from "react";

type AppContext = {
  profileIndex: [0 | 1, Dispatch<SetStateAction<0 | 1>>];
};

export const AppContext = createContext<AppContext>({
  profileIndex: [0, () => {}],
});
