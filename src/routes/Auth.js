export const isAuthenticated = () => {
  const data = localStorage.getItem('user');

  if (!data || data.access_token === ' ') return;

  // eslint-disable-next-line consistent-return
  return true;
};
