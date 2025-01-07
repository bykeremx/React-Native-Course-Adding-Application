import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import EvilIcons from '@expo/vector-icons/EvilIcons';

const FlatItem = ({ course ,deleteCourse }) => {

    
    return (
        <View style={styles.container}>
            <View style={styles.listItem}>
                <Text style={styles.courseTeach}>{course.teacher}</Text>
                <Text style={styles.courseName}>{course.name}</Text>
                <Text style={styles.courseDescription}>{course.description}</Text>
                {/* Delete Button */}
                <TouchableOpacity style={styles.deleteButton}
                onPress={()=>{deleteCourse(course)}}
                >
                    <EvilIcons name="trash" size={30} color="white" />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default FlatItem

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f8f9f9',
        marginBottom: 10,
        width: 360,
        borderRadius: 10,
        elevation: 2,
    },
    courseName: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#343a40',
        marginLeft: 10,
        paddingLeft: 10,
    },
    courseDescription: {
        fontSize: 18,
        color: '#6c757d',
        marginLeft: 10,
        paddingLeft: 10,
        paddingBottom: 10,
    },
    deleteButton: {
        backgroundColor: '#dc3545',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        marginLeft: 20,
        paddingLeft:2,
        paddingBottom:5,
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 3, height:3 },
        shadowOpacity: 1,
        shadowRadius: 100,
        elevation: 2,

    },
    courseTeach: {
        fontSize: 20,
        color: 'white',
        marginLeft: 10,
        marginBottom: 5,
        backgroundColor: '#16a085',
        borderRadius: 3,
        overflow: 'hidden',
        maxWidth: 200,
        textAlign:"center",
        fontWeight:'bold',
        padding:3,
    }


})