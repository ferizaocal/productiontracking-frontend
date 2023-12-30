export const goNavigate = (navigation: any, route: any) => {
  navigation.navigate(route as never);
};
export const objectToCheckReturnBoolean = (obj: any) => {
  var result = false;
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'string') {
      if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
        result = true;
      }
    }
    if (typeof obj[key] === 'boolean') {
      if (obj[key] === false) {
        result = true;
      }
    }
  });
  return result;
};
export const ValidationFields = {
  email: {
    regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  },
  password: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
  },
};
