import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { useState } from 'react'

export default function Home() {
    const [focus, setFocus] = useState(false);
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                resizeMode={'stretch'}
                source={require('../../../assets/todo.png')}
            />
            <View style={styles.form}>
                <TextInput
                    style={focus ? styles.newTaskFocus : styles.newTask}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor='#808080'
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
                <TouchableOpacity
                    style={styles.addNewTask}
                    onPress={() => setFocus(false)}
                >
                    <Image style={styles.plus}
                        resizeMode='contain'
                        source={require('../../../assets/plus.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.status}>
                <View style={styles.criadasContainer}>
                    <Text style={styles.criadasLabel}>Criadas</Text>
                    <View style={styles.criadasFundoValor}>
                        <Text style={styles.criadasValor}>
                            0
                        </Text>
                    </View>
                </View>
                <View style={styles.concluidasContainer}>
                    <Text style={styles.concluidasLabel}>
                        Concluídas
                    </Text>
                    <View style={styles.concluidasFundoValor}>
                        <Text style={styles.concluidasValor}>
                            0
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.listTask}>
                <Image
                    style={styles.clipboard}
                    resizeMode={'stretch'}
                    source={require('../../../assets/clipboard.png')}
                />
                <View style={styles.semTarefas}>
                    <Text style={styles.bold}>
                        Você ainda não tem tarefas cadastradas
                    </Text>
                    <Text style={styles.regular}>
                        Crei tarefas e organize seus itens a fazer
                    </Text>
                </View>
            </View>
        </View >
    );
}
