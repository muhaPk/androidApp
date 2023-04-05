import React from 'react';
import { Text } from 'react-native';
import { Row } from '../ui/Grid/Row';
import { CustomTextarea } from "../ui/CustomTextarea";
import { useForm } from "react-hook-form";
import { login } from "../src/actions/user";

export const Chat = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      message: ''
    }
  });

  const onSubmit = data => {
    // dispatch(login(data.email, data.password))
  };


  return (
    <>
      <Row>
        <Text>1</Text>
      </Row>


      <Row>
        <CustomTextarea control={control} errors={errors} placeholder="Название" name="message" />
      </Row>
    </>


  )
}
