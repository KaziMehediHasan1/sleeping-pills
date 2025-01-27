import { FaStar } from "react-icons/fa6";
import {
  Form,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Button,
  Textarea,
} from "@nextui-org/react";
import { useState } from "react";
const FormElement = () => {
  return (
    <div className="pt-8 pl-3">
      <div className="space-y-2">
        <h1 className="font-semibold text-3xl">Add a review</h1>
        <p className="font-semibold">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <div className="space-y-2 pt-3">
        <p className="font-semibold text-3xl">Your rating</p>
        <div className="flex items-center space-x-1">
          <FaStar className="text-xl font-semibold text-gray-400" />
          <FaStar className="text-xl font-semibold text-gray-400" />
          <FaStar className="text-xl font-semibold text-gray-400" />
          <FaStar className="text-xl font-semibold text-gray-400" />
          <FaStar className="text-xl font-semibold text-gray-400" />
        </div>
      </div>
      {/* Form */}
      <Form method="post" className="pt-6">
        <Input
          label="Username"
          name="username"
          className="rounded-none"
          radius="none"
        />
        <Input label="Password" name="password" type="password" radius="none" />
        <Textarea
          radius="none"
          disableAnimation
          disableAutosize
          classNames={{
            input: "resize-y min-h-[100px]",
          }}
          label="Description"
          placeholder="Enter your description"
          variant="bordered"
        />
        <Button type="submit" radius="none" className="bg-black text-white">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default FormElement;
