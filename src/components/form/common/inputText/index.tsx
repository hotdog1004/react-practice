import React from 'react';
import { TextFieldProps } from '@mui/material';
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
  useController,
} from 'react-hook-form';
import { CustomTextField } from './styled';

type TControl<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: Omit<
    RegisterOptions<T>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
};

type TProps<T extends FieldValues> = TextFieldProps & TControl<T>;

const InputText = <T extends FieldValues>({
  name,
  rules,
  control,
  ...props
}: TProps<T>) => {
  const {
    field: { value, onChange },
    fieldState: { isDirty, isTouched, error },
  } = useController({
    name,
    rules,
    control,
  });

  return (
    <CustomTextField
      variant="outlined"
      fullWidth
      name={name}
      value={value}
      onChange={onChange}
      error={Boolean(error)}
      helperText={error?.message}
      {...props}
    />
  );
};

export default InputText;
