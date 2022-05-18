import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
  };
export type Props<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen, 'ONIPanel'>;