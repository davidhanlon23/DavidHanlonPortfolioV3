import React from 'react';
import { Field as FormikField, ErrorMessage as FormikError } from 'formik';

interface FormFieldProps {
  name: string;
  label: string;
  type: string;
}

const FormField: React.FC<FormFieldProps> = ({ name, label, type }) => {
  return (
    <div className="mb-6">
      <label 
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <FormikField
          id={name}
          name={name}
          type={type}
          className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent
                     transition-colors duration-200"
          placeholder="0"
        />
        <FormikError
          name={name}
          component="div"
          className="absolute -bottom-6 left-0 text-sm text-red-600 dark:text-red-400"
        />
      </div>
    </div>
  );
};

export default FormField;