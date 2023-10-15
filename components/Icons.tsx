import { StyleSheet, Text, View } from 'react-native'
import type { PropsWithChildren } from 'react'
import FontAwesome  from '@expo/vector-icons/FontAwesome';
import React from 'react'

type IconsProps = PropsWithChildren<{
    name: string
}>

const Icons = ({name} : IconsProps ) => {
    switch (name) {
        case 'circle':
            return <FontAwesome name="circle-thin" size={38} 
                      color="#678734"    />
            break;
        case 'cross':
            return <FontAwesome name="times" size={38} 
                      color="#678114"    />
            break;
        default:
            return <FontAwesome name="link" size={38} 
                      color="#673412"    />
            break;
    }
 
}

export default Icons

const styles = StyleSheet.create({})