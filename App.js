import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import {
    FlatList,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableOpacityBase,
    View,
    ScrollView,
} from 'react-native';
import Task from './components/task';

export default function App({task}) {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        if (value.length > 0) {
            setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
            setValue('');
        }
    };

    const handleDeleteTodo = (id) => {
        setTodos(
            todos.filter((todo) => {
                if (todo.key !== id) return true;
            })
        );
    };
    const handleChecked = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.key === id) todo.checked = !todo.checked;
                return todo;
            })
        );
    };

    return (
        <ImageBackground
            source={{
                uri: 'https://ongnhuahdpevietnam.com/wp-content/uploads/2022/08/anh-den-xam.jpg',
            }}
            style={styles.container}
        >
            <Text style={{ marginTop: '10%', fontSize: 16, color: 'white' }}>Today</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    onChangeText={(value) => setValue(value)}
                    placeholder={'Do it now!'}
                    placeholderTextColor="white"
                    value={value}
                />

                <TouchableOpacity onPress={() => handleAddTodo()}>
                    {/* <Icon name="plus" size={30} color="#900" style={{ marginLeft: 15 }} /> */}
                    <Text style={{ marginLeft: 15, fontSize: 30, color: '#900', borderWidth: 2 }}>add</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ width: '100%' }}>
                {todos.map((task) => (
                    <Task text={task.text} key={task.key} />
                ))}
            </ScrollView>
            {/* <Task
                text={task.text}
                key={task.key}
                checked={task.checked} 
                setChecked={() => handleChecked(task.key)}
                delete={() => handleDeleteTodo(task.key)}
            /> */}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textInput: {
        height: 20,
        flex: 1,
        minHeight: '7%',
        marginTop: '5%',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 10,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        borderColor: 'rgb(222,222,222)',
        borderBottomWidth: 1,
        paddingRight: 10,
        paddingBottom: 5,
    },
});
