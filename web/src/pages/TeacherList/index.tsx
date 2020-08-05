import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

export default function TeacherList() {
	const [teachers, setTeachers] = useState([]);
	const [subject, setSubject] = useState('');
	const [week_day, setWeekDay] = useState('');
	const [time, setTime] = useState('');

	async function handleSearchTeachers(e: FormEvent) {
		e.preventDefault();

		const response = await api.get('classes', {
			params: {
				subject,
				week_day,
				time,
			},
		});

		setTeachers(response.data);
	}

	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Estes são os proffys disponíveis.">
				<form id="search-teachers" onSubmit={handleSearchTeachers}>
					<Select
						name="subject"
						label="Matéria"
						options={[
							{ value: 'Artes', label: 'Artes' },
							{ value: 'Biologia', label: 'Biologias' },
							{ value: 'Ciência', label: 'Ciência' },
							{ value: 'Química', label: 'Química' },
							{ value: 'Física', label: 'Física' },
							{ value: 'Matemática', label: 'Matemática' },
							{ value: 'Português', label: 'Português' },
						]}
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
					/>
					<Select
						name="week_day"
						label="Dia da Semana"
						options={[
							{ value: '0', label: 'Domingo' },
							{ value: '1', label: 'Segunda Feira' },
							{ value: '2', label: 'Terça Feira' },
							{ value: '3', label: 'Quarta Feira' },
							{ value: '4', label: 'Quinta Feira' },
							{ value: '5', label: 'Sexta Feira' },
							{ value: '5', label: 'Sábado' },
						]}
						value={week_day}
						onChange={(e) => setWeekDay(e.target.value)}
					/>
					<Input
						type="time"
						name="time"
						label="Horário"
						value={time}
						onChange={(e) => setTime(e.target.value)}
					/>
					<button type="submit">Buscar</button>
				</form>
			</PageHeader>

			<main>
				{teachers.map((teacher: Teacher) => (
					<TeacherItem teacher={teacher} key={teacher.id} />
				))}
			</main>
		</div>
	);
}
