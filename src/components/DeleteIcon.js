import React from "react";
import { 
    View,
} from "react-native";

import Svg,{
    G,
    Path,
} from 'react-native-svg';

const DeleteIcon = (props) => (
    <View>
        <Svg width="21px" height="16px" viewBox="0 0 21 16">
            <G id="UI" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <G id="Main-Game---Text" transform="translate(-336.000000, -584.000000)" stroke="#FFFFFF" strokeWidth="2">
                    <G id="KeyboardTuts-4" transform="translate(50.000000, 571.000000)">
                        <G id="KeyboardTuts" transform="translate(273.000000, 0.000000)">
                            <G id="delete" transform="translate(14.000000, 14.000000)">
                                <Path d="M17.2727273,0 L6.04545455,0 L0,6.90909091 L6.04545455,13.8181818 L17.2727273,13.8181818 C18.2266737,13.8181818 19,13.0448555 19,12.0909091 L19,1.72727273 C19,0.773326341 18.2266737,0 17.2727273,0 Z" id="Path"></Path>
                                <Path d="M14.6818182,4.31818182 L9.5,9.5" id="Path"></Path>
                                <Path d="M9.5,4.31818182 L14.6818182,9.5" id="Path"></Path>
                            </G>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
    </View>
    )
export default DeleteIcon;