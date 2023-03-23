import {View, Text, TextInput} from "react-native"
import React, {useState} from "react";
import {Controller} from "react-hook-form";
import {Colors} from "../consts"

export const CustomInput = ({control, errors, placeholder, name, ...rest}) => {

    const {underlineColor, underlineActiveColor} = Colors

    const [inputStyle, setInputStyle] = useState(underlineColor);

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
                        borderBottomWidth: 1,
                        borderBottomColor: inputStyle
                    }}>

                        <TextInput
                            onChangeText={onChange}
                            value={value}
                            placeholder={placeholder}

                            onBlur={() => {
                                onBlur();
                                setInputStyle(underlineColor);
                            } }
                            onFocus={() => setInputStyle(underlineActiveColor)}
                            placeholderTextColor="#aaa"
                            underlineColorAndroid="transparent"
                            style={{color: "white", paddingTop: 5, paddingBottom: 5}}
                            {...rest}
                        />

                    </View>

                )}
        />
        {errors[name] && <Text>This is required.</Text>}
        </>
    )
}