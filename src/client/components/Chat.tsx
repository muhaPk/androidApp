import React, { FC, useCallback, useEffect, useState } from "react";
import { Row } from '../ui/Grid/Row';
import { CustomTextarea } from "../ui/CustomTextarea";
import { useForm } from "react-hook-form";
import styled from 'styled-components/native';
import { createGroupMessage } from "../src/actions/message";
import { CustomButton } from "../ui/CustomButton";
import { useDispatch, useSelector } from "react-redux";


import { Colors } from '../consts';
const {textColor} = Colors

export const Chat: FC = ({groupId}: any) => {

  const dispatch = useDispatch()

  const [groupMessagesData, setGroupMessagesData] = useState([]);

  const { groupMessages } = useSelector(state => state.groupMessages)
  const { users } = useSelector(state => state.users)
  const user = useSelector(state => state.users)
  
  
  useEffect(() => {

    const customUsers = []
    users.forEach(user => customUsers[user._id] = user.email)

    const customMessages = []
    groupMessages
      .filter(message => message.group_id === groupId)
      .forEach(message => customMessages.push({...message, email: customUsers[message.user_id]}))

    setGroupMessagesData(customMessages)
  }, [users, groupMessages])


  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      message: ''
    }
  });

  const onSubmit = useCallback(data => {
      dispatch(createGroupMessage(user?.currentUser?.id, groupId, data?.message));
      reset();
    },
    [user, groupId, reset],
  );
  
  return (
    <>
      <ChatField>
        <Row direction="column">
          {groupMessagesData.map(({email, message}, i) => (
          <Row key={i}>
            <CustomText>{email}: </CustomText>
            <CustomText>{message}</CustomText>
          </Row>

          ))}
        </Row>

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

export const CustomText = styled.Text`
  color: ${textColor};
`;