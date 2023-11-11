// import lodash from 'lodash';

/*
GET LANGUAGE

DEFAULT : 'en'
ENGLISH: 'en'
JAPAN: 'jp'
*/
export const getLanguage = location => {
  const listLanguage = ['en', 'jp', 'vi'];
  const listParams = location.pathname.split('/');
  let language = '';

  if (!listLanguage.includes(listParams[1])) language = 'en';
  else {
    if (listLanguage.includes(listParams[1])) language = listParams[1];
  }

  return language;
};

/*
GET PATH BY LANGUAGE

DEFAULT : ''
ENGLISH: '/en'
JAPAN: '/jp'
*/
export const getPathLanguage = location => {
  let pathLanguage = '';
  const listLanguageParams = location.pathname.split('/');

  if (listLanguageParams[1] === 'en' || listLanguageParams[1] === 'jp' || listLanguageParams[1] === 'vi')
    pathLanguage = `/${listLanguageParams[1]}`;
  else if (listLanguageParams[1] === '') pathLanguage = '';

  return pathLanguage;
};

/*
GET ID DETAIL LASTEST/HOT PROPERTIES

return uuid
*/
export const getIdDetail = location => {
  let pathLanguage = '';
  let id = '';
  const listLanguageParams = location.pathname.split('/');

  if (listLanguageParams[1] === 'en' || listLanguageParams[1] === 'jp') pathLanguage = `/${listLanguageParams[1]}`;
  else if (listLanguageParams[1] === '') pathLanguage = '';

  if (pathLanguage) id = listLanguageParams[4];
  else id = listLanguageParams[3];

  return id;
};

/*
GET ID DETAIL LASTEST/HOT PROPERTIES, BLOG

return uuid
*/
export const getIdDetailBlog = location => {
  let pathLanguage = '';
  let id = '';
  const listLanguageParams = location.pathname.split('/');

  if (listLanguageParams[1] === 'en' || listLanguageParams[1] === 'jp') pathLanguage = `/${listLanguageParams[1]}`;
  else if (listLanguageParams[1] === '') pathLanguage = '';

  if (pathLanguage) id = listLanguageParams[3];
  else id = listLanguageParams[2];

  return id;
};

export const getQueryString = params => {
  const parts = [];

  lodash.forEach(params, (value, key) => {
    const values = lodash.isArray(value) ? value : [value];
    const operator = lodash.isArray(value) ? '=' : '=';

    lodash.forEach(values, v => {
      parts.push(key + operator + encodeURIComponent(v));
    });
  });

  const queryString = parts.join('&');

  return queryString ? `?${queryString}` : '';
};
