import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { Picker } from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

import {
	ScrollView,
	BorderlessButton,
	RectButton,
} from 'react-native-gesture-handler';
import api from '../../services/api';
import { Feather } from '@expo/vector-icons/';
import { useFocusEffect } from '@react-navigation/native';

const TeacherList: React.FC = () => {
	const [isFiltersVisible, setIsFiltersVisible] = useState(false);
	const [subject, setSubject] = useState('');
	const [week_day, setWeekDay] = useState('');
	const [time, setTime] = useState('');
	const [teachers, setTeachers] = useState([]);
	const [favorites, setFavorites] = useState<number[]>([]);

	function loadFavorites() {
		AsyncStorage.getItem('favorites').then((response) => {
			if (response) {
				const favoritedTeachers = JSON.parse(response);
				const favoritedTeachersIds = favoritedTeachers.map(
					(teacher: Teacher) => {
						return teacher.id;
					}
				);

				setFavorites(favoritedTeachersIds);
			}
		});
	}

	useFocusEffect(() => {
		loadFavorites();
	});

	function handleToggleFiltersVisible() {
		setIsFiltersVisible(!isFiltersVisible);
	}

	async function handleFiltersSubmit() {
		loadFavorites();
		const response = await api.get('classes', {
			params: {
				subject,
				week_day,
				time,
			},
		});

		setIsFiltersVisible(false);
		setTeachers(response.data);
	}

	return (
		<View style={styles.container}>
			<PageHeader
				title="Proffys disponíveis"
				headerRight={
					<BorderlessButton onPress={handleToggleFiltersVisible}>
						<Feather name="filter" size={20} color="#FFF" />
					</BorderlessButton>
				}
			>
				{isFiltersVisible && (
					<View style={styles.searchForm}>
						<Text style={styles.label}>Matéria</Text>
						<View style={styles.inputSelect}>
							<Picker
								style={{ color: '#c1bccc' }}
								selectedValue={week_day}
								onValueChange={(itemValue, itemIndex) =>
									setSubject(String(itemValue))
								}
								itemStyle={{ backgroundColor: 'grey' }}
							>
								<Picker.Item label="Artes" value="Artes" />
								<Picker.Item label="Biologia" value="Biologia" />
								<Picker.Item label="Ciência" value="Ciência" />
								<Picker.Item label="Química" value="Química" />
								<Picker.Item label="Física" value="Física" />
								<Picker.Item label="Matemática" value="Matemática" />
								<Picker.Item label="Português" value="Português" />
							</Picker>
						</View>

						<View style={styles.inputGroup}>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>Dia da semana</Text>
								<View style={styles.inputSelect}>
									<Picker
										style={{ color: '#c1bccc' }}
										selectedValue={week_day}
										onValueChange={(itemValue, itemIndex) =>
											setWeekDay(String(itemValue))
										}
										itemStyle={{ backgroundColor: 'grey' }}
									>
										<Picker.Item label="Domingo" value="0" />
										<Picker.Item label="Segunda-feira" value="1" />
										<Picker.Item label="Terça-feira" value="2" />
										<Picker.Item label="Quarta-feira" value="3" />
										<Picker.Item label="Quinta-feira" value="4" />
										<Picker.Item label="Sexta-feira" value="5" />
										<Picker.Item label="Sábado" value="6" />
									</Picker>
								</View>
							</View>

							<View style={styles.inputBlock}>
								<Text style={styles.label}>Horário</Text>
								<TextInput
									value={time}
									onChangeText={(text) => setTime(text)}
									placeholderTextColor="#c1bccc"
									style={styles.input}
									placeholder="Qual horário"
								/>
							</View>
						</View>
						<RectButton
							onPress={handleFiltersSubmit}
							style={styles.submitButton}
						>
							<Text style={styles.submitButtonText}>Filtrar</Text>
						</RectButton>
					</View>
				)}
			</PageHeader>

			<ScrollView
				style={styles.teacherList}
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
			>
				{teachers.map((teacher: Teacher) => (
					<TeacherItem
						key={teacher.id}
						teacher={teacher}
						favorited={favorites.includes(teacher.id)}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default TeacherList;
