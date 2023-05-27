import React, {FC} from "react";
import {View, Text, TextInput} from "react-native"
import {Controller} from "react-hook-form";
import {FormData} from "../types/data"

export const CustomTextarea: FC<FormData> = ({control, errors, placeholder, name, ...rest}: FormData) => {

    return (
        <>
        <Controller
            name={name}
            control={control}
            rules={{
                required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (

                    <View style={{
                        display: 'flex',
                        flex: 1,
                    }}>

                        <TextInput
                            multiline={true}
                            numberOfLines={3}
                            onChangeText={onChange}
                            value={value}
                            placeholder={placeholder}

                            onBlur={() => {
                                onBlur();
                            } }
                            placeholderTextColor="#aaa"
                            underlineColorAndroid="transparent"
                            style={{color: "white", paddingTop: 5, paddingBottom: 5, textAlignVertical: 'top'}}
                            {...rest}
                        />

                    </View>

                )}
        />
        {errors[name] && <Text>This is required.</Text>}
        </>
    )
}
