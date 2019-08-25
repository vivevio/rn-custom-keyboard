import React, { Component } from "react";
import { 
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from "react-native";

import DeleteIcon from './DeleteIcon.js';

class RNKeyboard extends Component {

    alphabet = [];

    constructor(props) {
        super(props)
        this._buildAlphabetlayout()
    }

    _buildAlphabetlayout() {
        this.alphabet = [
            'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
            'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
            'z', 'x', 'c', 'v', 'b', 'n', 'm'
        ];
    }

    _onPress(word) {
        this.props.onTutPressed(word);
    }

    _onDelete() {
        this.props.onDeleted();
    }

    _buildTuts(i, last_tuts) {
        let word = this.alphabet[i];
        return (
            <TouchableHighlight 
                key={i} 
                style={_css.tuts_wrapper}
                underlayColor={'#0057FF'}
                onPress={ this._onPress.bind(this, word) }>

                <View style={ [( i == last_tuts ? _css.last_tuts : [] ) ] } >
                    <Text style={ _css.tuts_text } >{ word }</Text>
                </View>
            </TouchableHighlight>
        )
    }

    _buildBackspaceTuts() {
        return (
            <TouchableHighlight 
                key={999} 
                style={[_css.tuts_wrapper, _css.backspace_tuts]}
                underlayColor={'#0057FF'}
                onPress={ this._onDelete.bind(this) }>

                <View style={ _css.last_tuts } >
                    <DeleteIcon />
                </View>
            </TouchableHighlight>
        )
    }
    
    firstRow() {

        var tuts = [];
        for(var i=0; i<10; i++) {
            tuts.push( this._buildTuts(i, 9) )
        }

        return tuts;
    }

    secondRow() {

        var tuts = [];
        for(var i=10; i<19; i++) {
            tuts.push( this._buildTuts(i, 18) )
        }

        return tuts;
    }
    
    thirdRow() {

        var tuts = [];
        for(var i=19; i<26; i++) {
            tuts.push( this._buildTuts(i, 25) )
        }

        tuts.push( this._buildBackspaceTuts())

        return tuts;
    }

    render() {
        return (
            <View style={_css.container}>
                <View style={ _css.row}>{ this.firstRow() }</View>
                <View style={ _css.row}>{ this.secondRow() }</View>
                <View style={ _css.row}>{ this.thirdRow() }</View>
                
                
            </View>
        );
    }
}
export default RNKeyboard;

const _css = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    tuts_wrapper: {
        backgroundColor: '#D3E0FF',
        borderColor: '#A6BBEB',
        borderStyle: 'solid',
        borderWidth: 1,
        width: 37,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 1.5,
        marginBottom: 1.5,
        borderRadius: 3
        
    },
    tuts_text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#242527',
        textTransform: 'uppercase'
    },
    last_tuts: {
        marginRight: 0
    },
    backspace_tuts: {
        borderWidth: 0,
        width: 40,
        backgroundColor: '#E70448',
    }
});