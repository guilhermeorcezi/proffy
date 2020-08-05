import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

export default function TeacherList() {
	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Estes são os proffys disponíveis.">
				<form id="search-teachers">
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
					/>
					<Input type="time" name="time" label="Horário" />
				</form>
			</PageHeader>

			<main>
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
			</main>
		</div>
	);
}
