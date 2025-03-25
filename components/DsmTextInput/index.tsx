import { TextInput } from '@mantine/core';

import { DsmTextInputPropsType } from './types';

export const DsmTextInput = ({
  isDisabled,
  isRequired,
  ...inputProps
}: DsmTextInputPropsType) => (
  <TextInput
    disabled={isDisabled}
    withAsterisk={isRequired}
    inputWrapperOrder={['label', 'description', 'input', 'error']}
    required={false}
    {...inputProps}
  />
);
