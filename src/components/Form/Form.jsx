import React from "react";
import PropTypes from "prop-types";
import style from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Form = (props) => {
  const {setDataForm, store} = props;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
              .required('Поле обязательно для заполнения.'),
    surname: Yup.string()
                 .required('Поле обязательно для заполнения.'),
  });

  const { register, formState, handleSubmit } = useForm({
      mode: 'onBlur',
      resolver: yupResolver(validationSchema)
  });

  const {errors, touchedFields} = formState;

    return (
        <form onSubmit={handleSubmit(setDataForm)}>
          <div>
            <input placeholder="Имя"
                   type="text"
                   className={errors.name && style.inCorrect ||touchedFields.name && style.correct }
                   {...register("name")} />
                   {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div>
            <input placeholder="Фамилия"
                   className={errors.surname && style.inCorrect ||touchedFields.surname && style.correct}
                   type="text"
                   {...register("surname")} />
                   {errors.surname && <p>{errors.surname.message}</p>}
          </div>
          <button>Готово</button>
        </form>
      );
}

Form.propTypes = {
  // captchaUrl: PropTypes.string.isRequired,
  // handleRegistration: PropTypes.func.isRequired,
};

export default Form;