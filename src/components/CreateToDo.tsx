import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil';
import { toDoState } from './atoms';

interface IForm {
  toDo: string;
}


function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState)
  const { register, handleSubmit, setValue } = useForm<IForm>()
  const handleVaild = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category: 'TO_DO' },
      ...oldToDos,
    ]);
    setValue('toDo', '');
  };

  return (
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
  )
}
export default CreateToDo