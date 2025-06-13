import { Text } from "@mantine/core";

import classes from "./index.module.css";
import { DsmTitleTextPropsType } from "./types";

/** this component is used to parse the string into array of object
 * ie. text to title and the text inside curly braces to highlight*/
function parseCustomTitle(input: string) {
  const regex = /{(.*?)}/g;
  let result = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(input)) !== null) {
    const subtitleStart = match.index;

    if (subtitleStart > lastIndex) {
      const titleText = input.slice(lastIndex, subtitleStart).trim();
      if (titleText) {
        result.push({ type: "title", description: titleText });
      }
    }

    result.push({ type: "highlight", description: match[1].trim() });

    lastIndex = regex.lastIndex;
  }

  // handle remaining title after last subtitle
  if (lastIndex < input.length) {
    const remainingTitle = input.slice(lastIndex).trim();
    if (remainingTitle) {
      result.push({ type: "title", description: remainingTitle });
    }
  }

  return result;
}

export const DsmTitleText = (props: DsmTitleTextPropsType) => {
  const { text, wrapperStyleProps, ...restProps } = props;

  const customTextArr = parseCustomTitle(text) as [
    { type: "title" | "highlight"; description: string }
  ];

  return (
    <div className="flex  gap-2 flex-wrap w-full" {...wrapperStyleProps}>
      {customTextArr.map((indvText) => (
        <Text
          className={classes.secTitle}
          key={indvText.description}
          {...restProps}
        >
          {indvText.type === "title" ? (
            indvText.description
          ) : (
            <Text span className={classes.highlight} inherit>
              {indvText.description}
            </Text>
          )}
        </Text>
      ))}
    </div>
  );
};
