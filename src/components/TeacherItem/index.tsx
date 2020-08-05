import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
import api from './../../services/api';

export interface Teacher {
  avatar: string,
  cost: number,
  id: number,
  name: string,
  subject: string, 
  whatsapp: string
  bio: string,
  user_id: number,
}

export interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  function createNewConnection(){
    api.post('/connections', { 
      user_id: teacher.user_id
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img
          src={teacher.avatar}
          alt={teacher.name}
        />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>
        {teacher.bio}
      </p>

      <footer>
        <p>
          Preço/hora
          <strong> {teacher.cost} </strong>
        </p>
        <a onClick={createNewConnection} target="_blank" rel="noopener noreferrer" href={`https://wa.me/${teacher.whatsapp}`} type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
