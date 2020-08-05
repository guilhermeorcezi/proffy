import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

export default function TeacherForm() {
	const [scheduleItems, setScheduleItems] = useState([
		{ week_day: 0, from: '', to: '' },
	]);

	const [name, setName] = useState('');
	const [avatar, setAvatar] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [bio, setBio] = useState('');
	const [subject, setSubject] = useState('');
	const [cost, setCost] = useState('');

	function addNewScheduleItem() {
		setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
	}

	function setScheduleItemValue(
		position: number,
		field: string,
		value: string
	) {
		const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
			if (index === position) {
				return { ...scheduleItem, [field]: value };
			}

			return scheduleItem;
		});

		setScheduleItems(updatedScheduleItems);
	}

	function handleCreateClass(e: FormEvent) {
		e.preventDefault();

		api
			.post('classes', {
				name,
				avatar,
				whatsapp,
				bio,
				subject,
				cost: Number(cost),
				schedule: scheduleItems,
			})
			.then(() => {
				alert('foi');
			})
			.catch(() => {
				alert('nao foi');
			});
	}

	return (
		<div className="container" id="page-teacher-form">
			<PageHeader
				title="Que incrível que você quer dar aulas"
				description="O primeiro passo é preencher esse formulario de inscrição."
			/>

			<main>
				<form onSubmit={handleCreateClass}>
					<fieldset>
						<legend>Seus Dados</legend>
						<Input
							name="name"
							label="Nome Completo"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<Input
							name="avatar"
							label="Avatar"
							value={avatar}
							onChange={(e) => setAvatar(e.target.value)}
						/>
						<Input
							name="whatsapp"
							label="Whatsapp"
							value={whatsapp}
							onChange={(e) => setWhatsapp(e.target.value)}
						/>
						<Textarea
							name="bio"
							label="Biografia"
							value={bio}
							onChange={(e) => setBio(e.target.value)}
						/>
					</fieldset>

					<fieldset>
						<legend>Sobre a aula</legend>
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
						<Input
							name="cost"
							label="Custo da sua hora por aula"
							value={cost}
							onChange={(e) => setCost(e.target.value)}
						/>
					</fieldset>

					<fieldset>
						<legend>
							Horários Disponiveis
							<button type="button" onClick={addNewScheduleItem}>
								+ Novo Horario
							</button>
						</legend>

						{scheduleItems.map((scheduleItem, index) => {
							return (
								<div key={scheduleItem.week_day} className="schedule-item">
									<Select
										name="week_day"
										label="Dia da Semana"
										value={scheduleItem.week_day}
										onChange={(e) =>
											setScheduleItemValue(index, 'week_day', e.target.value)
										}
										options={[
											{ value: '0', label: 'Domingo' },
											{ value: '1', label: 'Segunda' },
											{ value: '2', label: 'Terça' },
											{ value: '3', label: 'Quarta' },
											{ value: '4', label: 'Quinta' },
											{ value: '5', label: 'Sexta' },
											{ value: '6', label: 'Sábado' },
										]}
									/>
									<Input
										name="from"
										label="Das"
										type="time"
										value={scheduleItem.from}
										onChange={(e) =>
											setScheduleItemValue(index, 'from', e.target.value)
										}
									/>
									<Input
										name="to"
										label="Até"
										type="time"
										value={scheduleItem.to}
										onChange={(e) =>
											setScheduleItemValue(index, 'to', e.target.value)
										}
									/>
								</div>
							);
						})}
					</fieldset>

					<footer>
						<p>
							<img src={warningIcon} alt="Aviso Importante" />
							Importante <br />
							Preencha todos os dados
						</p>
						<button type="submit">Salvar cadastro</button>
					</footer>
				</form>
			</main>
		</div>
	);
}
