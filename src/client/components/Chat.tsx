import React from 'react';
import { Text } from 'react-native';
import { Row } from '../ui/Grid/Row';
import { CustomTextarea } from "../ui/CustomTextarea";
import { useForm } from "react-hook-form";
import styled from 'styled-components/native';
import { createGroupMessage } from "../src/actions/message";
import { CustomButton } from "../ui/CustomButton";
import { useDispatch, useSelector } from "react-redux";

export const Chat = ({groupId}) => {

  const dispatch = useDispatch()

  const {user} = useSelector(state => state)

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      message: ''
    }
  });

  const onSubmit = data => {
    // @ts-ignore
    dispatch(createGroupMessage(user?.currentUser?.id, groupId, data?.message))
  };


  return (
    <>
      <ChatField>
        <Text>1</Text>
      </ChatField>


      <Row>
        <CustomTextarea control={control} errors={errors} placeholder="Название" name="message" />
        <CustomButton type="button" title="Send" onPress={handleSubmit(onSubmit)} />
      </Row>
    </>


  )
}


const ChatField = styled.View`
  display: flex;
  flex: 1;
  padding: 5px;
  background: #4b586d;
  color: #ccc;
`;
