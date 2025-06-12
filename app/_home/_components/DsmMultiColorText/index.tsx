import { Text } from "@mantine/core";

export interface DsmMultiColorTextPropsType {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  color1?: string;
  color2?: string;
}

export const DsmMultiColorText = ({
  text1,
  text2,
  text3,
  text4,
  color1 = "white",
  color2 = "#F28315",
}: DsmMultiColorTextPropsType) => (
  <Text ta={"center"} c={color1} fw={"bold"} lh={1.3} size="36px">
    {text1}{" "}
    <Text span c={color2} inherit>
      {text2}
    </Text>
    {text3}{" "}
    <Text span c={color2} inherit>
      {text4}
    </Text>
  </Text>
);
