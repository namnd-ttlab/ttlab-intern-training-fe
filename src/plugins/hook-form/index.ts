import {
  useForm as hookUseForm,
  UseFormProps,
  FieldValues,
  Controller as HookController,
} from 'react-hook-form';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useForm = <TFieldValues extends FieldValues = FieldValues, TContext = any>(
  props?: UseFormProps<TFieldValues, TContext>,
) => {
  return hookUseForm<TFieldValues, TContext>({
    ...props,
    resolver: props?.resolver,
    defaultValues: props?.defaultValues,
    mode: props?.mode || 'onBlur',
    reValidateMode: props?.reValidateMode || 'onBlur',
  });
};

export const Controller = HookController;
