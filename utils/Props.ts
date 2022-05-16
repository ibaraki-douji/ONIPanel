import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Login: undefined;
  };
export type Props<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen, 'ONIPanel'>;