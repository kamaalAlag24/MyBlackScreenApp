export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar?: string;
};
export type RootStackParamList = {
  SignIn: undefined;
  HomeTabs: undefined;
  Home: undefined;
  Settings: undefined 
  RegisterStack: undefined;
  Register: undefined;
  UserProfile: { user: User } | undefined;
};

