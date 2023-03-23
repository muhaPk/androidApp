import styled from 'styled-components/native';

import { useForm, Controller } from "react-hook-form";
import {CustomButton} from "../../ui/CustomButton"
import {registration} from "../../src/actions/user";
import {useNavigation} from "@react-navigation/native";
import {CustomInput} from "../../ui/CustomInput";
import React from "react";

export const Registration = () => {

    const navigation = useNavigation();

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = data => {
        console.log("Registration.js data:", data)
        registration(data.email, data.password)
    };

    return (
        <Container>

            <CustomInput control={control} errors={errors} placeholder="Е-маил" name="email" />
            <CustomInput control={control} errors={errors} placeholder="Пароль" name="password" />

            <CustomButton title="Регистрация" onPress={handleSubmit(onSubmit)} />

            <Link onPress={() => {
                navigation.navigate('Auth');
            }}>Войти</Link>

        </Container>



    );
}

const Container = styled.View`
  background: #354052;
  height: 100%;
`

const Link = styled.Text`
  color: white;
`
