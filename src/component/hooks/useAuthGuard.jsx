let token =window.localStorage.getItem('token');


export const useGuard = () => {

    if (!token) {
        localStorage.clear();
        return false;
    }

    return true;

}