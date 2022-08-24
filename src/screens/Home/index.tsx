import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'

import { Contest } from '../../components/Contest';

export default function Home() {
    const contests = 
    [
        'Person 1',
        'Person 2',
        'Person 3',
        'Person 4',
        'Person 5',
        'Person 6',
        'Person 7',
        'Person 8',
        'Person 9',
        'Person 10',
    ];

    function handleContestAdd() {
        if(contests.includes("Person 1")){
            return Alert.alert("Contestant already exists", "This constestant already exists, please try to add another name")
        }
    }

    function handleContestRemove(name : string){
        Alert.alert('Remove', `Are you sure you want to remove the ${name} contestant?`, 
        [
            {
                text: 'Yes',
                onPress: () => Alert.alert('Removed!')
            },
            {
                text: 'No',
                style: 'cancel'
            }
        ]);
    }
    
    return (
        <View style={ styles.container }>
            <Text style={{ color: 'white', fontSize: 30 }}>Where am I?</Text>
            <Text style={styles.subTitle}>click here and find out!</Text>

            <View style={ styles.form }>
                <TextInput 
                    style={ styles.input }
                    placeholder="Contest Name"
                    placeholderTextColor='#6B6B6B'
                    keyboardType='default'>
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