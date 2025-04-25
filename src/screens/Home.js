import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import TarefaItem from '../components/TarefaItem';
import { Touchable } from 'react-native';
import { useState } from 'react';

export default function Home(){

    return (
        <View style={styles.container}>
           <View style={styles.cabecalho}>
                <text style={styles.titulo}>ABRIL / 2025 </text>
                <View style={styles.icone}> </View>
           </View>
           <ScrollView style={styles.body}>
              
                <TarefaItem 
                nome="Tarefa 1"
                status="a cumprir"
                data="24/04/2024"
                categoria="reunião" 
                />

                   <TarefaItem 
                nome="Tarefa 2"
                status="concluído"
                />
                
                <TarefaItem 
                nome="Tarefa 1"
                status="a cumprir"
                data="24/04/2024"
                categoria="reunião" 
                />

                   <TarefaItem 
                nome="Tarefa 2"
                status="concluído"
                />
                
                


               
           </ScrollView>

           <TouchableOpacity
                 style={styles.botaoAdicionar}
                 onPress={() => {
                    alert("Olá")
                 }}
                 >
                    <Text style={styles.mais}>
                        +
                    </Text>
                </TouchableOpacity>    
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1 
    },

    cabecalho:{
        backgroundColor:'blue',
        width:'100%',
        height:60,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    icone: {
        backgroundColor: 'gray',
        width:40,
        height:40,
        borderRadius:20,
        position:'absolute',
        right: 15
    },

    body:{
        flex:1,
    },

    botaoAdicionar:{
        backgroundColor: 'blue',
        width:50,
        height:50,
        borderRadius:30,
        position:'absolute',
        bottom: 15,
        right: 15,
        justifyContent: 'center',
        alignItems:'center'
        

    },

    mais:{
        color:'white',
        fontSize: 50,
        fontWeight:'bold',
        textAlign: 'center',
        marginTop: -12


    }
    

});