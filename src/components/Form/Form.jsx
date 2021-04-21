import React from "react";
import PropTypes from "prop-types";
import style from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormStore from "../../store/Form";


const Form = (props) => {
  const {setDataForm} = props;
  
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
      <div className={style.formContainer}>
        <form onSubmit={handleSubmit(setDataForm)} className={style.formSubmit}>
          <div className={style.wrapperElementForm}>
            <h2 className={style.headerForm}>Формочка</h2>
          </div>
          <p className={style.headerInput}>Введите вашу фамилию</p>
          <div className={style.wrapperElementForm}>
            <input placeholder="Фамилия"
                   autoComplete="off"
                   className={style.input + " " + (errors.surname && style.inCorrect ||touchedFields.surname && style.correct || "")}
                   type="text"
                   {...register("surname")} />
                   {errors.surname && <p className={style.promptForm}>{errors.surname.message}</p>}
          </div>
          <p className={style.headerInput}>Введите ваше имя</p>
          <div className={style.wrapperElementForm}>
            <input placeholder="Имя"
                   autoComplete="off"
                   type="text"
                   className={style.input + " " + (errors.name && style.inCorrect ||touchedFields.name && style.correct || "")}
                   {...register("name")} />
                   {errors.name && <p className={style.promptForm}>{errors.name.message}</p>}
          </div>
          <div className={style.wrapperElementForm}>
            <button className={style.button}>Готово</button>
          </div>
        </form>
        </div>
      );
}

Form.propTypes = {
  // captchaUrl: PropTypes.string.isRequired,
  // handleRegistration: PropTypes.func.isRequired,
};

export default Form;