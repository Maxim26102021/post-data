interface City {
  id: number;
  name: string;
}

export interface State {
  selectedCity: string;
  btnSities: {
    [key: string]: string;
  };
  cities: City[];
  htmlBlock: null | HTMLElement;
}

type CommitPayload = {
  key: string;
  value: any;
};

export type StateGetter = (state: State) => any;

export type Store<State> = {
  state: State;
  commit: (mutation: string, payload: CommitPayload) => void;
};
