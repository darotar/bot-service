import http from '../utils/http';

export default {
  /**
   * Signin
   * @param login
   * @param password
   * @param remember
   * @returns {Promise}
   */
  login: (login, password, remember = false) => {
    return http.post(`/api/users/sign`, {login, password, remember});
  },

  /**
   * Signout
   * @returns {Promise}
   */
  logout: () => {
    return http.delete(`/api/users/sign`);
  },

  /**
   * @return {Promise}
   */
  current: () => {
    return http.get(`/api/users/self`);
  },

  /**
   * @return {Promise}
   */
  signUp: (data) => {
    return http.get('/api/users/add', data);
  },

  /**
   * @return {Promise}
   */
  remindPassword: (data) => {
    return http.post('/api/users/remind', data);
  }
};