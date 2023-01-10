import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { atom, RecoilRoot, RecoilState, useRecoilState } from 'recoil';
import { text } from 'stream/consumers';
import styled from 'styled-components';

interface IForm {
	toDo: string;
}
interface IToDo {
	text: string;
	id: number;
	category: 'TO_DO' | 'DOING' | 'DONE';
}
const toDoState = atom<IToDo[]>({
	key: 'toDos',
	default: [],
});

function ToDoList() {
	const [toDos, setToDos] = useRecoilState(toDoState);
	const { register, handleSubmit, setValue } = useForm<IForm>();
	const handleVaild = ({ toDo }: IForm) => {
		setToDos((oldToDos) => [
			{ id: Date.now(), text: toDo, category: 'TO_DO' },
			...oldToDos,
		]);
		setValue('toDo', '');
	};
	console.log(toDos);
	return (
		<div>
			<h1>To Do</h1>
			<hr />
			<form action='' onSubmit={handleSubmit(handleVaild)}>
				<input
					{...register('toDo', {
						required: 'Write to do',
					})}
					type='text'
					placeholder='Write To do....'
				/>
				<button>Adds</button>
			</form>
			<ul>
				{toDos.map((todo) => (
					<li key={todo.id}>{todo.text}</li>
				))}
			</ul>
		</div>
	);
}

export default ToDoList;
