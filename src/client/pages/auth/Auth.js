import React from "react";
import {useDispatch} from "react-redux";
import { Colors } from '../../consts';

import styled from 'styled-components/native';
import { useForm } from "react-hook-form";
import {CustomButton} from "../../ui/CustomButton"
import {login} from "../../src/actions/user";
import {useNavigation} from "@react-navigation/native";
import {CustomInput} from "../../ui/CustomInput";
import { Container } from "../../ui/Grid/Container";

const {backgroundColor} = Colors

export const Auth = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: 'email',
            password: 'password'
        }
    });

    const onSubmit = data => {
        dispatch(login(data.email, data.password))
    };

    return (
        <Container>

            <CustomInput control={control} errors={errors} placeholder="Название" name="email" />
            <CustomInput control={control} errors={errors} placeholder="Пароль" name="password" />

            <CustomButton type="button" title="Войти" onPress={handleSubmit(onSubmit)} />

            <Link onPress={() => {
                navigation.navigate('Registration');
            }}>Регистрация</Link>

        </Container>



    );
}

const Link = styled.Text`
  color: white;
`
