/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import {
    addToRssList,
    addToUrlList,
    catchError,
    currentUrl,
} from "../features/slices/rssSlices";
import i18n from "../i18next.js";
import "./RSS.css";
import formRssList from '../features/formRssList.js';
import RSSResult from '../elements/RSS/RSSResult.jsx';

// todo #10 Добавить дизэйбл для формы в момент получения данных

const RSS = () => {
  const schema = yup
    .object({
      url: yup.string().url().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors, },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const curState = useSelector((state) => state.rss);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    axios.get(`https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(data.url)}`)
    .then((response) => {
        if( response.status === 200) return response.data;
        return dispatch(catchError('errorNetwork'));
    })
    .then((data) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, 'application/xhtml+xml')
        if (doc.querySelector('parsererror')) {
            return dispatch(catchError('notContainRSS'));
        } else {
            dispatch(addToUrlList(data.status.url));
            dispatch(catchError(''));
        }
        const formerListOfCurrentRSS = formRssList(doc);
        dispatch(addToRssList(formerListOfCurrentRSS));
        return doc;
    }).catch((e) => console.log(e));
    dispatch(currentUrl(data.url));
    reset({url: ''});
  };

  useEffect(() => {
    setFocus("url");
  }, [setFocus]);

  useEffect(() => {
    if(errors.url?.message) {
        dispatch(catchError('errorValidURL'))
    }
  }, [errors])

  return (
    <div className="rss-form-page">
      <div className='form'>
        <h2>RSS агрегатор</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="rss-form">
          <input
            type="text"
            defaultValue=""
            {...register("url", { required: true })}
            placeholder="Место для ссылки на RSS-ленту"
            className="input-for-rss"
          />
          {curState.errors && <div className="error-rss">{i18n.t(curState.errors)}</div>}
          <input type="submit" value="Найти новости"/>
        </form>
      </div>
      {curState.rssList[0] && <RSSResult />}
    </div>
  );
};

export default RSS;
