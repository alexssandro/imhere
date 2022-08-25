import React, { useState }  from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'

import { Contest } from '../../components/Contest';

export default function Home() {
    const [ contests, setContests ] = useState<string[]>([]);
    const [ contestName, setContestName ] = useState('');
    
    function handleContestAdd() {
        if(contests.includes(contestName)){
            return Alert.alert("Contestant already exists", "This constestant already exists, please try to add another name")
        }

        setContests(prevState =>  [...prevState, contestName]);
        setContestName('');
    }

    function handleContestRemove(name : string){
        Alert.alert('Remove', `Are you sure you want to remove the ${name} contestant?`, 
        [
            {
                text: 'Yes',
                onPress: () => 
                { 
                    setContests(prevState => prevState.filter(item => item !== name));
                    Alert.alert(`${name} removed!`);
                }
            },
            {
                text: 'No',
                style: 'cancel'
            }
        ]);
    }
    
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontSize: 30 }}>Where am I?</Text>
            <Text style={styles.subTitle}>click here and find out!</Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Contest Name"
                    placeholderTextColor='#6B6B6B'
                    keyboardType='default'
                    onChangeText={setContestName}
                    value={contestName}>
                </TextInput>

                <TouchableOpacity 
                    style={ styles.button } 
                    onPress={handleContestAdd}>
                    <Text style={ styles.buttonText }>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={contests} 
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Contest key={item} name={item} onRemove={() => handleContestRemove(item)}/>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Nobody has arrived at the event yet? Add new contest to your list.
                    </Text>
                )}
                />
        </View>
    );
}