import React, { useState, useEffect ,FormEvent } from 'react';

import PageHeader from './../../components/PageHeader/index';

import "./styles.css";
import TeacherItem, { Teacher } from '../../components/TeacherItem/';
import Input from '../../components/Input/';
import Select from './../../components/Select/';
import api from './../../services/api';
import Loader from './../../components/Loader/index';
import EmptyState from './../../components/EmptyState/index';

function TeacherList(){

    const [isLoading, setIsLoading] = useState(true);
    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [weekDay, setWeekDay] = useState('');
    const [time, setTime] = useState('');


    async function searchTeachers(e: FormEvent){
        e.preventDefault();

        setIsLoading(true);

        const response = await api.get('/classes', {
            params: {
                subject,
                week_day: weekDay,
                time,
            }
        });

        setTeachers(response.data);
        
        setIsLoading(false);
    }

    useEffect(() => {
        const fetch = async () => {
            setIsLoading(true);

            try { 
                const response = await api.get('/classes');
                setTeachers(response.data);
                setIsLoading(false);
            } catch(err){
                setIsLoading(false)
            }
        }

        fetch();
    }, []);

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                    name="subject" 
                    label="Matéria" 
                    options={[
                    {value: '', label: 'Todas'},
                    {value: 'Artes', label: 'Artes'},
                    {value: 'Biologia', label: 'Biologia'},
                    {value: 'Química', label: 'Química'},
                    {value: 'Física', label: 'Física'},
                    {value: 'Matemática', label: 'Matemática'},
                    {value: 'Português', label: 'Português'},
                    {value: 'Geografia', label: 'Geografia'},
                    {value: 'História', label: 'História'},
                    ]}
                    value={subject}
                    onChange={(e) => {setSubject(e.target.value)}}
                    />
                   <Select 
                   name="week_day" 
                   label="Dia da semana" 
                   options={[
                    {value: '', label: 'Qualquer'},
                    {value: '0', label: 'Domingo'},
                    {value: '1', label: 'Segunda-feira'},
                    {value: '2', label: 'Terça-feira'},
                    {value: '3', label: 'Quarta-feira'},
                    {value: '4', label: 'Quinta-feira'},
                    {value: '5', label: 'Sexta-feira'},
                    {value: '6', label: 'Sábado'}
                   ]}
                   value={weekDay}
                   onChange={(e) => {setWeekDay(e.target.value)}}
                   />

                   <Input 
                   type="time" 
                   label="Hora" 
                   name="time"
                   value={time}
                   onChange={(e) => {setTime(e.target.value)}}
                   />

                   <button type="submit">
                       Buscar
                   </button>
                </form>
            </PageHeader>

            <main>
                {isLoading
                ?  <Loader />
                : teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem key={teacher.id} teacher={teacher}/>
                    );
                })}

                {!teachers.length && !isLoading && <EmptyState />}
            </main>
        </div>
    );
}

export default TeacherList;