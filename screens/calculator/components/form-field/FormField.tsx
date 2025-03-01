import { FC } from 'react';
import { Field as FormikField, ErrorMessage as FormikError } from 'formik';

interface FormFieldProps {
  name: string;
  label: string;
  type: string;
}

const FormField: FC<FormFieldProps> = ({ name, label, type }) => {
  const sectionGroupClasses = 'grid grid-col-2 mb-4';
  const labelClasses = 'text-2xl text-semibold text-black dark:text-white mr-4 mb-4';
  const fieldClasses = 'rounded-lg p-2';
  const errorMsgClasses = 'text-red-700 dark:text-red-500';

  return (
    <div id={`${name}-group`} className={sectionGroupClasses}>
      <label className={labelClasses} htmlFor={name}>
        {label}
      </label>
      <FormikField className={fieldClasses} id={name} name={name} type={type} />
      <FormikError
        component="a"
        className={errorMsgClasses}
        name={name}
      />
    </div>
  );
}; 
export default FormField;
