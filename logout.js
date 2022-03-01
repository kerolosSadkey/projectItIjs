function logout() {
    if(localStorage.getItem("isLogged")=='true')
    {
        localStorage.removeItem("currUserEmail");
        localStorage.removeItem("currUserPassword");
        localStorage.removeItem("currUserName");
        localStorage.removeItem("currUserId");
        localStorage.removeItem("isLogged");
    }
    else if (sessionStorage.getItem("isLogged")=='true')
    {
        sessionStorage.removeItem("currUserEmail");
        sessionStorage.removeItem("currUserPassword");
        sessionStorage.removeItem("currUserName");
        sessionStorage.removeItem("currUserId");
        sessionStorage.removeItem("isLogged");
  }
  location.reload();
}