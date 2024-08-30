import React, { ReactElement } from "react";
import {
  Input,
  DateInput,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
  TimeInput,
  DateRangePicker,
} from "@nextui-org/react";
import { CalendarDate, parseDate } from "@internationalized/date";
import { IconCalendar } from "@tabler/icons-react";

type FormProps = {
  title: string;
  fields: TFormField[];
  children: ReactElement;
};

export const TextField = () => (
  <div className="relative z-0 w-full mb-5">
    <Input
      type="text"
      name="name"
      placeholder="your name"
      required
      className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
    />
    <label
      htmlFor="name"
      className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
    >
      Enter name
    </label>
    <span className="text-sm text-red-600 hidden" id="error">
      Name is required
    </span>
  </div>
);

export const EmailField = () => (
  <div className="relative z-0 w-full mb-5">
    <Input
      type="email"
      name="email"
      placeholder="your email"
      className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
    />
    <label
      htmlFor="email"
      className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
    >
      Enter email address
    </label>
    <span className="text-sm text-red-600 hidden" id="error">
      Email address is required
    </span>
  </div>
);

export const PasswordField = () => (
  <div className="relative z-0 w-full mb-5">
    <Input
      type="password"
      name="password"
      placeholder=" "
      className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
    />
    <label
      htmlFor="password"
      className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
    >
      Enter password
    </label>
    <span className="text-sm text-red-600 hidden" id="error">
      Password is required
    </span>
  </div>
);

// see https://react-spectrum.adobe.com/react-stately/collections.html#unique-keys
export const RadioGroupField = () => (
  <fieldset className="relative z-0 w-full p-px mb-5">
    <RadioGroup label="Select your favorite city">
      <Radio value="buenos-aires">Buenos Aires</Radio>
      <Radio value="sydney">Sydney</Radio>
      <Radio value="san-francisco">San Francisco</Radio>
      <Radio value="london">London</Radio>
      <Radio value="tokyo">Tokyo</Radio>
    </RadioGroup>
    <span className="text-sm text-red-600 hidden" id="error">
      Option has to be selected
    </span>
  </fieldset>
);

// see https://react-spectrum.adobe.com/react-stately/collections.html#unique-keys
export const SelectField = () => (
  <div className="relative z-0 w-full mb-5">
    <Select
      items={animals}
      label="Favorite Animal"
      placeholder="Select an animal"
      className="max-w-xs"
    >
      {(animal) => <SelectItem key={animal.value}>{animal.label}</SelectItem>}
    </Select>
  </div>
);

export const TimeInputField = () => (
  <div className="relative z-0 w-full">
    <TimeInput isRequired label="Event Time" />
    <label
      htmlFor="time"
      className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
    >
      Time
    </label>
    <span className="text-sm text-red-600 hidden" id="error">
      Time is required
    </span>
  </div>
);

export const DateInputField = () => (
  <div className="relative z-0 w-full mb-5">
    <DateInput
      label="Date Input"
      defaultValue={parseDate("2024-04-04")}
      placeholderValue={new CalendarDate(1995, 11, 6)}
      labelPlacement="outside"
      startContent={
        <IconCalendar className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
    />
    <label
      htmlFor="date"
      className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
    >
      Date
    </label>
    <span className="text-sm text-red-600 hidden" id="error">
      Date is required
    </span>
  </div>
);

export const NumberInputField = () => (
  <div className="relative z-0 w-full mb-5">
    <Input
      type="number"
      name="money"
      placeholder="amount"
      label="Money"
      isRequired
      className="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
    />
  </div>
);

export const DurationField = () => (
  <div className="relative z-0 w-full mb-5">
    <DateRangePicker
      label="Stay duration"
      isRequired
      defaultValue={{
        start: parseDate("2024-04-01"),
        end: parseDate("2024-04-08"),
      }}
      className="max-w-xs"
    />
  </div>
);

// See https://react-spectrum.adobe.com/react-stately/collections.html#unique-keys
const animals = [
  { value: 1, label: "Aardvark" },
  { value: 2, label: "Kangaroo" },
  { value: 3, label: "Snake" },
];

const colors = [
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "red", label: "SnakeRed" },
];

const cities = [
  { value: "sanfran", label: "San Francisco" },
  { value: "ny", label: "New York" },
];

const today = new Date();

export type TTextField = {
  type: "text";
  label: string;
  placeholder: string;
};

export type TEmailField = {
  type: "email";
  label: string;
  placeholder: string;
};

export type TPasswordField = {
  type: "password";
  label: string;
  placeholder: string;
};

export type TNumberField = {
  type: "number";
  label: string;
  placeholder: string;
};

export type FieldOption = {
  value: string;
  label: string;
};

export type TRadioGroupField = {
  type: "radiogroup";
  label: string;
  options: FieldOption[];
};

export type TSelectField = {
  type: "select";
  label: string;
  options: FieldOption[];
};

export type TDateInputField = {
  type: "date";
  label: string;
  placeholder: string;
  minDate?: Date;
  maxDate?: Date;
};

export type TTimeInputField = {
  type: "time";
  label: string;
  placeholder: string;
};

export type TFormField =
  | TTextField
  | TEmailField
  | TPasswordField
  | TNumberField
  | TDateInputField
  | TTimeInputField
  | TSelectField
  | TRadioGroupField;

const fields: TFormField[] = [
  {
    type: "text",
    label: "Name",
    placeholder: "your name",
  },
  {
    type: "email",
    label: "Email",
    placeholder: "your email",
  },
  {
    type: "password",
    label: "Password",
    placeholder: "your password",
  },
  {
    type: "radiogroup",
    label: "Favourite color",
    options: colors,
  },
  {
    type: "select",
    label: "Favourite city",
    options: cities,
  },
  {
    type: "date",
    label: "Birthdate",
    placeholder: "your birthdate",
    minDate: new Date(today.setFullYear(today.getFullYear() - 100)),
    maxDate: new Date(today.setFullYear(today.getFullYear() - 18)),
  },
  {
    type: "time",
    label: "Starts at",
    placeholder: "your time",
  },
];

export type FormFieldProps = {
  field: TFormField;
};

const formFieldMap: Record<string, () => React.JSX.Element> = {
  text: TextField,
  email: EmailField,
  password: PasswordField,
  select: SelectField,
  radiogroup: RadioGroupField,
  date: DateInputField,
  time: TimeInputField,
  number: NumberInputField,
};

export const DynamicFormField: React.FC<FormFieldProps> = ({ field }) => {
  const Component = formFieldMap[field.type];
  return <Component {...(field as any)} />;
};

export const Form: React.FC<FormProps> = ({ title, fields, children }) => {
  // TODO: adjust for light/dark theme
  return (
    <div className="mx-auto max-w-md px-6 py-12 border-1 shadow-lg sm:rounded-3xl">
      <h1 className="text-2xl font-bold mb-8">{title}</h1>
      <form id="form">
        {fields.map((field, index) => (
          <DynamicFormField key={index} field={field} />
        ))}
      </form>
      {children}
    </div>
  );
};
