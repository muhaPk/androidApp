import React, {useEffect, useState, useMemo} from 'react';
import {Image} from 'react-native'
import styled from 'styled-components/native';
import {useSelector} from "react-redux";
import {ImageWrapper} from "../../components/ImageWrapper"
import { Chat } from "../../components/Chat"
import { Container } from "../../ui/Grid/Container";
import { Text } from "../../ui/Grid/Text";

export const Group = ({route}) => {

    const {groups, files} = useSelector(state => state)

    const [group, setGroup] = useState(0);
    const [file, setFile] = useState({
        path: 'default.png',
    });

    useEffect(() => {
        if (route?.params?.id) {

            const groupId = route?.params?.id

            const getGroup = groups.groups.filter( el => el._id === groupId )[0]
            setGroup(getGroup)

            setFile(files.files.filter( el => el.host_id === getGroup._id )[0])
        }

    }, [route?.params?.id]);


    const filePath = useMemo(() => {
        return file?.path;
    }, [file?.path]);

    return (
        <Container>

            {/*<ImageWrapper filePath="https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png" />*/}
            <Text>{group.name}</Text>
            <Text>{group.description}</Text>

            <Chat groupId={route?.params?.id} />


        </Container>

    );
}
