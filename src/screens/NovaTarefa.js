import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function NovaTarefa() {
    return(
        <View>
            <View style={styles.cabecalho}>
             <Text style={styles.titulo}>Adicionar Tarefa </Text>
            </View>


           
            <View style={styles.divisao}>
                <Text>
                    Nome da Tarefa:
                </Text>

                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                />

            </View>
         
        </View>

    )
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
    input:{
        backgroundColor: 'white',
        width: '80%',
        height: 50,
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
        borderWidth:1,
        alignItems: 'center',
        margin: 5
    
    },
    divisao:{

    }

   

});


