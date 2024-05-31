export interface InitialUserState {
  user: null | {
    userId: string;
    photo: string;
    email: string;
    displayName: string;
  };
}
