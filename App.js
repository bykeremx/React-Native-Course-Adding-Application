import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useEffect, useState } from 'react';
import ModalMenu from './pages/ModalMenu';
import FlatItem from './pages/FlatItem';
import Entypo from '@expo/vector-icons/Entypo';

export default function App() {
  //modalın açık veya kapalı olduğunu göstermek için 
  const [isModalActive, setIsModalActive] = useState(false);
  const [courses, setCourses] = useState([]);
  const handleClickButton = () => {
    setIsModalActive(!isModalActive);
  }
  //silme işlemi 

  const deleteCourse = (course) => {
    const updatedCourses = courses.filter(c => c.id !== course.id);
    setCourses(updatedCourses);
  }
  useEffect(() => {

  }, [courses]);
  return (
    <View style={styles.container}>
      <ModalMenu isModalActive={isModalActive} setIsModalActive={setIsModalActive} setCourses={setCourses}
        courses={courses}
      />
      <View style={{
        paddingTop: 40,
      }}>
        <TouchableOpacity style={styles.buttonClick}
          onPress={handleClickButton}
        >
          <View style={styles.iconVeText}>
            <AntDesign name="plussquareo" size={24} color="white"
              style={styles.icon} />
            <Text style={styles.buttonText}>
              Kurs Ekle
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.TitleContainer}>
        <Entypo name="list" size={28} color="white" />
        <Text style={styles.title}>Kurslar</Text>
      </View>
      <ScrollView
        style={styles.scroll}
      >


        <View style={styles.ListContainer}>
          <FlatList
            data={courses}
            renderItem={({ item }) => <FlatItem course={item} deleteCourse={deleteCourse}
              keyExtractor={(item) => item.id.toString()}

            />}

          />
        </View>
      </ScrollView>
      {/* <StatusBar style="auto" /> */}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  buttonClick: {
    width: 350,
    marginBottom: 5,
    backgroundColor: '#d35400',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
  },
  icon: {
    marginRight: 1,
  },
  iconVeText: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  ListContainer: {
    marginTop: 20,
    borderRadius: 10,
    marginBottom: 20,
  }, scroll: {
    marginBottom: 50,
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: '#fff'

  }, TitleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
