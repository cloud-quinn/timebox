export const apiBaseUrl = 'http://localhost:9100';
export const apiSections = {
    user: { id: 'user', path: '/user' }
};
export const apiPaths = {
    authenticate: { id: 'authenticate', path: '/authenticate', parent: apiSections.user.path, authenticate: false }
};
export const uiPaths = {
    login: { id: 'login', title: 'Login', path: 'login', class: 'fa-user' }
};
export const icons = {
    information: 'fa-info-circle',
    success: 'fa-check-circle',
    failure: 'fa-times-circle'
}
export const messages = {
    submit: 'Submit'
}