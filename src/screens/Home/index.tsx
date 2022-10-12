import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function Home() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                resizeMode={'stretch'}
                source={require('../../../assets/todo.png')}
            />
            <View style={styles.form}>
                <TextInput
                    style={styles.newTask}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor='#808080'
                />
                <TouchableOpacity style={styles.addNewTask}>
                    <Image style={styles.plus}
                        resizeMode='contain'
                        source={require('../../../assets/plus.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}
