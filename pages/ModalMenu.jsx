import React, { useState } from 'react'
import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

const ModalMenu = ({ isModalActive, setIsModalActive, setCourses ,courses}) => {

    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [courseTeach, setCourseTeach] = useState('');

    const handleAddCourse = () => {
        if (courseName.trim() === '') {
            alert('Kurs adı boş bırakılamaz!');
            return;
        }
        //önceki kurs bilgilerine ekle 
        setCourses([...courses,
        {   id:Date.now().toString(),
            name: courseName, 
            description: courseDescription, teacher: courseTeach }
        ]);
        setIsModalActive(false);
        setCourseName('');
        setCourseDescription('');
        setCourseTeach('');
    }
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={isModalActive}
            onRequestClose={() => {
                setIsModalActive(false)
            }}
        >
            <View style={styles.container}>
                <View style={styles.header}>

                    <View style={styles.menuText}>
                        <Text style={styles.menuTextContent}>

                            Kurs Ekle</Text>
                    </View >
                    <View style={styles.closeIcon}>
                        <AntDesign name="closesquare" size={50} color="#e74c3c"
                            onPress={
                                () => setIsModalActive(false)
                            }
                        />
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.text}>
                        Kurs Ekle !
                    </Text>
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Kurs Adı</Text>
                        <TextInput style={styles.input}
                            value={courseName}
                            onChangeText={text => setCourseName(text)}
                        />
                        <Text style={styles.inputLabelSmall}>
                            Lütfen Kurs Adını Boş Geçmeyin !
                        </Text>
                        <Text style={styles.inputLabel}>Kurs Açıklaması</Text>

                        <TextInput style={styles.input}
                            value={courseDescription}
                            onChangeText={text => setCourseDescription(text)}

                        />
                        <Text style={styles.inputLabelSmall}>
                            Lütfen Kurs Açıklamasını Boş Geçmeyin !
                        </Text>
                        <Text style={styles.inputLabel}>Kurs Eğitmeni</Text>
                        <TextInput style={styles.input}
                            value={courseTeach}
                            onChangeText={text => setCourseTeach(text)}
                        />
                        <Text style={styles.inputLabelSmall}>
                            Lütfen Kurs Eğitmenini Boş Geçmeyin !
                        </Text>
                        <TouchableOpacity
                        onPress={handleAddCourse}
                        >
                            <Text style={styles.buttonText}>Kurs Ekle</Text>
                        </TouchableOpacity>

                    </View>
                </View >

            </View>
        </Modal>
    )
}

export default ModalMenu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9f9'
    },
    text: {
        paddingTop: 30,
        fontSize: 34,
        marginBottom: 20,
        color: '#34495e',
        fontWeight: 'bold'
    }, header: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20,
        marginRight: 30
    },
    closeIcon: {
        paddingRight: 10
    },
    body: {
        paddingHorizontal: 40,
        paddingVertical: 30
    },
    menuText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    menuTextContent: {
        color: '#fff',
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 60,
    }
    ,
    inputLabel: {
        color: '#2c3e50',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    }, input: {
        borderWidth: 3,
        borderColor: '#2c3e50',
        padding: 10,
        marginBottom: 4,
        borderRadius: 10,
        backgroundColor: 'white',

    }, inputLabelSmall: {
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#f9e79f",
        borderRadius: 10,
    }, buttonText: {
        backgroundColor: '#2ecc71',
        color: '#f7f9f9',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});