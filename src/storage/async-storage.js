import AsyncStorage from "@react-native-async-storage/async-storage";

const key = 'tasks';

const getData = async () => {
    // JSON.parse tranforma textos em objetos
    let data = JSON.parse(await AsyncStorage.getItem(key));

    // Se não houverem dados, preencher  e salvar um array vazio
    if (data == null) {
        data = new Array ()
        setData(data)
    }

    return data
}

const setData = async (value) => {
     // JSON.parse tranforma objetos em textos
    await AsyncStorage.setItem(key, JSON.stringify(value));
}

export {
    getData,
    setData
}