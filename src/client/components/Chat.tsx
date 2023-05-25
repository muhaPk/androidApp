import React, { FC, useCallback, useEffect, useState, useRef } from "react";
import { Row } from '../ui/Grid/Row';
import { CustomTextarea } from "../ui/CustomTextarea";
import { useForm } from "react-hook-form";
import styled from 'styled-components/native';
import { createGroupMessage, getLastGroupMessages } from "../src/actions/message";
import { CustomButton } from "../ui/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import {Colors} from '../consts'
import {socket} from "../libs/socket"

const {textColor} = Colors

export const Chat: FC = ({groupId}: any) => {

  const dispatch = useDispatch()

  const [groupMessagesData, setGroupMessagesData] = useState([]);

  const { groupMessages } = useSelector(state => state.groupMessages)
  const { users } = useSelector(state => state.users)
  const { currentUser } = useSelector(state => state.users)

  useEffect(() => {

    const customUsers = []
    users.forEach(user => customUsers[user._id] = user.email)

    const customMessages = []
    groupMessages
      .filter(message => message.group_id === groupId)
      .forEach(message => customMessages.push({...message, email: customUsers[message.user_id]}))

    setGroupMessagesData(customMessages)
  }, [users, groupMessages])


  useEffect(() => {
    socket.on("updateMessages", () => {
      console.log("updateMessages");
      // dispatch(getLastGroupMessages(groupId));
    });

    return () => socket.emit("leaveRoom", groupId);
  }, [groupId]);

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      message: ''
    }
  });

  const onSubmit = useCallback(data => {
      dispatch(createGroupMessage(currentUser?.id, groupId, data?.message));
      reset();
      socket.emit('newMessage', groupId);
    },
    [currentUser, groupId, reset, dispatch],
  );


  const scrollViewRef = useRef();


  return (
    <>
      <MessagesWrapper
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        <Messages as={Row} direction="column">
          {groupMessagesData.map(({email, message}, i) => (
          <Row key={i}>
            <CustomText>{email}: </CustomText>
            <CustomText>{message}</CustomText>
          </Row>

          ))}
        </Messages>

      </MessagesWrapper>


      <Row>
        <CustomTextarea control={control} errors={errors} placeholder="Название" name="message" />
        <CustomButton type="button" title="Send" onPress={handleSubmit(onSubmit)} />
      </Row>
    </>


  )
}


const Messages = styled.View`
  padding: 5px 5px 10px;
`;

const MessagesWrapper = styled.ScrollView`
  display: flex;
  flex: 1;
  background: #4b586d;
  color: #ccc;
  overflow: hidden;
`;

export const CustomText = styled.Text`
  color: ${textColor};
`;
