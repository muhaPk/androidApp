import React, {useState, useCallback} from 'react';
import {TouchableOpacity} from "react-native"
import styled from 'styled-components/native';
import {useForm} from "react-hook-form";
import {CustomButton} from "../../ui/CustomButton";
import {CustomInput} from "../../ui/CustomInput";
import {useDispatch} from "react-redux";
import {createGroup} from "../../src/actions/group";
import {launchImageLibrary} from 'react-native-image-picker';


export const CreateGroup = () => {

    const dispatch = useDispatch()

    const [file, setFile] = useState(null)

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            description: ''
        }
    });

    const onSubmit = data => {
        dispatch(createGroup(data.name, data.description, file))
    };

  const chooseFile = async () => {
        let options = {
            mediaType: "photo",
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        await launchImageLibrary(options, (response) => {
            setFile(response)
        });
    };



    return (
        <Container>
            <Text>Новая группа</Text>

            <CustomInput control={control} errors={errors} placeholder="Название" name="name" />
            <CustomInput control={control} errors={errors} placeholder="Описание" name="description" multiline numberOfLines={4} />

            <TouchableOpacity>
                <Text title="загрузить" onPress={chooseFile}>загрузить</Text>
            </TouchableOpacity>

            <CustomButton type="button" title="Создать" onPress={handleSubmit(onSubmit)} />
        </Container>

    );
}

const Container = styled.View`
  background: #354052;
  height: 100%;
`;
const Text = styled.Text`
  font-size: 18px;
  font-weight: normal;
  color: #eee;
  margin-bottom: 10px;
`;
