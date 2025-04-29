import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function NovaTarefa() {
    return(
        <View>
            <View style={styles.cabecalho}>
             <Text style={styles.titulo}>Adicionar Tarefa </Text>
            </View>


           
            <View style={styles.body}>
                <Text style={styles.texto}>
                    Nome da Tarefa:
                </Text>

                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                />
                
                <Text style={styles.texto2}>
                    Categoria da Tarefa:
                </Text>

                <TextInput
                     placeholder="Selecione a categoria"
                    style={styles.input2}
                    autoCapitalize="none"
                />

                <Text style={styles.texto3}>
                    Descrição da Tarefa:
                </Text>

                <TextInput
                    style={styles.input3}
                    autoCapitalize="none"
                    placeholder="Value"
                />

                <TextInput
                    style={styles.input4}
                    autoCapitalize="none"
                    placeholder="mm/dd/yyyy"
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
        borderWidth:1,
        borderRadius: 8,
        backgroundColor: 'white',
        padding: 12,
        borderColor:'#ccc',
        
    },
    body:{
        padding: 15

    },

    texto:{
        marginBottom:5

    },

    texto2:{
    marginBottom:5,
       marginTop: 30
    },

    input2:{
        borderWidth:1,
        borderRadius: 8,
        backgroundColor: 'white',
        borderColor: '#ccc',
        padding: 12,   
    },

    texto3:{
        marginBottom:5,
        marginTop: 30
     },

     input3:{
        color: '#ccc',
        borderColor: '#ccc',
        borderWidth:1,
        borderRadius: 8,
        backgroundColor: 'white',
        padding: 12,
        height: 100, 
        
    },

    input4:{
        borderColor: '#ccc',
        borderWidth:1,
        borderRadius: 8,
        backgroundColor: 'white',
        padding: 50,
        margin:40,
        marginTop: 100
        
    }
   

});


