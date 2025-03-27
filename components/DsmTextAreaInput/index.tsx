import { Textarea } from '@mantine/core';

import { DsmTextAreaInputPropsType } from './types';

export const DsmTextAreaInput: React.FC<DsmTextAreaInputPropsType> = ({
  disabled,
  required,
  ...restTextAreaInputProps
}) => (
  <Textarea
    autosize
    minRows={3}
    required={false}
    disabled={disabled}
    withAsterisk={required}
    inputWrapperOrder={['label', 'description', 'input', 'error']}
    {...restTextAreaInputProps}
  />
);
